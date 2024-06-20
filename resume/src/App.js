import React, { useState,useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PersonalInfoPage from './components/PersonalInfoPage';
import Description from './components/DescriptionPage';
import EducationPage from './components/EducationPage';
import WorkExperiencePage from './components/WorkExperiencePage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/ResumePage';
import './App.css'; // Import CSS file for styling

const App = () => {
  const [currentPage, setCurrentPage] = useState('personalInfo');
  const [personalInfo, setPersonalInfo] = useState({});
  const [description, setDescription] = useState('');
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState({});
  const [projectsData, setProjectsData] = useState([]);

  const resumeRef = useRef();

  const handleNext = (data, nextPage) => {
    switch (currentPage) {
      case 'personalInfo':
        setPersonalInfo(data);
        setCurrentPage(nextPage);
        break;
      case 'description':
        setDescription(data);
        setCurrentPage(nextPage);
        break;
      case 'education':
        setEducationData(data);
        setCurrentPage(nextPage);
        break;
      case 'workExperience':
        setExperienceData(data);
        setCurrentPage(nextPage);
        break;
      case 'skills':
        setSkillsData(data);
        setCurrentPage(nextPage);
        break;
      case 'projects':
        setProjectsData(data);
        setCurrentPage(nextPage);
        break;
      default:
        break;
    }
  };

  const handleBack = (prevPage) => {
    setCurrentPage(prevPage);
  };

  const handleDownload = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const contentHeight = resumeRef.current.offsetHeight;
    const contentWidth = resumeRef.current.offsetWidth;
    html2canvas(resumeRef.current, {
      scale: 1,
      scrollX: 0,
      scrollY: 0,
      width: contentWidth,
      height: contentHeight,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
      useCORS: true, // This is important to capture images from different origins
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      // Add image Data to PDF
      pdf.addImage(imgData, 'PNG', 0, 0, contentWidth, contentHeight);

      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="app-container">
      {currentPage === 'personalInfo' && <PersonalInfoPage onNext={(data) => handleNext(data, 'description')} />}
      {currentPage === 'description' && <Description onNext={(data) => handleNext(data, 'education')} />}
      {currentPage === 'education' && (
        <EducationPage onBack={() => handleBack('description')} onNext={(data) => handleNext(data, 'workExperience')} />
      )}
      {currentPage === 'workExperience' && (
        <WorkExperiencePage onBack={() => handleBack('education')} onNext={(data) => handleNext(data, 'skills')} />
      )}
      {currentPage === 'skills' && <SkillsPage onBack={() => handleBack('workExperience')} onNext={(data) => handleNext(data, 'projects')} />}
      {currentPage === 'projects' && <ProjectsPage onBack={() => handleBack('skills')} onNext={(data) => handleNext(data, 'resume')} />}
      {currentPage === 'resume' && (
        <ResumePage
        ref = {resumeRef}
          personalInfo={personalInfo}
          description={description}
          educationData={educationData}
          experienceData={experienceData}
          skillsData={skillsData}
          projectsData={projectsData}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
};

export default App;

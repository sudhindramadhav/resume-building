import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css';
import PersonalInfoPage from './components/PersonalInfoPage';
import DescriptionPage from './components/DescriptionPage';
import EducationPage from './components/EducationPage';
import WorkExperiencePage from './components/WorkExperiencePage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/ResumePage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('personalInfo');
  const [personalInfo, setPersonalInfo] = useState({});
  const [description, setDescription] = useState('');
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState({});
  const [projectsData, setProjectsData] = useState([]);

  // Ref for the resume page container
  const resumeRef = useRef(null);

  // Function to calculate number of pages in resume
  const handleDownload = async () => {
    if (!resumeRef.current) return;
  
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageHeight = pdf.internal.pageSize.height;
    const resumeHeight = resumeRef.current.offsetHeight;
    const numberOfPages = Math.ceil(resumeHeight / pageHeight);
  
    for (let i = 0; i < numberOfPages; i++) {
      const yOffset = -(i * pageHeight * 4); // Scale factor
  
      await html2canvas(resumeRef.current, {
        scrollY: yOffset,
        width: resumeRef.current.offsetWidth,
        height: pageHeight,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: resumeHeight,
        useCORS: true,
        scale: 2,
        backgroundColor: '#ffffff',
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  
        if (i < numberOfPages - 1) {
          pdf.addPage();
        }
      });
    }
  
    pdf.save('resume.pdf');
  };
  // Function to handle navigation between pages
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

  // Function to handle going back to previous page
  const handleBack = (prevPage) => {
    setCurrentPage(prevPage);
  };

  return (
    <div className="app-container">
      {currentPage === 'personalInfo' && <PersonalInfoPage onNext={(data) => handleNext(data, 'description')} />}
      {currentPage === 'description' && <DescriptionPage onNext={(data) => handleNext(data, 'education')} />}
      {currentPage === 'education' && (
        <EducationPage onBack={() => handleBack('description')} onNext={(data) => handleNext(data, 'workExperience')} />
      )}
      {currentPage === 'workExperience' && (
        <WorkExperiencePage onBack={() => handleBack('education')} onNext={(data) => handleNext(data, 'skills')} />
      )}
      {currentPage === 'skills' && <SkillsPage onBack={() => handleBack('workExperience')} onNext={(data) => handleNext(data, 'projects')} />}
      {currentPage === 'projects' && (
        <ProjectsPage onBack={() => handleBack('skills')} onNext={(data) => handleNext(data, 'resume')} />
      )}
      {currentPage === 'resume' && (
        <ResumePage
          ref={resumeRef}
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

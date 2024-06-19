import React from 'react';
import './ResumePage.css'; 
import PersonalInfo from './PersonalInfo';// Import CSS file for styling
const handleDownload = () => {
    const doc = new jsPDF();
    // Format and add content to PDF doc
    doc.text(`Name: ${personalInfo.firstName} ${personalInfo.lastName}`, 10, 10);
    doc.text(`Email: ${personalInfo.email}`, 10, 20);
    doc.text(`Phone: ${personalInfo.phone}`, 10, 30);
    doc.text(`Address: ${personalInfo.address}`, 10, 40);
    doc.text(`Description: ${description}`, 10, 50);

    // Add more content based on educationData, experienceData, skillsData, projectsData

    doc.save('resume.pdf');
  };
  
const ResumePage = ({
  personalInfo,
  description,
  educationData,
  experienceData,
  skillsData,
  projectsData,
}) => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <section className="section">
        <h2>Personal Information</h2>
        <p>
          Name: {personalInfo.firstName} {personalInfo.lastName}
          <br />
          Email: {personalInfo.email}
          <br />
          Phone: {personalInfo.phone}
          <br />
          Address: {personalInfo.address}
        </p>
      </section>
      <section className="section">
        <h2>Description</h2>
        <p>{description}</p>
      </section>
      <section className="section">
        <h2>Education</h2>
        <ul>
          {educationData.map((education, index) => (
            <li key={index}>
              {education.degree} - {education.institution} ({education.year})
            </li>
          ))}
        </ul>
      </section>
      <section className="section">
        <h2>Work Experience</h2>
        <ul>
          {experienceData.map((experience, index) => (
            <li key={index}>
              {experience.position} at {experience.company} ({experience.year})
            </li>
          ))}
        </ul>
      </section>
      <section className="section">
        <h2>Skills</h2>
        <ul>
          {skillsData.map((skill, index) => (
            <li key={index}>
              {skill.skill} - {skill.level}
            </li>
          ))}
        </ul>
      </section>
      <section className="section">
        <h2>Projects</h2>
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>GitHub Link: <a href={project.githubLink}>{project.githubLink}</a></p>
          </div>
        ))}
      </section>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default ResumePage;

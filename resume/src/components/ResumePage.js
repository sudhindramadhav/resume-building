import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ResumePage.css'; // Import CSS file for styling

const ResumePage = React.forwardRef((
  {
    personalInfo,
    description,
    educationData,
    experienceData,
    skillsData,
    projectsData,
    onDownload,
  },
  ref
) => {
  return (
    <div className="resume-container" ref={ref}>
      <h1>Resume</h1>
      <section className="section">
        <h2>Personal Information</h2>
        {personalInfo.profileImage && (
          <div className="profile-image-container">
            <img
              src={URL.createObjectURL(personalInfo.profileImage)}
              alt="Profile"
              className="profile-image"
            />
          </div>
        )}
        <p>
          Name: {personalInfo.firstName} {personalInfo.lastName}
          <br />
          Phone: {personalInfo.phoneNumber}
          <br />
          Email: {personalInfo.email}
          <br />
          LinkedIn: <a href={personalInfo.linkedIn}>{personalInfo.linkedIn}</a>
          <br />
          GitHub: <a href={personalInfo.github}>{personalInfo.github}</a>
        </p>
      </section>
      <section className="section">
        <h2>Description</h2>
        <p>{description}</p>
      </section>
      <section className="section">
        <h2>Education</h2>
        {Array.isArray(educationData) && educationData.length > 0 ? (
          <ul>
            {educationData.map((education, index) => (
              <li key={index}>
                <strong>{education.level}</strong>:
                <ul>
                  <li>
                    {education.schoolName || education.collegeName} -{' '}
                    {education.yearOfPassing}
                  </li>
                  {education.percentage && (
                    <li>Percentage: {education.percentage}</li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No education data available</p>
        )}
      </section>
      <section className="section">
        <h2>Work Experience</h2>
        {Array.isArray(experienceData) && experienceData.length > 0 ? (
          <ul>
            {experienceData.map((experience, index) => (
              <li key={index}>
                {experience.role} at {experience.company} (
                {experience.duration})
              </li>
            ))}
          </ul>
        ) : (
          <p>No work experience data available</p>
        )}
      </section>
      <section className="section">
        <h2>Skills</h2>
        <ul>
          {skillsData.skills.map((skill, index) => (
            <li key={index}>
              {skill.skill} - {skill.level}
            </li>
          ))}
        </ul>
        <h2>Languages</h2>
        <ul>
          {skillsData.languages.map((language, index) => (
            <li key={index}>
              {language.language} - {language.proficiency}
            </li>
          ))}
        </ul>
        <h2>Hobbies</h2>
        <ul>
          {skillsData.hobbies.map((hobby, index) => (
            <li key={index}>{hobby.hobby}</li>
          ))}
        </ul>
      </section>
      <section className="section">
        <h2>Projects</h2>
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              GitHub Link:{' '}
              <a href={project.githubLink}>{project.githubLink}</a>
            </p>
          </div>
        ))}
      </section>
      <button onClick={onDownload}>Download Resume</button>
    </div>
  );
});

export default ResumePage;

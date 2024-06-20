import React from 'react';
import './ResumePage.css'; // Import CSS file for styling
import jsPDF from 'jspdf';
const ResumePage = ({
  personalInfo,
  description,
  educationData,
  experienceData,
  skillsData,
  projectsData,
  onDownload,
}) => {

  const handleDownload = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Content of the resume
    const content = `
      Resume
      ------------------------------------------
      Personal Information:
      Name: ${personalInfo.firstName} ${personalInfo.lastName}
      Phone: ${personalInfo.phoneNumber}
      Email: ${personalInfo.email}
      LinkedIn: ${personalInfo.linkedIn}
      GitHub: ${personalInfo.github}

      Description:
      ${description}

      Education:
      ${educationData.map((education, index) => `
        ${education.level}:
        - School Name: ${education.schoolName}
        - Year of Passing: ${education.yearOfPassing}
        - Percentage: ${education.percentage}
      `).join('\n\n')}

      Work Experience:
      ${experienceData.map((experience, index) => `
        - Position: ${experience.position}
        - Company: ${experience.company}
        - Year: ${experience.year}
      `).join('\n\n')}

      Skills:
      ${skillsData.skills.map((skill, index) => `
        - Skill: ${skill.skill}
        - Level: ${skill.level}
      `).join('\n\n')}

      Projects:
      ${projectsData.map((project, index) => `
        - Title: ${project.title}
        - Description: ${project.description}
        - GitHub Link: ${project.githubLink}
      `).join('\n\n')}
    `;

    // Add content to PDF
    doc.text(content, 10, 10);
    doc.save('resume.pdf');
  };

  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <section className="section">
        <h2>Personal Information</h2>
        {personalInfo.profileImage && (
          <div className="profile-image-container">
            <img src={URL.createObjectURL(personalInfo.profileImage)} alt="Profile" className="profile-image" />
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
            {education.level === 'college' ? (
              <>
                <li><strong>College Name:</strong> {education.collegeName}</li>
                <li><strong>Year of Passing:</strong> {education.yearOfPassing}</li>
                {education.percentage && <li><strong>Percentage:</strong> {education.percentage}</li>}
              </>
            ) : (
              <>
                <li><strong>School Name:</strong> {education.schoolName}</li>
                <li><strong>Year of Passing:</strong> {education.yearOfPassing}</li>
                {education.percentage && <li><strong>Percentage:</strong> {education.percentage}</li>}
              </>
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
          <strong>({experience.role})</strong>: Role at {experience.company} for ({experience.duration} months)
        </li>
      ))}
    </ul>
  ) : (
    <p>No work experience data available</p>
  )}
</section>

<section className="section">
  <h2>Skills</h2>
  {Array.isArray(skillsData.skills) && skillsData.skills.length > 0 ? (
    <ul>
      {skillsData.skills.map((skill, index) => (
        <li key={index}>
          {skill.skill} - {skill.level}
        </li>
      ))}
    </ul>
  ) : (
    <p>No skills data available</p>
  )}

  <h2>Languages</h2>
  {Array.isArray(skillsData.languages) && skillsData.languages.length > 0 ? (
    <ul>
      {skillsData.languages.map((language, index) => (
        <li key={index}>
          {language.language} - {language.proficiency}
        </li>
      ))}
    </ul>
  ) : (
    <p>No languages data available</p>
  )}

  <h2>Hobbies</h2>
  {Array.isArray(skillsData.hobbies) && skillsData.hobbies.length > 0 ? (
    <ul>
      {skillsData.hobbies.map((hobby, index) => (
        <li key={index}>
          {hobby.hobby}
        </li>
      ))}
    </ul>
  ) : (
    <p>No hobbies data available</p>
  )}
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

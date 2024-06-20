import React, { useState, useEffect } from 'react';
import './ProjectsPage.css'; // Import CSS file for styling

const ProjectsPage = ({ onNext, educationData }) => {
  // Initialize with one empty project
  const [projectsData, setProjectsData] = useState([{ title: '', description: '', githubLink: '' }]);

  useEffect(() => {
    // If educationData changes, reset projectsData to one empty project
    setProjectsData([{ title: '', description: '', githubLink: '' }]);
  }, [educationData]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...projectsData];
    updatedData[index] = { ...updatedData[index], [name]: value };
    setProjectsData(updatedData);
  };

  const handleAddMore = () => {
    setProjectsData([...projectsData, { title: '', description: '', githubLink: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onNext) {
      onNext(projectsData);
    }
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <form onSubmit={handleSubmit}>
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <div className="form-group">
              <label htmlFor={`title-${index}`}>Project Title:</label>
              <input
                type="text"
                id={`title-${index}`}
                name="title"
                value={project.title}
                onChange={(e) => handleChange(e, index)}
                placeholder={`Project Title ${index + 1}`}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`description-${index}`}>Project Description:</label>
              <textarea
                id={`description-${index}`}
                name="description"
                value={project.description}
                onChange={(e) => handleChange(e, index)}
                placeholder={`Project Description ${index + 1}`}
                rows={3}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`githubLink-${index}`}>GitHub Link:</label>
              <input
                type="text"
                id={`githubLink-${index}`}
                name="githubLink"
                value={project.githubLink}
                onChange={(e) => handleChange(e, index)}
                placeholder={`GitHub Link ${index + 1}`}
                required
              />
            </div>
          </div>
        ))}
        <div className="form-group">
          <button type="button" onClick={handleAddMore}>Add More</button>
        </div>
        <div className="form-group">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectsPage;

import React, { useState } from 'react';
import './WorkExperiencePage.css'; // Import CSS file for styling

const WorkExperiencePage = ({ onNext }) => {
  const [workExperienceData, setWorkExperienceData] = useState([{ company: '', role: '', duration: '' }]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...workExperienceData];
    updatedData[index] = { ...updatedData[index], [name]: value };
    setWorkExperienceData(updatedData);
  };

  const handleAddMore = () => {
    setWorkExperienceData([...workExperienceData, { company: '', role: '', duration: '' }]);
  };

  const handleNext = () => {
    onNext(workExperienceData); // Pass work experience data to onNext function
  };

  return (
    <div className="work-experience-container">
      <h2>Work Experience</h2>
      {workExperienceData.map((experience, index) => (
        <form key={index} className="form">
          <div className="form-group">
            <label htmlFor={`company-${index}`}>Company:</label>
            <input
              type="text"
              id={`company-${index}`}
              name="company"
              value={experience.company}
              onChange={(e) => handleChange(e, index)}
              placeholder="Company"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`role-${index}`}>Role:</label>
            <input
              type="text"
              id={`role-${index}`}
              name="role"
              value={experience.role}
              onChange={(e) => handleChange(e, index)}
              placeholder="Role"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`duration-${index}`}>Duration:</label>
            <input
              type="text"
              id={`duration-${index}`}
              name="duration"
              value={experience.duration}
              onChange={(e) => handleChange(e, index)}
              placeholder="Duration"
              required
            />
          </div>
        </form>
      ))}
      <div className="button-group">
        <button type="button" onClick={handleAddMore}>Add More</button>
        <button type="button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default WorkExperiencePage;

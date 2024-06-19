import React, { useState } from 'react';
import './WorkExperiencePage.css'; // Import CSS file for styling

const WorkExperiencePage = ({ onSubmit }) => {
  const [workExperienceData, setWorkExperienceData] = useState([
    { company: '', position: '', yearsWorked: '' }
  ]);

  const yearsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Options for years worked dropdown

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...workExperienceData];
    updatedData[index] = { ...updatedData[index], [name]: value };
    setWorkExperienceData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(workExperienceData); // Call onSubmit function passed from props
  };

  const handleAddMore = () => {
    setWorkExperienceData([...workExperienceData, { company: '', position: '', yearsWorked: '' }]);
  };

  return (
    <div className="work-experience-container">
      <h2>Work Experience</h2>
      <form onSubmit={handleSubmit}>
        {workExperienceData.map((experience, index) => (
          <div key={index}>
            <div className="form-group">
              <label htmlFor={`company-${index}`}>{`Company ${index + 1}:`}</label>
              <input
                type="text"
                id={`company-${index}`}
                name="company"
                value={experience.company}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`position-${index}`}>Position:</label>
              <input
                type="text"
                id={`position-${index}`}
                name="position"
                value={experience.position}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`yearsWorked-${index}`}>Years Worked:</label>
              <select
                id={`yearsWorked-${index}`}
                name="yearsWorked"
                value={experience.yearsWorked}
                onChange={(e) => handleChange(e, index)}
                required
              >
                <option value="">Select Years Worked</option>
                {yearsOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <div className="form-group">
          <button type="button" onClick={handleAddMore}>Add More</button>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default WorkExperiencePage;

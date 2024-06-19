import React, { useState } from 'react';

const WorkExperiencePage = ({ onNext }) => {
  const [workExperienceData, setWorkExperienceData] = useState({ company: '', role: '', duration: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkExperienceData({ ...workExperienceData, [name]: value });
  };

  const handleNext = () => {
    onNext(workExperienceData);
  };

  return (
    <div className="work-experience-container">
      <h2>Work Experience</h2>
      <form>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={workExperienceData.company}
            onChange={handleChange}
            placeholder="Company"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={workExperienceData.role}
            onChange={handleChange}
            placeholder="Role"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={workExperienceData.duration}
            onChange={handleChange}
            placeholder="Duration"
            required
          />
        </div>
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default WorkExperiencePage;

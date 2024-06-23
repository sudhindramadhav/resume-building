import React, { useState } from 'react';
import './EducationPage.css'; // Import CSS file for styling

const EducationPage = ({ onBack, onNext }) => {
  const [educationData, setEducationData] = useState({
    tenth: { schoolName: '', yearOfPassing: '', percentage: '' },
    twelfth: { schoolName: '', yearOfPassing: '', percentage: '' },
    college: { collegeName: '', yearOfPassing: '', stream: '', percentage: '' }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [level, field] = name.split('.');

    setEducationData({
      ...educationData,
      [level]: {
        ...educationData[level],
        [field]: value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert educationData object into an array of objects
    const formattedEducationData = Object.keys(educationData).map((level) => ({
      level,
      ...educationData[level]
    }));

    onNext(formattedEducationData);
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear+3; i >= 1970; i--) {
      years.push(<option key={i} value={i}>{i}</option>);
    }
    return years;
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Education Details</h2>
      
      <label htmlFor="tenth.schoolName">10th Grade School Name:</label>
      <input
        type="text"
        id="tenth.schoolName"
        name="tenth.schoolName"
        value={educationData.tenth.schoolName}
        onChange={handleChange}
        required
      />
      <label htmlFor="tenth.yearOfPassing">Year of Passing:</label>
      <select
        id="tenth.yearOfPassing"
        name="tenth.yearOfPassing"
        value={educationData.tenth.yearOfPassing}
        onChange={handleChange}
        required
      >
        <option value="">Select Year</option>
        {generateYearOptions()}
      </select>
      <label htmlFor="tenth.percentage">Percentage:</label>
      <input
        type="number"
        id="tenth.percentage"
        name="tenth.percentage"
        value={educationData.tenth.percentage}
        onChange={handleChange}
        min="0"
        max="100"
        required
      />

      <label htmlFor="twelfth.schoolName">12th Grade School Name:</label>
      <input
        type="text"
        id="twelfth.schoolName"
        name="twelfth.schoolName"
        value={educationData.twelfth.schoolName}
        onChange={handleChange}
        required
      />
      <label htmlFor="twelfth.yearOfPassing">Year of Passing:</label>
      <select
        id="twelfth.yearOfPassing"
        name="twelfth.yearOfPassing"
        value={educationData.twelfth.yearOfPassing}
        onChange={handleChange}
        required
      >
        <option value="">Select Year</option>
        {generateYearOptions()}
      </select>
      <label htmlFor="twelfth.percentage">Percentage:</label>
      <input
        type="number"
        id="twelfth.percentage"
        name="twelfth.percentage"
        value={educationData.twelfth.percentage}
        onChange={handleChange}
        min="0"
        max="100"
        required
      />

      <label htmlFor="college.collegeName">College Name:</label>
      <input
        type="text"
        id="college.collegeName"
        name="college.collegeName"
        value={educationData.college.collegeName}
        onChange={handleChange}
        required
      />
      <label htmlFor="college.yearOfPassing">Year of Passing:</label>
      <select
        id="college.yearOfPassing"
        name="college.yearOfPassing"
        value={educationData.college.yearOfPassing}
        onChange={handleChange}
        required
      >
        <option value="">Select Year</option>
        {generateYearOptions()}
      </select>
      <label htmlFor="college.stream">Stream:</label>
      <input
        type="text"
        id="college.stream"
        name="college.stream"
        value={educationData.college.stream}
        onChange={handleChange}
        required
      />
      <label htmlFor="college.percentage">Percentage:</label>
      <input
        type="number"
        id="college.percentage"
        name="college.percentage"
        value={educationData.college.percentage}
        onChange={handleChange}
        min="0"
        max="100"
        required
      />

      <div className="button-group">
        <button type="button" onClick={() => onBack('description')}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default EducationPage;

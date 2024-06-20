import React, { useState } from 'react';

const EducationPage = ({ onBack, onNext }) => {
  const [educationData, setEducationData] = useState({
    tenth: { schoolName: '', yearOfPassing: '',percentage:'' },
    twelfth: { schoolName: '', yearOfPassing: '',percentage:'' },
    college: { collegeName: '', yearOfPassing: '', stream: '',percentage:'' }
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

  return (
    <form onSubmit={handleSubmit} className="form">
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
      <input
        type="text"
        id="tenth.yearOfPassing"
        name="tenth.yearOfPassing"
        value={educationData.tenth.yearOfPassing}
        onChange={handleChange}
        required
      />
      <label htmlFor="tenth.percentage">Percentage:</label>
      <input
        type="text"
        id="tenth.percentage"
        name="tenth.percentage"
        value={educationData.tenth.percentage}
        onChange={handleChange}
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
      <input
        type="text"
        id="twelfth.yearOfPassing"
        name="twelfth.yearOfPassing"
        value={educationData.twelfth.yearOfPassing}
        onChange={handleChange}
        required
      />

<label htmlFor="twelfth.percentage">Percentage:</label>
      <input
        type="text"
        id="twelfth.percentage"
        name="twelfth.percentage"
        value={educationData.twelfth.percentage}
        onChange={handleChange}
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
      <input
        type="text"
        id="college.yearOfPassing"
        name="college.yearOfPassing"
        value={educationData.college.yearOfPassing}
        onChange={handleChange}
        required
      />
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
        type="text"
        id="college.percentage"
        name="college.percentage"
        value={educationData.college.percentage}
        onChange={handleChange}
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

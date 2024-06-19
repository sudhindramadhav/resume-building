import React, { useState } from 'react';

const EducationPage = ({ onBack,onNext }) => {
  const [educationData, setEducationData] = useState({
    tenth: { schoolName: '', yearOfPassing: '' },
    twelfth: { schoolName: '', yearOfPassing: '' },
    college: { collegeName: '', yearOfPassing: '', stream: '' }
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
    onNext(educationData);
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
        // required
      />
      <label htmlFor="tenth.yearOfPassing">Year of Passing:</label>
      <input
        type="text"
        id="tenth.yearOfPassing"
        name="tenth.yearOfPassing"
        value={educationData.tenth.yearOfPassing}
        onChange={handleChange}
        // required
      />

      <label htmlFor="twelfth.schoolName">12th Grade School Name:</label>
      <input
        type="text"
        id="twelfth.schoolName"
        name="twelfth.schoolName"
        value={educationData.twelfth.schoolName}
        onChange={handleChange}
        // required
      />
      <label htmlFor="twelfth.yearOfPassing">Year of Passing:</label>
      <input
        type="text"
        id="twelfth.yearOfPassing"
        name="twelfth.yearOfPassing"
        value={educationData.twelfth.yearOfPassing}
        onChange={handleChange}
        // required
      />

      <label htmlFor="college.collegeName">College Name:</label>
      <input
        type="text"
        id="college.collegeName"
        name="college.collegeName"
        value={educationData.college.collegeName}
        onChange={handleChange}
        // required
      />
      <label htmlFor="college.yearOfPassing">Year of Passing:</label>
      <input
        type="text"
        id="college.yearOfPassing"
        name="college.yearOfPassing"
        value={educationData.college.yearOfPassing}
        onChange={handleChange}
        // required
      />
      <label htmlFor="college.stream">Stream:</label>
      <input
        type="text"
        id="college.stream"
        name="college.stream"
        value={educationData.college.stream}
        onChange={handleChange}
        // required
      />
        <div className="button-group">
        <button type="next">Next</button>
      </div>
    </form>
  );
};

export default EducationPage;

// PersonalInfoPage.js

import React, { useState } from 'react';
import './PersonalInfoPage.css'; // Import CSS file for styling

const PersonalInfoPage = ({ onNext }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    linkedIn: '',
    github: '',
    profileImage: null // To store the selected file object
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPersonalInfo({
      ...personalInfo,
      profileImage: file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(personalInfo); // Call the function passed from props
  };

  return (
    <div className="personal-info-container">
      <h2>Personal Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-9]{10}"
            value={personalInfo.phoneNumber}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedIn">LinkedIn Profile:</label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            value={personalInfo.linkedIn}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="github">GitHub Profile:</label>
          <input
            type="text"
            id="github"
            name="github"
            value={personalInfo.github}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profileImage">Profile Image:</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoPage;

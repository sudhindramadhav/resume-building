// import React, { useState } from 'react';

// const PersonalInfoPage = ({ onNext }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     linkedinProfile: '',
//     githubProfile: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleNext = (e) => {
//     e.preventDefault();
//     onNext(formData);
//   };

//   return (
//     <form onSubmit={handleNext} className="form">
//       <label htmlFor="firstName">First Name:</label>
//       <input
//         type="text"
//         id="firstName"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleChange}
//         // required
//       />
      
//       <label htmlFor="lastName">Last Name:</label>
//       <input
//         type="text"
//         id="lastName"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleChange}
//         // required
//       />
      
//       <label htmlFor="phoneNumber">Phone Number:</label>
//       <input
//         type="tel"
//         id="phoneNumber"
//         name="phoneNumber"
//         value={formData.phoneNumber}
//         onChange={handleChange}
//         pattern="^\d{10}$" // Ensure exactly 10 digits
//         // required
//       />
      
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         // required
//       />
      
//       <label htmlFor="linkedinProfile">LinkedIn Profile:</label>
//       <input
//         type="text"
//         id="linkedinProfile"
//         name="linkedinProfile"
//         value={formData.linkedinProfile}
//         onChange={handleChange}
//       />
      
//       <label htmlFor="githubProfile">GitHub Profile:</label>
//       <input
//         type="text"
//         id="githubProfile"
//         name="githubProfile"
//         value={formData.githubProfile}
//         onChange={handleChange}
//       />
      
//       <button type="submit">Next</button>
//     </form>
//   );
// };

// export default PersonalInfoPage;

import React, { useState } from 'react';
import './PersonalInfoPage.css'; // Import CSS file for styling

const PersonalInfoPage = ({ onNext }) => {
  const [formData, setFormData] = useState({
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
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profileImage: file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
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
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-9]{10}" // Ensure only 10 digits
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedIn">LinkedIn Profile:</label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="github">GitHub Profile:</label>
          <input
            type="text"
            id="github"
            name="github"
            value={formData.github}
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

import React, { useState } from 'react';
import './DescriptionPage.css'; // Import CSS file for styling

const DescriptionPage = ({ onNext }) => {
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(description, 'education'); // Pass description data to onNext and navigate to education page
  };

  return (
    <div className="description-container">
      <h2>Description</h2>
      <form onSubmit={handleSubmit} className="description-form">
        <label htmlFor="description">Description/About:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Enter your description..."
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default DescriptionPage;

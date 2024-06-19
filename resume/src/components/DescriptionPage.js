import React, { useState } from 'react';

const DescriptionPage = ({ onNext }) => {
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    onNext(description);
  };

  return (
    <form onSubmit={handleNext} className="form">
      <label htmlFor="description">Description/About:</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={handleChange}
        required
      />
      
      <button type="submit">Next</button>
    </form>
  );
};

export default DescriptionPage;

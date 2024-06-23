import React, { useState } from 'react';
import './SkillsPage.css'; // Import CSS file for styling
import ProjectsPage from './ProjectsPage';

const SkillsPage = ({ onNext }) => {
  const [skillsData, setSkillsData] = useState([{ skill: '', level: '' }]);
  const [languagesData, setLanguagesData] = useState([{ language: '', proficiency: '' }]);
  const [hobbiesData, setHobbiesData] = useState([{ hobby: '' }]);

  const handleChange = (e, index, category) => {
    const { name, value } = e.target;
    const updatedData = [...getCategoryData(category)];
    updatedData[index] = { ...updatedData[index], [name]: value };

    if (value === '' && index !== updatedData.length - 1) {
      return;
    }

    if (index === updatedData.length - 1) {
      handleAddMore(category);
    }

    switch (category) {
      case 'skills':
        setSkillsData(updatedData);
        break;
      case 'languages':
        setLanguagesData(updatedData);
        break;
      case 'hobbies':
        setHobbiesData(updatedData);
        break;
      default:
        break;
    }
  };

  const getCategoryData = (category) => {
    switch (category) {
      case 'skills':
        return skillsData;
      case 'languages':
        return languagesData;
      case 'hobbies':
        return hobbiesData;
      default:
        return [];
    }
  };

  const handleAddMore = (category) => {
    switch (category) {
      case 'skills':
        setSkillsData([...skillsData, { skill: '', level: '' }]);
        break;
      case 'languages':
        setLanguagesData([...languagesData, { language: '', proficiency: '' }]);
        break;
      case 'hobbies':
        setHobbiesData([...hobbiesData, { hobby: '' }]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      skills: skillsData,
      languages: languagesData,
      hobbies: hobbiesData
    };
    if (typeof onNext === 'function') {
      onNext(data); // Call onNext function passed from props
    } else {
      console.error('onNext is not a function');
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (typeof onNext === 'function') {
      onNext(ProjectsPage); // Call onNext with ProjectsPage component to indicate moving to the next step
    } else {
      console.error('onNext is not a function');
    }
  };

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const proficiencyLevels = ['Basic', 'Conversational', 'Fluent', 'Native'];

  return (
    <div className="skills-container">
      <h2>Skills, Languages, Hobbies</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Skills</h3>
          {skillsData.map((skill, index) => (
            <div key={index} className="form-row">
              <input
                type="text"
                name="skill"
                value={skill.skill}
                onChange={(e) => handleChange(e, index, 'skills')}
                placeholder={`Skill ${index + 1}`}
                required
              />
              <select
                name="level"
                value={skill.level}
                onChange={(e) => handleChange(e, index, 'skills')}
                required
              >
                <option value="" disabled>Level</option>
                {skillLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          ))}
          <button type="button" onClick={() => handleAddMore('skills')}>Add More Skills</button>
        </div>
        <div className="form-group">
          <h3>Languages Known</h3>
          {languagesData.map((language, index) => (
            <div key={index} className="form-row">
              <input
                type="text"
                name="language"
                value={language.language}
                onChange={(e) => handleChange(e, index, 'languages')}
                placeholder={`Language ${index + 1}`}
                required
              />
              <select
                name="proficiency"
                value={language.proficiency}
                onChange={(e) => handleChange(e, index, 'languages')}
                required
              >
                <option value="" disabled>Proficiency</option>
                {proficiencyLevels.map((proficiency) => (
                  <option key={proficiency} value={proficiency}>{proficiency}</option>
                ))}
              </select>
            </div>
          ))}
          <button type="button" onClick={() => handleAddMore('languages')}>Add More Languages</button>
        </div>
        <div className="form-group">
          <h3>Hobbies and Interests</h3>
          {hobbiesData.map((hobby, index) => (
            <div key={index} className="form-row">
              <input
                type="text"
                name="hobby"
                value={hobby.hobby}
                onChange={(e) => handleChange(e, index, 'hobbies')}
                placeholder={`Hobby ${index + 1}`}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => handleAddMore('hobbies')}>Add More Hobbies</button>
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default SkillsPage;

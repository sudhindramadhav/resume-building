import React, { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoPage';
import DescriptionForm from './components/DescriptionPage';
import EducationForm from './components/EducationPage';
import WorkExperienceForm from './components/WorkExperiencePage';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [setPersonalInfo] = useState(null);
  const [setDescription] = useState(null);
  const [setEducationData] = useState(null);
  const [setWorkExperienceData] = useState(null);
  const handlePersonalInfoSubmit = (data) => {
    setPersonalInfo(data);
    setStep(2); 
  };

  const handleDescriptionSubmit = (data) => {
    setDescription(data);
    setStep(3); 
  };

  const handleEducationSubmit = (data) => {
    setEducationData(data);
    setStep(4); 
  };
  const handleWorkExperienceSubmit = (data) => {
    setWorkExperienceData(data);
    setStep(5); // Move to next step or complete
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume Builder</h1>
      </header>
      <main className="App-main">
        {step === 1 && (
          <div className="form-container">
            <h2>Step 1: Personal Information</h2>
            <PersonalInfoForm onNext={handlePersonalInfoSubmit} />
          </div>
        )}
        {step === 2 && (
          <div className="form-container">
            <h2>Step 2: Description/About</h2>
            <DescriptionForm onNext={handleDescriptionSubmit} />
          </div>
        )}
        {step === 3 && (
          <div className="form-container">
            <h2>Step 3: Education Details</h2>
            <EducationForm onNext={handleEducationSubmit} />
          </div>
        )}
        {step === 4 && (
          <div className="form-container">
            <h2>Step 4: Work Experience</h2>
            <WorkExperienceForm onSubmit={handleWorkExperienceSubmit} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

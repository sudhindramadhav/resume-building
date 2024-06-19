// import React, { useState } from 'react';
// import PersonalInfoPage from './components/PersonalInfoPage';
// import DescriptionForm from './components/DescriptionPage';
// import EducationForm from './components/EducationPage';
// import WorkExperienceForm from './components/WorkExperiencePage';
// import SkillsPage from './components/SkillsPage';
// import ProjectsPage from './components/ProjectsPage';
// import './App.css';

// function App() {
//   const [step, setStep] = useState(1);
//   const [personalInfo, setPersonalInfo] = useState(null);
//   const [description, setDescription] = useState(null);
//   const [educationData, setEducationData] = useState(null);
//   const [workExperienceData, setWorkExperienceData] = useState(null);
//   const [skillExperienceData, setSkillExperienceData] = useState(null);
//   const [projectsData, setProjectsData] = useState(null);

//   const handlePersonalInfoSubmit = (data) => {
//     setPersonalInfo(data);
//     setStep(2);
//   };

//   const handleDescriptionSubmit = (data) => {
//     setDescription(data);
//     setStep(3);
//   };

//   const handleEducationSubmit = (data) => {
//     setEducationData(data);
//     setStep(4);
//   };

//   const handleWorkExperienceSubmit = (data) => {
//     setWorkExperienceData(data);
//     setStep(5); // Move to next step or complete
//   };

//   const handleSkillsPageSubmit = (data) => {
//     setSkillExperienceData(data);
//     setStep(6); // Move to next step or complete
//   };

//   const handleProjectsPageSubmit = (data) => {
//     setProjectsData(data);
//     // Optionally move to next step or complete application
//     // setStep(7);
//   };

//   const handleBack = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Resume Builder</h1>
//       </header>
//       <main className="App-main">
//         {step === 1 && (
//           <div className="form-container">
//             <h2>Step 1: Personal Information</h2>
//             <PersonalInfoPage onNext={handlePersonalInfoSubmit} />
//           </div>
//         )}
//         {step === 2 && (
//           <div className="form-container">
//             <h2>Step 2: Description/About</h2>
//             <DescriptionForm onNext={handleDescriptionSubmit} />
//             <br />
//             <div className='button-group'>
//               <button onClick={handleBack}>Back</button>
//             </div>
//           </div>
//         )}
//         {step === 3 && (
//           <div className="form-container">
//             <h2>Step 3: Education Details</h2>
//             <EducationForm onNext={handleEducationSubmit} />
//             <br/>
//             <div className="button-group">
//               <button onClick={handleBack}>Back</button>
//             </div>
//           </div>
//         )}
//         {step === 4 && (
//           <div className="form-container">
//             <h2>Step 4: Work Experience</h2>
//             <WorkExperienceForm onNext={handleWorkExperienceSubmit} />
//             <br/>
//             <div className="button-group">
//               <button onClick={handleBack}>Back</button>
//             </div>
//           </div>
//         )}
//         {step === 5 && (
//           <div className="form-container">
//             <h2>Step 5: Skills and Experience</h2>
//             <SkillsPage onNext={handleSkillsPageSubmit} />
//             <br/>
//             <div className="button-group">
//               <button onClick={handleBack}>Back</button>
//             </div>
//           </div>
//         )}
//         {step === 6 && (
//           <div className="form-container">
//             <h2>Step 6: Projects</h2>
//             <ProjectsPage onNext={handleProjectsPageSubmit} />
//             <br/>
//             <div className="button-group">
//               <button onClick={handleBack}>Back</button>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import PersonalInfoPage from './components/PersonalInfoPage';
import DescriptionForm from './components/DescriptionPage';
import EducationForm from './components/EducationPage';
import WorkExperiencePage from './components/WorkExperiencePage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState(null);
  const [description, setDescription] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [workExperienceData, setWorkExperienceData] = useState(null);
  const [skillExperienceData, setSkillExperienceData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);

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
    setStep(5); 
  };

  const handleSkillsPageSubmit = (data) => {
    setSkillExperienceData(data);
    setStep(6); 
  };

  const handleProjectsPageSubmit = (data) => {
    setProjectsData(data);
    // Optionally move to next step or complete application
    // setStep(7);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
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
            <PersonalInfoPage onNext={handlePersonalInfoSubmit} />
          </div>
        )}
        {step === 2 && (
          <div className="form-container">
            <h2>Step 2: Description/About</h2>
            <DescriptionForm onNext={handleDescriptionSubmit} />
            <br />
            <div className='button-group'>
              <button onClick={handleBack}>Back</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="form-container">
            <h2>Step 3: Education Details</h2>
            <EducationForm onNext={handleEducationSubmit} />
            <br/>
            <div className="button-group">
              <button onClick={handleBack}>Back</button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="form-container">
            <h2>Step 4: Work Experience</h2>
            <WorkExperiencePage onNext={handleWorkExperienceSubmit} />
            <br/>
            <div className="button-group">
              <button onClick={handleBack}>Back</button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="form-container">
            <h2>Step 5: Skills and Experience</h2>
            <SkillsPage onNext={handleSkillsPageSubmit} />
            <br/>
            <div className="button-group">
              <button onClick={handleBack}>Back</button>
            </div>
          </div>
        )}
        {step === 6 && (
          <div className="form-container">
            <h2>Step 6: Projects</h2>
            <ProjectsPage onNext={handleProjectsPageSubmit} />
            <br/>
            <div className="button-group">
              <button onClick={handleBack}>Back</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    
    <section className="about-section">
      <AboutContent togglePopup={togglePopup} />
      <ProfileImage togglePopup={togglePopup} />
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={togglePopup}>
              X
            </button>
            <h2>About Dushantha Majith</h2>
            <p>
              Dushantha is a 24-year-old full stack developer with a passion for building beautiful and functional websites and applications. He has a strong foundation in computer science and software engineering, and is always learning new technologies.
            </p>
            <p>
              His interest in programming started when he was 17. He's fascinated by how computers work and how they can solve real-world problems. He's been programming ever since, with a focus on backend, UI/UX, AI, and machine learning.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

const AboutContent = ({ togglePopup }) => {
  return (
    <div className="about-content">
      <div className="section-title">
        <span className="section-number">01.</span>
        <h2 onClick={togglePopup}><b>About Me</b></h2>
      </div>
      <p>
        Hello! My name is Dushantha Majith. I am a 24 year old undergraduate at the University of NIBM, Srilanka. I'm a full stack developer with a passion for building beautiful and functional websites and applications. I have a strong foundation in computer science and software engineering, and I am always looking to learn new technologies and improve my skills.
      </p>
      <p>
        My interest in programming started when I was 17 years old. I was always fascinated by how computers work and how they can be used to solve real-world problems. I started learning programming by myself and I have been programming ever since. I have a strong interest in backend technologies and UI UX Development, and I am currently learning AI. I am also interested in machine learning and am currently learning ML.
      </p>
    </div>
  );
};

const ProfileImage = ({ togglePopup }) => {
  return (
    <div className="profile-image" onClick={togglePopup}>
      <img
        src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
        alt="Profile image of a person in a red shirt speaking at an event"
      />
    </div>
  );
};

export default AboutMe;
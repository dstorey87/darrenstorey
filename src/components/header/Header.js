import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";
import profilePic from "../../assets/images/darren-tech-background.png";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <>
      <Headroom>
        <header className={isDark ? "dark-menu header" : "header"}>
          <a href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
            <img 
              src={profilePic} 
              alt="Profile" 
              className="mini-profile-pic"
              onClick={() => setShowProfileModal(true)}
              title="Click to view full profile picture"
            />
          </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
    
    {/* Profile Picture Modal */}
    {showProfileModal && (
      <div className="profile-modal-overlay" onClick={() => setShowProfileModal(false)}>
        <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
          <button 
            className="profile-modal-close"
            onClick={() => setShowProfileModal(false)}
            aria-label="Close profile picture"
          >
            ×
          </button>
          <img 
            src={profilePic} 
            alt="Darren Storey - Full Profile" 
            className="profile-modal-image"
          />
          <p className="profile-modal-caption">Darren Storey - CloudOps & DevOps Engineer</p>
        </div>
      </div>
    )}
  </>
  );
}
export default Header;

import React, {useContext} from "react";
import "./Security.scss";
import {securitySection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Security() {
  const {isDark} = useContext(StyleContext);
  
  if (!securitySection.display) {
    return null;
  }
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="security">
        <div className="security-main-div">
          <div className="security-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading security-heading"
                  : "heading security-heading"
              }
            >
              {securitySection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle security-subtitle"
                  : "subTitle security-subtitle"
              }
            >
              {securitySection.subtitle}
            </p>
          </div>
          
          <div className="security-content">
            {securitySection.sections.map((section, index) => (
              <Fade bottom duration={1000} distance="20px" key={index}>
                <div className={isDark ? "dark-mode security-card" : "security-card"}>
                  <div className="security-card-header">
                    <span className="security-icon">{section.icon}</span>
                    <h2 className={isDark ? "dark-mode security-card-title" : "security-card-title"}>
                      {section.title}
                    </h2>
                  </div>
                  <p className={isDark ? "dark-mode security-card-description" : "security-card-description"}>
                    {section.description}
                  </p>
                  <ul className="security-list">
                    {section.skills.map((skill, i) => (
                      <li key={i} className={isDark ? "dark-mode security-list-item" : "security-list-item"}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

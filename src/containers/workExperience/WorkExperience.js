import React, {useContext, useState, useEffect} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth <= 768 ? 1 : 2);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  if (workExperiences.display) {
    const totalCards = workExperiences.experience.length;
    const maxIndex = Math.max(0, totalCards - itemsPerView);
    
    const nextSlide = () => {
      setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };
    
    const prevSlide = () => {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    };
    
    const goToSlide = (index) => {
      setCurrentIndex(Math.min(index, maxIndex));
    };
    
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-carousel-container">
                <button 
                  className={`carousel-nav prev ${currentIndex === 0 ? 'disabled' : ''}`}
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                >
                  ❮
                </button>
                
                <div className="experience-carousel">
                  <div 
                    className="experience-cards-wrapper"
                    style={{
                      transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                      width: `${(totalCards / itemsPerView) * 100}%`
                    }}
                  >
                    {workExperiences.experience.map((card, i) => {
                      return (
                        <div key={i} className="experience-card-container" style={{flex: `0 0 ${100 / itemsPerView}%`}}>
                          <ExperienceCard
                            isDark={isDark}
                            cardInfo={{
                              company: card.company,
                              desc: card.desc,
                              date: card.date,
                              companylogo: card.companylogo,
                              role: card.role,
                              descBullets: card.descBullets
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <button 
                  className={`carousel-nav next ${currentIndex === maxIndex ? 'disabled' : ''}`}
                  onClick={nextSlide}
                  disabled={currentIndex === maxIndex}
                >
                  ❯
                </button>
              </div>
              
              <div className="carousel-dots">
                {Array.from({length: maxIndex + 1}, (_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}

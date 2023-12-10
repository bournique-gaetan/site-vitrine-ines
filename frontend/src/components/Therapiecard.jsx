import React, { useState } from 'react';
import ButtonMore from './ButtonMore';
//import './ParallaxComponent.css';

const ParallaxComponent = () => {
  const [isFlipped, setIsFlipped] = useState([false, false, false]);

  const handleCardClick = (index) => {
    setIsFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  const handleScroll = () => {
    const parallaxElement = document.getElementById('parallax');
    if (parallaxElement) {
      const yPos = window.pageYOffset / parallaxElement.dataset.speed;
      parallaxElement.style.backgroundPosition = `50% ${yPos}px`;
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
       <h2 style={{ position: 'absolute', left: '32%',  top: '50px', width: '100%',fontSize: '40px', zIndex: 2}}>Comment je vais vous aider</h2>
      
      <div
        id="parallax"
        className="parallax"
        data-speed="20" 
      >
        <div className='container'>
          <div className="card-container1">
            <div
              className={`card ${isFlipped[0] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(0)}
            >
              <div className="front">E.M.D.R</div>
              <div className="back">L'EMDR est basée sur l'idée que les traumatismes non résolus peuvent être à l'origine de symptômes émotionnels et psychologiques persistants. Elle vise à aider les individus à traiter ces expériences traumatiques en facilitant la reconnexion des souvenirs traumatisants avec des associations plus adaptatives. <ButtonMore /></div>
            </div>
          </div>

          <div className="card-container2">
            <div
              className={`card ${isFlipped[1] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(1)}
            >
              <div className="front">T.C.C</div>
              <div className="back">La TCC repose sur deux composantes principales : la composante cognitive et la composante comportementale. La composante cognitive vise à identifier et à remettre en question les pensées négatives et les croyances irrationnelles qui contribuent aux difficultés émotionnelles. Elle encourage les individus à examiner leurs schémas de pensée et à remplacer les pensées négatives par des pensées plus réalistes et adaptatives. <ButtonMore /></div>
            </div>
          </div>

          <div className="card-container3">
            <div
              className={`card ${isFlipped[2] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(2)}
            >
              <div className="front">I.C.V</div>
              <div className="back">L'ICV vise à développer la conscience de nos propres réactions corporelles et émotionnelles, ainsi que notre capacité à décoder et à interpréter les signaux non verbaux des autres. Cela nous permet de mieux comprendre nos propres besoins et émotions, ainsi que de saisir les intentions et les émotions des personnes avec lesquelles nous interagissons. <ButtonMore /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxComponent;


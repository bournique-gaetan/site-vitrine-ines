import React from 'react';
import { useState } from 'react'; // Importez useState pour gérer l'état de la carte



export default function RDV ({ imageUrl, title, description })  {
    const [isFlipped, setIsFlipped] = useState([false, false, false]);

  const handleCardClick = (index) => {
    setIsFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="RDV">
       <h2 style={{ position: 'absolute', left: '35%',  top: '50px', width: '100%',fontSize: '50px', zIndex: 2}}>Prendre Rendez-vous</h2>
       <h4 style={{ position: 'absolute', left: '13%',  top: '150px', width: '100%',fontSize: '30px', zIndex: 2}}>Au cabinet</h4>
       <h4 style={{ position: 'absolute', left: '55%',  top: '150px', width: '100%',fontSize: '30px', zIndex: 2}}>En téléconsultation</h4>  
      <div className={`RDVcard ${isFlipped[0] ? 'flipped' : ''}`} onClick={() => handleCardClick(0)}>
        <div className="front">
          <img src="../src/assets/images/cabinet2.jpeg"  />
        </div>
        <div className="back"><img src="../src/assets/images/cabinet2.jpeg" />
        </div>
      </div>
      <div className={`RDVcard ${isFlipped[1] ? 'flipped' : ''}`} onClick={() => handleCardClick(1)}>
        <div className="front">
          <img src="../src/assets/images/teleconsulte.jpeg" alt="Image" />
        </div>
        <div className="back">E.M.D.R
        </div>
      </div>
    </div>
  );
};

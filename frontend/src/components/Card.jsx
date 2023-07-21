import React from 'react';
import ButtonMore from './ButtonMore';


export default function Card ({ imageUrl, title, description })  {

  return (
    <div>
    <div className="card1">
      <img src="../src/assets/images/cabinet2.jpeg" alt={title} className="card-image" />
    </div>
    <div className="card2">
      <img src="../src/assets/images/me.jpeg" alt={title} className="card-image" />
    </div>
    <div className="card3">
      <h2>Presentation</h2>
      <ButtonMore />
    </div>
  </div>
  );
};
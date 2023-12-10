import React from 'react';

export default function Bandeau () {
  return (
    <div className="bandeau">
      <div className="contact-info">
        <a href="inesaissa.psycohologue@gmail.com">
          <i className="fas fa-envelope"></i> inesaissa.psycohologue@gmail.com
        </a>
        <a href="tel:+780978570">
          <i className="fas fa-phone"></i> 0780978570
        </a>
      </div>
      <a href="#prendreRdv" className="btn">Prendre rendez-vous</a>
    </div>
  );
};



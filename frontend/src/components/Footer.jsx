import React from 'react';
import Buttonrdv from './Buttonrdv';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-address">
            <h4>Le cabinet</h4>
          <p>8 rue Courbin, 33000 Bordeaux</p>
          <div className='footerContentButtonrdvCustom'>
          <Buttonrdv />
          </div>
          <p>Important : toute consultation non honorée et non annulée 48h à l'avance est due</p>
        </div>
        <div className="footer-hours">
          <h4>Horaires :</h4>
          <h5>Consultation au cabinet</h5>
          <p>Lundi au jeudi : </p>
          <p>10h - 20h</p>
          <h5>Consultation en ligne </h5>
          <p>Vendredi : 9h - 17h</p>
          <p>9h - 17h</p>
        </div>
        <div className="footer-contact">
          <h4>Contact :</h4>
          <p> 07.80.785.70</p>
          <p>inesaissaychologue@mail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Bandeau from "../components/Bandeau";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

function HonorairesPage() {
  return (
    <div className="honoraires-page">
         <Bandeau />
        <Navbar /> 
      <div className="cards-container">
      <p>Au cabinet, le règlement effectue en espèces ou par chèque. En télé consultation, le règlement s'effectue r virement bancaire (RIB, PAYLIB, chèque...) 48hvant la consultation.</p>
        <div className="card">
          <h3>Consultation (45 minutes)</h3>
          <p>70€</p>
          <p1>Premiere consultation, connsultation de suivi...</p1>
        </div>
        <div className="card">
        <h3>Consultation (1 heure et 30 minutes)</h3>
          <p>120€</p>
          <p1>Connsultation de suivi, EMDR, ICV, ...</p1>
        </div>
        <p><span style={{ color: 'red' }}>ATTENTION !</span>  Les rendez-vous non honorés et non déplacés 48h à l'avance sont dus. Aucune exception.</p>
      </div>
      <div className='footerContentHonorairesCustom'>
          <Footer />
      </div>
    </div>
  );
}

export default HonorairesPage;

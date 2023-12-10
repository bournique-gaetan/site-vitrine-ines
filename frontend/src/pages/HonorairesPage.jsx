import React from 'react';
import Bandeau from "../components/bandeau";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

function HonorairesPage() {
  return (
    <div className="honoraires-page">
         <Bandeau />
        <Navbar /> 
        <Footer />
      <p>Un petit paragraphe sur les honoraires...</p>

      <div className="cards-container">
        <div className="card">
          <h3>Info 1</h3>
          <p>Contenu informatif pour la première carte...</p>
        </div>
        <div className="card">
          <h3>Info 2</h3>
          <p>Contenu informatif pour la deuxième carte...</p>
        </div>
      </div>

      <p>Un autre paragraphe décrivant d'autres informations sur les honoraires...</p>
    </div>
  );
}

export default HonorairesPage;

import React from 'react';

export default function PrendreRendezVousButton  () {
  const handleClick = () => {
    // Logique de gestion du clic sur le bouton
    // Vous pouvez ajouter ici le code pour effectuer une action spécifique
  };

  return (
    <button className="prendre-rendezvous-button" onClick={handleClick}>
      Prendre rendez-vous
    </button>
  );
};

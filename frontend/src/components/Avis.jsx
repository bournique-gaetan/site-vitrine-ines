import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Avis = () => {
  const [avis, setAvis] = useState([
    {
      id: 1,
      text: 'Excellent service! Je suis très satisfait.',
      auteur: 'John Doe',
    },
    {
      id: 2,
      text: 'A recommander! Les résultats sont incroyables.',
      auteur: 'Jane Smith',
    },
    {
      id: 3,
      text:
        "J'ai eu une expérience incroyable avec ce service. Les professionnels étaient très compétents et attentionnés. Ils ont vraiment fait la différence dans ma vie. Je les recommande vivement!",
      auteur: 'John Doe',
    },
    {
      id: 4,
      text:
        "Je suis tellement reconnaissante pour les services exceptionnels que j'ai reçus ici. Le personnel était amical et compétent. Les résultats ont dépassé toutes mes attentes. Je n'hésiterais pas à revenir ici.",
      auteur: 'Jane Smith',
    },
    {
      id: 5,
      text:
        "C'est l'endroit idéal pour trouver de l'aide. Le professionnalisme et l'engagement de l'équipe sont remarquables. Ils ont transformé ma vie de manière positive. Merci!",
      auteur: 'Robert Johnson',
    },
    {
      id: 6,
      text:
        "Je suis impressionnée par les résultats que j'ai obtenus ici. Les thérapies sont très efficaces, et l'équipe est toujours à l'écoute. Je recommande fortement leurs services à tous ceux qui en ont besoin.",
      auteur: 'Sarah Williams',
    },
    {
      id: 7,
      text:
        "Je n'aurais pas pu demander une meilleure expérience. Le personnel est chaleureux, compétent et toujours prêt à aider. J'ai atteint des progrès significatifs grâce à leurs thérapies. Merci!",
      auteur: 'Michael Brown',
    },
    // Ajoutez d'autres avis ici...
  ]);

  const [avisActuel, setAvisActuel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Défilement automatique des avis toutes les 10 secondes
      setAvisActuel((prevAvisActuel) =>
        prevAvisActuel === avis.length - 1 ? 0 : prevAvisActuel + 1
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [avis]);

  const donnerAvis = () => {
    // Vous pouvez implémenter la logique pour permettre aux utilisateurs de donner un avis ici
    alert('Donner un avis');
  };

  // Divisez les avis en paires
  const avisEnPaires = [];
  for (let i = 0; i < avis.length; i += 2) {
    const paire = avis.slice(i, i + 2);
    avisEnPaires.push(paire);
  }

  return (
    <div className="avis-container">
       <h2 style={{ position: 'absolute', left: '42%',  top: '35px', width: '100%',fontSize: '40px', zIndex: 2}}>Témoignages</h2>
      
      <Carousel
        selectedItem={avisActuel}
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        axis="horizontal"
      >
        {avisEnPaires.map((paire, index) => (
          <div key={index} className="avis-paire">
            {paire.map((avisItem) => (
              <div key={avisItem.id} className="avis-item">
                <p>{avisItem.text}</p>
                <p className="auteur">- {avisItem.auteur}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      <button className="donner-avis-button" onClick={donnerAvis}>
        Donnez votre avis
      </button>
    </div>
  );
};

export default Avis;


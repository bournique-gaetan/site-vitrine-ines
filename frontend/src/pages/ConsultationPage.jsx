import React, { useState } from 'react';
import Bandeau from "../components/bandeau";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";


function Consultationpage() {
  const [clickedCard, setClickedCard] = useState(null);

  const cardsData = [
  
    {
      id: 1,
      title: 'Difficulte',
      description: 'Quels que soient vos difficultés (relationnelles, questionnements, mal-être sans causes apparentes, etc.) le rôle du psychologue est de vous aider à traverser ces moments.',
      
    },
    {
      id: 2,
      title: 'Anxiete',
      description: "L'anxiété est une émotion que l'on retrouve dans la vie quotidienne.  Le rôle du psychologue est de vous aider à gérer ces émotions.",
      
    },
    {
        id: 3,
        title: 'Depression',
        description: "La dépression peu toucher chaque individus et n'est pas à prendre à la légère. Ne la laissez pas s'installer, elle bien bien plus qu''un état de tristesse et ne s''envole pas avec le temps.",
        
    },
    {
        id: 4,
        title: 'Comportement',
        description: "Si votre rapport à l'alimentation n'est pas saine. Le psychologue peut vous aidez à perdre du poids sainement.",
        
      },
      {
        id: 5,
        title: 'Traumatismes',
        description: "N'importe quel évènement qui a menacer votre intégrité physique ou psychique peut devenir un traumatisme. Il est alors nécessaire d''en parler.",
        
      },
      {
        id: 6,
        title: 'Maladies',
        description: "Apprendre que l'on souffre d'une maladie ou être le proche aidant est une situation difficile à gérer. Le monde autour de vous s''écroule.",
        
      },
      {
        id: 7,
        title: 'Addictions',
        description: "Si la consommation de substances est un frein dans votre vie quotidienne et que vous souhaitez en finir, n'hésitez pas à consulter un psychologue.",
        
      },
      {
        id: 8,
        title: 'Sexualite',
        description: "Les problèmes sexuels sont courant mais peu de personne osent en parler. Que ce soit en couple ou en séance individuelle je peux vous aider à traverser cette crise.",
        
      },
      {
        id: 9,
        title: 'Travail',
        description: 'Je peux vous aider à vous orienter ou vous réorienter vers un métier qui vous permettra de vous épanouir. Il est également important de prévenir le burn out. ',
      },
    // ... Ajoutez les données pour les autres cartes de la même manière
  ];

  const handleClick = (cardId) => {
    setClickedCard(cardId === clickedCard ? null : cardId);
  };

  return (
    <div className="cards-container">
      <Bandeau />
      <Navbar />
      <section className="consultation-info">
        <h2>CONSULTATION</h2>
        <img src="src/assets/images/Session de psychologue.jpeg" alt="Description de l'image" />
        <p>
        Les consultations sont individuelles et peuvent se dérouler au cabinet, ou en ligne sur rendez-vous via Perdactive (un agenda en ligne), téléphone ou par mail.
        </p>
        <p>
        J'accueille des patients adultes, des adolescents, des enfants ou des personnes âgées.
        </p>
        <p>
        Le psychologue est apte et formé à écouter toutes vos difficultés ou vos pensées. Bien entendu, il est soumis au secret professionnel et garanti la discrétion des échanges.
        </p>
        <p>
        La première séance est dédiée à l'élaboration de la problématique. Ainsi le psychologue posera diverses questions pour comprendre ce qui vous amène et vos difficultés.
        Le but de cette séance est de définir vos attentes et vos objectifs par rapport au suivi.
        Enfin, cette première séance permet de définir le rythme des consultations, cela, en accord avec le patient.
        </p>
        <p>
        Les consultations durent environ 45 minutes. 
        </p>
        <p>
        Le tarif d'une séance individuelle est de 70 euros.
        </p>
        <p>
        Du Lundi au Jeudi de 10h à 19H au cabinet.
        Le vendredi de 9h à 13h en ligne.
        </p>
        <p>
        N'hésitez pas à me contacter pour plus d'informations.
        </p>
        {/* Ajouter d'autres informations */}
      </section>
      {cardsData.map((card) => (
        <div
          className={`cardC ${clickedCard === card.id ? 'clicked' : ''}`}
          key={card.id}
          onClick={() => handleClick(card.id)}
        >
          <img src={card.imageUrl} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
      <div className='footerContentCustom'>
        <Footer />
      </div>
    </div>
  );
}

export default Consultationpage;


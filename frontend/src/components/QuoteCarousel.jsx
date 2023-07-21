import React, { useState, useEffect } from 'react';
import Buttonrdv from './Buttonrdv';

export default function QuoteCarousel () {
  const [quotes, setQuotes] = useState([
    "“Au fur et à mesure que je modifie mes pensées, le monde autour de moi se transforme.” Louise L. Hay.",
    "“Le plus grand voyage est celui que l'on fait à l'intérieur de soi-même.” Dag Hammarskjöld",
    "“La guérison émotionnelle arrive quand nous permettons à ce qui est d'être.” Tara Brach",

  ]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className='quotecarousel'>
      <Buttonrdv />
      <h1>Psychologue Clinicienne, Psychothérapeute EMDR & TCC</h1>
      <h2>Numéro ADELI : 339331548</h2>
      <h3>Numéro SIRET : 880 804 935 00026</h3>
      <h4>{quotes[currentQuoteIndex]}</h4>
    </div>
  );
};



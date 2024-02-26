import React, { useState } from 'react';
import jardinjaponais from '../assets/images/jardinjaponais.png';
import ButtonMore from './ButtonMore';


const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      title: 'Difficultés',
      buttonText: 'En savoir plus',
      imgSrc: jardinjaponais,
      alt: 'Image 1',
    },
    {
      title: 'Anxiété',
      buttonText: 'En savoir plus',
      imgSrc: jardinjaponais,
      alt: 'Image 2',
    },
    {
      title: 'Dépression',
      buttonText: 'En savoir plus',
      imgSrc: jardinjaponais,
      alt: 'Image 3',
    },
    {
      title: 'T.C.A',
      buttonText: 'En savoir plus',
      imgSrc: 'jardinjaponais',
      alt: 'Image 4',
    },
    {
      title: 'Traumatismes',
      buttonText: 'En savoir plus',
      imgSrc: 'jardinjaponais',
      alt: 'Image 5',
    },
    {
      title: 'Maladies',
      buttonText: 'En savoir plus',
      imgSrc: 'jardinjaponais',
      alt: 'Image 6',
    },
    {
      title: 'Addictions',
      buttonText: 'En savoir plus',
      imgSrc: 'jardinjaponais',
      alt: 'Image 7',
    },
    {
      title: 'Sexualité',
      buttonText: 'En savoir plus',
      imgSrc: 'jardinjaponais',
      alt: 'Image 8',
    },
    {
      title: 'Travail',
      buttonText: 'En savoir plus',
      imgSrc: 'jardinjaponais',
      alt: 'Image 9',
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ position: 'relative', height: '600px', width: '100%', top: '100px', backgroundColor: 'antiquewhite', border: '2px solid #fff', overflowX: 'hidden'}}>
      <h2 style={{ position: 'absolute', left: '11%',  top: '20px', width: '100%',fontSize: '40px', zIndex: 2}}>Spécialiste des thérapies, je peux vous aider dans différents domaines</h2>
      <h3 style={{ position: 'absolute', left: '40%',  top: '80px', zIndex: 2}}></h3>
      <div style={{ position: 'absolute', top: '43%', left: '4px', zIndex: 2 }}>
        <button
          aria-label="previous-slide"
          style={{
            height: '50px',
            padding: '4px',
            borderRadius: '50px',
            color: 'black',
            cursor: 'pointer',
            transition: 'background-color 150ms linear',
            border: 'none',
          }}
          onClick={handlePrevClick}
        >
          <svg
            style={{ width: '50px', height: '50px' }}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      </div>
      <div style={{ position: 'absolute', top: '43%', right: '4px', zIndex: 2 }}>
        <button
          aria-label="next-slide"
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #fff',
            padding: '4px',
            borderRadius: '50px',
            color: 'black',
            cursor: 'pointer',
            transition: 'background-color 150ms linear',
            border: 'none',
          }}
          onClick={handleNextClick}
        >
          <svg
            style={{ width: '40px', height: '40px' }}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <div style={{ overflow: 'hidden', height: '100%', width: '100%' }}>
        <ul
          style={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none', transition: 'transform 300ms ease-out', transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
        >
          {images.map((image, index) => (
            <li
              key={index}
              style={{
                zIndex: 3,
                height: '230px',
                width: '230px',
                margin: '0px 43px',
                flexShrink: 0,
                border: '2px solid #fff',
                borderRadius: '200px',
                backgroundImage: `url(${image.imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>
                <h3>{image.title}</h3>
                <button className="custom-button">{image.buttonText}</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div style={{position: 'absolute', left: '38%', top: '25%', width: '500px' }}>
      <ButtonMore />
      </div>
    </div>
  );
};

export default Carrousel;

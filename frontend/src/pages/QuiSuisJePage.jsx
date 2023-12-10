import React from 'react';
import Bandeau from "../components/bandeau";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

function QuiSuisJePage() {
  return (
    <div className="qui-suis-je-page">
        <Bandeau />
        <Navbar /> 
      <section className='QuiSuisJeInfo'>
      <h2>Qui suis-je ?</h2>
      <img src="src/assets/images/me.jpeg" alt="Votre photo" className="photo-de-moi" />
      <h3>Inès AISSA</h3>
      <p>Titulaire du titre de Psychologue Clinicienne de la Santé depuis 2019 (Master 2), à l'Université de Bordeaux, je suis formée à l'accompagnement des personnes en souffrance psychologique.</p>
      <p>
        Je suis formée à la thérapie EMDR, forme de thérapie que j'utilise principalement dans ma pratique. 
      </p>
      <p>
        Ma pratique est intégrative, autrement dit, elle s'inspire des différents courants et théories propres à la psychologie. J'utilise des outils issus des thérapies cognitives et comportementales, de la thérapie des schémas, des tests psychotechniques, etc.
      </p>
      <p>L’écoute bienveillante et l’empathie sont le ciment de ma pratique.</p>
      <p>Je suis là pour vous accompagner et vous aider à surmonter les épreuves de la vie.</p>
      <p>
        Le bien-être de mes patients est ma priorité, et je vous garantis un suivi psychologique personnalisé, adapté à vos besoins.
      </p>
      <p>
        J'accompagne depuis plusieurs années les personnes qui ont du mal à gérer les épreuves qu'elles traversent.
      </p>
      <p>Je me soucie réellement du bien-être de mes patients et je fais de mon mieux pour les aider à mieux se comprendre et à surmonter leur problématique.</p>
      <p>   
        Mes interventions se basent sur une alliance thérapeutique avec la personne, construite par la reconnaissance de la souffrance, des possibilités de changement, en vue d’un mieux-être.
      </p>
      </section>
      <section className='MonExpreience'>
      <h2>Mon expérience</h2>
        <p>
        Lorsqu'il s'agit de votre santé et de votre bien-être, il est important de savoir que l'on peut faire confiance à un professionnel qualifié. J'exerce en tant que professionnelle de santé en ligne depuis 2020. Mon expertise couvre plusieurs domaines. 
        </p>
        <div>
        <p className="date">2023 : 
        <span className="info">Formation ICV</span>
      </p>
      <p className="date">2022 : 
        <span className="info">Formation EMDR Niveau I et II (EFPE)</span>
      </p>
      <p className="date">Depuis 2019 : 
        <span className="info">Psychologue Clinicienne et Psychothérapeute en libérale</span>
        <span>Formation TCC</span>
      </p>
      <p className="date">2018 - 2019 :  
        <span className="info">Institut Bergonié :
        <span>Oncologie et soins palliatifs </span>
        <span>Consultations d'annonce </span>
        <span>Ateliers de remédiation cognitive </span>
        <span> Bilans cognitifs</span>
        </span>
      </p>
      <p className="date">2017 :  
        <span className="info">Hospitalisation à domicile à la Fondation de l'œuvre de la croix st Simon :</span>
        <span>Consultations à domicile 
              Soutien psychologique des patients hospitalisés et de leur famille
              Oncologie et soins palliatifs 
              Maladies chroniques
        </span>
      </p>
      <p className="date">2016 :  
        <span className="info">Hôpital d'instruction des armées Robert Picqué :</span>
        <span>Prise en charge des psycho traumatismes
              Consultations pré chirurgie bariatrique
              Consultations avec les patients hospitalisés en réanimation </span>
      </p>
      </div>
      </section>
      <div className='footerContentQuiSuisJeCustom'>
        <Footer />
      </div>
    </div>
  );
}

export default QuiSuisJePage;

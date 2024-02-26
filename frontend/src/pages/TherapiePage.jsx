import React, { useEffect, useState } from 'react';
import Bandeau from "../components/Bandeau";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import ScrollTrigger from 'react-scroll-trigger';
import imageCKOI from "../assets/images/thérapieCKOI.jpeg";
import imageEMDR from "../assets/images/EMDRimage.jpeg";
import imageTCC from "../assets/images/TCCimage.jpeg";
import imageICV from "../assets/images/ICVimage.jpeg";

function AnimatedImage({ image, alt, sectionClass }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleEnterViewport = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      // Add any additional logic for when the image becomes visible
      console.log('Image is visible!');
    }
  }, [isVisible]);

  return (
    <ScrollTrigger onEnter={handleEnterViewport}>
      <div className={`animated-image ${isVisible ? 'zoom-in' : ''} ${sectionClass}`}>
        <img src={image} alt={alt} />
      </div>
    </ScrollTrigger>
  );
}

function TherapiePage() {
  return (
    <div className="therapie-page">
        <Bandeau />
        <Navbar />
        <section className='therapieOne'>
          <h2>Comment se déroule une consultation ? </h2>
          <div className="text">
            <p>Au cours d'une consultation psychologique, le patient est accueilli dans un cadre chaleureux et confidentiel. Le psychologue établit une connexion empathique, encourageant le partage ouvert des préoccupations du patient. Les premières séances visent à comprendre le contexte de vie, les antécédents et les défis actuels. À travers des questions réfléchies, le psychologue guide la discussion vers une exploration approfondie des émotions et des pensées du patient. Des techniques variées, telles que la thérapie cognitivo-comportementale ou la psychanalyse, peuvent être utilisées en fonction des besoins spécifiques. Ensemble, le patient et le psychologue travaillent à identifier des solutions, renforcer la résilience émotionnelle et promouvoir le bien-être mental. Le processus, centré sur la collaboration et le soutien, vise à faciliter la croissance personnelle et le développement d'outils pour faire face aux défis de la vie quotidienne.</p>
          </div>
        </section>

        <section className='CKOI'>
          <h2>Qu'est-ce qu'une thérapie ? </h2>
          <div className="text-image">
            <div className="text">
              <p> La thérapie en psychologie représente un processus essentiel de collaboration entre un individu et un professionnel de la santé mentale. Au cœur de cette interaction se trouve l'exploration approfondie des pensées, émotions, comportements, et schémas cognitifs. C'est un espace sécurisé où les individus partagent leurs expériences, confrontent des défis émotionnels, et travaillent avec le thérapeute pour comprendre et surmonter ces obstacles. La diversité des approches thérapeutiques, telles que la CBT, la psychanalyse, et la thérapie familiale, permet d'adapter le traitement aux besoins spécifiques. En favorisant l'autonomie émotionnelle, la thérapie vise à catalyser des changements positifs pour une vie plus équilibrée et épanouissante. </p>
            </div>
            <div className="CKOIimage">
            <AnimatedImage image={imageCKOI} alt="CKOI cette image" sectionClass="CKOI-section" />
            </div>
          </div>
        </section>

        <section className='EMDR'>
          <h2>L'EMDR</h2>
          <div className="image-text">
            <div className="EMDRimage">
            <AnimatedImage image={imageEMDR} alt="Description de l'image" sectionClass="EMDR-section" />
            </div>
            <div className="text">
              <p>La désensibilisation et retraitement des mouvements oculaires (EMDR) est une thérapie innovante axée sur le traitement des traumatismes psychologiques. En se concentrant sur les souvenirs douloureux, l'EMDR utilise des mouvements oculaires ou d'autres stimuli sensoriels pour faciliter la reprogrammation du cerveau, permettant au patient de revisiter ces souvenirs avec moins d'émotion négative. Cette approche non conventionnelle favorise la digestion émotionnelle des événements traumatiques, conduisant souvent à un soulagement durable. L'EMDR est couramment utilisée pour traiter le trouble de stress post-traumatique (TSPT) et d'autres troubles anxieux, offrant une perspective novatrice sur la guérison psychologique.</p>
            </div>
          </div>
        </section>

        <section className='TCC'>
          <h2>Les TCC</h2>
          <div className="text-image">
            <div className="text">
              <p>La Thérapie Cognitive et Comportementale (TCC) offre une approche pragmatique pour traiter les troubles mentaux en identifiant et modifiant les schémas de pensée négatifs et les comportements dysfonctionnels. Axée sur la collaboration entre le thérapeute et le patient, la TCC vise à comprendre et à transformer les pensées automatiques nuisibles qui contribuent à la détresse émotionnelle. En se concentrant sur le présent et en encourageant des changements pratiques, la TCC aide les individus à acquérir des compétences pour résoudre les problèmes, à changer les schémas de pensée délétères, et à atteindre des résultats positifs à long terme.</p>
            </div>
            <div className="TCCimage">
              <img src={imageTCC} alt="Description de l'image" />
            </div>
          </div>
        </section>

        <section className='ICV'>
          <h2>L'ICV</h2>
          <div className="image-text">
            <div className="ICVimage">
              <img src={imageICV} alt="Description de l'image" />
            </div>
            <div className="text">
              <p>L'Intégration du Cycle de la Vie (ICV) est une approche thérapeutique centrée sur l'exploration des expériences passées pour promouvoir la résolution des traumatismes émotionnels. Fondée sur la conviction que les souvenirs non résolus peuvent influencer la santé mentale, l'ICV combine des techniques cognitives, émotionnelles et corporelles pour faciliter la libération des émotions bloquées. Cette méthode engage le client dans un voyage introspectif, permettant la compréhension et la réconciliation avec des événements passés. En intégrant ces expériences dans le présent, l'ICV vise à favoriser le bien-être émotionnel, la croissance personnelle et l'harmonie psychologique.</p>
            </div>
          </div>
        </section>
        <div className='footerContentTherapieCustom'>
          <Footer />
        </div>
      </div>
  );
}

export default TherapiePage;

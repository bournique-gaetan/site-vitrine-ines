import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import logo from '../assets/images/logoines.png';
import ContactModal from './ContactModal';
import NewContact from "./NewContact";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleConsultation = () => {
    setConsultationOpen(!consultationOpen);
  };

  const toggleContactModal = () => {
    setContactModalOpen(!contactModalOpen);
    console.info(contactModalOpen)
  };

  const toggleShowContacts = () => {
    setShowContacts(!showContacts);
    console.info(showContacts)
  };
    

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const menu = document.querySelector('.mobile-menu');
      if (menu && !menu.contains(event.target)) {
        setConsultationOpen(false);
      }
    };

    if (consultationOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [consultationOpen]);

  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1>Inès AISSA</h1>
        <h2>Psychologue Clinicienne, Psychothérapeute EMDR & TCC</h2>

        {/* Liens de la barre de navigation */}
        <a href="#accueil">Accueil</a>
        <a href="#quisuisje">Qui suis-je</a>
        <Dropdown title="Consultation">
          <DropdownItem href="#difficulte">Difficultés</DropdownItem>
          <DropdownItem href="#anxiete">Anxiété</DropdownItem>
          <DropdownItem href="#depression">Dépression</DropdownItem>
          <DropdownItem href="#comportement">Trouble du comportement alimentaire</DropdownItem>
          <DropdownItem href="#traumatismes">Traumatismes</DropdownItem>
          <DropdownItem href="#maladies">Maladies</DropdownItem>
          <DropdownItem href="#addictions">Addictions</DropdownItem>
          <DropdownItem href="#sexualite">Sexualité</DropdownItem>
          <DropdownItem href="#travail">Travail</DropdownItem>
        </Dropdown>
        
        <>
          <a href="#prendreRdv">Thérapies</a>
          <a href="#honoraires">Honoraires</a>
          <a href="#contact" onClick={toggleContactModal}>Contact</a>
          <a href="#liste" onClick={toggleShowContacts}>Liste</a>
        </>
        <a className="icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '\u00D7' : '\u2630'}
        </a>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            {/* Contenu du menu mobile */}
            <a href="#accueil">Accueil</a>
            <a href="#quisuisje">Qui suis-je</a>
            <Dropdown title="Consultation" isOpen={consultationOpen} toggle={toggleConsultation}>
              {consultationOpen && (
                <>
                  <DropdownItem href="#difficulte">Difficulté</DropdownItem>
                  <DropdownItem href="#anxiete">Anxiété</DropdownItem>
                  <DropdownItem href="#depression">Dépression</DropdownItem>
                  <DropdownItem href="#comportement">Trouble du comportement alimentaire</DropdownItem>
                  <DropdownItem href="#traumatismes">Traumatismes</DropdownItem>
                  <DropdownItem href="#maladies">Maladies</DropdownItem>
                  <DropdownItem href="#addictions">Addictions</DropdownItem>
                  <DropdownItem href="#sexualite">Sexualité</DropdownItem>
                  <DropdownItem href="#travail">Travail</DropdownItem>
                </>
              )}
            </Dropdown>
            {!consultationOpen && (
              <>
                <a href="#prendreRdv">Thérapies</a>
                <a href="#honoraires">Honoraires</a>
                <a href="#honoraires" onClick={toggleContactModal}>Contact</a>
              </>
            )}
          </div>
        )}
      </div>
      <ContactModal contactModalOpen={contactModalOpen} onClose={toggleContactModal}/>
      <NewContact showContacts={showContacts} onClose={toggleShowContacts}/>
    </>
  );


}
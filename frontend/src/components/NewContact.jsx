import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewContact = ({ showContacts, onClose }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch the list of contacts when the component is opened (showContacts becomes true)
    if (showContacts) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/users/`)
        .then((response) => setContacts(response.data))
        .catch((error) => console.error('Erreur lors de la récupération des contacts:', error));
    }
  }, [showContacts]); // The effect will run whenever showContacts prop changes

  return (
    <div className={`modal2 ${showContacts === true ? 'is-active' : ''}`}>
      <div className="card custom-card-style"> {/* Utilisez la classe custom-card-style */}
        <div className="card-header">
          <h3 className="card-title">Liste des contacts</h3>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {contacts.map((user) => (
              <li key={user.id} className="list-group-item">
                <strong>Nom:</strong> {user.fullname} <br />
                <strong>E-mail:</strong> {user.email} <br />
                <strong>Numéro de téléphone:</strong> {user.phone} <br />
                <strong>Message:</strong> {user.message} <br />
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContact;

  

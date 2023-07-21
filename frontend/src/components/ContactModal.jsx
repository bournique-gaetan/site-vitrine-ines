import React, { useState } from 'react';
import axios from 'axios';

const ContactModal = ({ contactModalOpen, onClose }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the user data to the backend API
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/register`, {
        fullname,
        email,
        phone,
        message,
      });

      // Reset form fields after successful submission
      setFullname('');
      setEmail('');
      setPhone('');
      setMessage('');

      // Close the modal after successful submission
      onClose();
    } catch (error) {
      console.log('je suis axios');
      // Handle errors here (e.g., display an error message to the user)
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className={`modal ${contactModalOpen === true ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Nom</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">E-mail</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Numéro de téléphone</label>
              <div className="control">
                <input
                  className="input"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field5">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Envoyer
                </button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default ContactModal;

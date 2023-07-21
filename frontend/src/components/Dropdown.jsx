import React from 'react';

// Composant Dropdown
export default function Dropdown ({ title, toggle, children }) {
    return (
      <div className="dropdown">
        <a href="#" className="dropbtn" onClick={toggle}>{title}</a>
        <div className="dropdown-content">
          {children}
        </div>
      </div>
    );
  }

  
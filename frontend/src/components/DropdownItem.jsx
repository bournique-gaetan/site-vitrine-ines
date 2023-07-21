import React from 'react';

// Composant DropdownItem
export default function DropdownItem({ href, children }) {
    return (
      <a href={href}>{children}</a>
    );
  }
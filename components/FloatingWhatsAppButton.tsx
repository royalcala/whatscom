"use client";

import React from 'react';
import styles from './FloatingWhatsAppButton.module.css';

const FloatingWhatsAppButton = () => {
  const phoneNumber = "+1234567890"; // Replace with your WhatsApp number
  const message = "Hello! How can we help you today?";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className={styles.button}
      onClick={handleClick}
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className={styles.image} />
    </div>
  );
};

export default FloatingWhatsAppButton;
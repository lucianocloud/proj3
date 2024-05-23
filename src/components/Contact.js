import React from 'react';
import './Contact.css'; // Vamos adicionar estilos específicos para o Contact

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contato</h1>
      <p>Entre em contato conosco através da página de Contato.</p>
      <img src={`${process.env.PUBLIC_URL}/contact.jpg`} alt="Contato" className="contact-image" />
    </div>
  );
};

export default Contact;

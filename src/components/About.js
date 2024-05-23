import React from 'react';
import './About.css'; // Vamos adicionar estilos específicos para o About

const About = () => {
  return (
    <div className="about-container">
      <h1>Sobre</h1>
      <p>Esta é a página Sobre.</p>
      <img src={`${process.env.PUBLIC_URL}/about.jpg`} alt="Sobre" className="about-image" />
    </div>
  );
};

export default About;

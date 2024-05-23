import React from 'react';
import './Home.css'; // Vamos adicionar estilos específicos para o Home

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <p>Bem-vindo à página inicial!</p>
      <img src={`${process.env.PUBLIC_URL}/home.jpg`} alt="Home" className="home-image" />
    </div>
  );
};

export default Home;

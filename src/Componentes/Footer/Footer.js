import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <p className="developer">Desenvolvido por Patricia Adania de Oliveira</p>
      <button className="back-to-top-button" onClick={handleScrollToTop}>
        Voltar ao topo
      </button>
    </footer>
  );
};

export default Footer;
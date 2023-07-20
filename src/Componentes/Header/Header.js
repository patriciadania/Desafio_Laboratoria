import React from 'react';
import Logo from '../Imagem/Logo.png';
import './Header.css';
import CarFilter from '../Filtro/FiltroCar';

function Header({ onFilterChange, onCarsPerPageChange, carsPerPage }) {
  const LogoClick = () => {
    window.location.reload();
  };

  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Logo" onClick={LogoClick} />
      <CarFilter
        filtro={{
          nome: '',
          marca: 'todos',
        }}
        onFilterChange={onFilterChange}
        onCarsPerPageChange={onCarsPerPageChange}
        carsPerPage={carsPerPage}
      />
    </header>
  );
}

export default Header;

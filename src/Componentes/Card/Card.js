import React from 'react';
import './Card.css';

const CarCard = ({ car, layout }) => {
  return (
    <div className={`car-card ${layout === 'horizontal' ? 'horizontal' : 'vertical'}`}>
      <div className="car-location">{car.veiculo_cidade}</div>
      <img src={car.veiculo_foto[0]} alt={car.veiculo_modelo} />
      <div className="car-info">
        <h2>{car.veiculo_marca}</h2>
        <p>{car.veiculo_modelo}</p>
        <p>Versão: {car.modelo_nome_pai}</p>
        <p> {car.veiculo_cambio}</p>
        <p>Ano: {car.ano_modelo}</p>
        <p>Quilometragem: {car.veiculo_km} km</p>
        <p className="car-price">{Number(car.veiculo_valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        <button className="car-button">Simular Financiamento</button>
        <button className="car-button">Entrar em contato</button>
        </div>
    </div>
  );
};

export default CarCard;

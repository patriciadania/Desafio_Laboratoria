import React, {useState} from 'react';
import './Card.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarCard = ({ car, layout }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const PhotoChange = (selectedIndex) => {
    setSelectedPhotoIndex(selectedIndex);
  };
  return (
    <div className={`car-card ${layout === 'horizontal' ? 'horizontal' : 'vertical'}`}>
      <div className="car-location">{car.veiculo_cidade}</div>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        selectedItem={selectedPhotoIndex}
        onChange={PhotoChange}
      >
        {car.veiculo_foto.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Photo ${index}`} />
          </div>
        ))}
      </Carousel>
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

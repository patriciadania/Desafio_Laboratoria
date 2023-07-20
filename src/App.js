import React, { useState } from 'react';
import CarCard from './Componentes/Card/Card';
import carData from './Data/carData.json';
import './App.css';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';

const App = () => {
  const [filteredCars, setFilteredCars] = useState(carData);
  const [carsPerPage, setCarsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [layout, setLayout] = useState('vertical');

  const LayoutChange = (selectedLayout) => {
    setLayout(selectedLayout);
  };

  const FilterChange = (filter) => {
    let filteredCars = carData.filter((car) =>
      car.veiculo_modelo.toLowerCase().includes(filter.nome.toLowerCase())
    );

    if (filter.marca !== 'todos') {
      filteredCars = filteredCars.filter((car) => car.veiculo_marca === filter.marca);
    }

    setFilteredCars(filteredCars);
    setCurrentPage(1);
  };

  const CarsPerPageChange = (e) => {
    setCarsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const PreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const NextPage = () => {
    const maxPage = Math.ceil(filteredCars.length / carsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedCars = () => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    return filteredCars.slice(startIndex, endIndex);
  };

  return (
    <div className="App">
      <Header
       onLayoutChange={LayoutChange}
        onFilterChange={FilterChange}
        onCarsPerPageChange={CarsPerPageChange}
        carsPerPage={carsPerPage}
      />
       <div className={`car-list ${layout === 'horizontal' ? 'horizontal' : ''}`}>
        {paginatedCars().map((car, index) => (
          <CarCard key={index} car={car} layout={layout} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={PreviousPage} disabled={currentPage === 1}>
          Página Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          onClick={NextPage}
          disabled={currentPage === Math.ceil(filteredCars.length / carsPerPage)}
        >
          Próxima Página
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default App;

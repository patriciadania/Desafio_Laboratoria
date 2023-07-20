import React from 'react';
import { FormControl, Select, MenuItem, styled } from '@mui/material';
import './Filtro.css';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 20,
  backgroundColor: 'rgb(51, 49, 49)',
}));

const StyledSelect = styled(Select)(() => ({
  borderRadius: '10px',
  border: 'solid ',
  backgroundColor: 'rgb(51, 49, 49)',
  color: '#fff',
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  padding: '5px 10px',
}));

const CarFilter = ({ filtro, onFilterChange, onCarsPerPageChange, carsPerPage }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filtro, [name]: value });
  };

  return (
    <div className="car-filter">
      <StyledFormControl>
        <StyledSelect
          name="marca"
          value={filtro.marca}
          onChange={handleChange}
          inputProps={{
            'aria-label': 'Marca',
          }}
        >
          <StyledMenuItem value="todos">Todas as marcas</StyledMenuItem>
          <StyledMenuItem value="Citroen">Citroen</StyledMenuItem>
          <StyledMenuItem value="Peugeot">Peugeot</StyledMenuItem>
          <StyledMenuItem value="Renault">Renault</StyledMenuItem>
          <StyledMenuItem value="Volkswagen">Volkswagen</StyledMenuItem>
          <StyledMenuItem value="Fiat">Fiat</StyledMenuItem>
          <StyledMenuItem value="Mitsubishi">Mitsubishi</StyledMenuItem>
          <StyledMenuItem value="GM - Chevrolet">GM - Chevrolet</StyledMenuItem>
          <StyledMenuItem value="Hyundai">Hyundai</StyledMenuItem>
          <StyledMenuItem value="BMW">BMW</StyledMenuItem>
          <StyledMenuItem value="Ford">Ford</StyledMenuItem>
          <StyledMenuItem value="Honda">Honda</StyledMenuItem>
          <StyledMenuItem value="Land Rover">Land Rover</StyledMenuItem>
        </StyledSelect>
      </StyledFormControl>

      <StyledFormControl>
        <StyledSelect
          name="carsPerPage"
          value={carsPerPage}
          onChange={onCarsPerPageChange}
          inputProps={{
            'aria-label': 'Carros por página',
          }}
        >
          <StyledMenuItem value="5"> Carros por página</StyledMenuItem>
          <StyledMenuItem value="10">10 carros por página</StyledMenuItem>
          <StyledMenuItem value="20">20 carros por página</StyledMenuItem>
        </StyledSelect>
      </StyledFormControl>
    </div>
  );
};
//
export default CarFilter;

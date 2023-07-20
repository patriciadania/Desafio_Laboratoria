// Header.js
import React from 'react';
import Logo from '../Imagem/Logo.png';
import './Header.css';
import CarFilter from '../Filtro/FiltroCar';
import { FormControl, Select, MenuItem, styled } from '@mui/material';

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

function Header({ onFilterChange, onCarsPerPageChange, carsPerPage, onLayoutChange }) {
  const LogoClick = () => {
    window.location.reload();
  };

  const [selectedLayout, setSelectedLayout] = React.useState('vertical');

  const LayoutChange = (event) => {
    setSelectedLayout(event.target.value);
    onLayoutChange(event.target.value);
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
      <div className="layout-select">
        <span>ESCOLHA OUTRO LAYOUT:</span>
        <StyledFormControl>
          <StyledSelect
            value={selectedLayout}
            onChange={LayoutChange}
            inputProps={{
              'aria-label': 'Layout',
            }}
          >
            <StyledMenuItem value="vertical">Vertical</StyledMenuItem>
            <StyledMenuItem value="horizontal">Horizontal</StyledMenuItem>
          </StyledSelect>
        </StyledFormControl>
      </div>
    </header>
  );
}

export default Header;

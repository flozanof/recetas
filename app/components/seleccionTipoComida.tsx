import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface ITipoComidaProps {
  handleRecipeType: (x: string) => void;
}



export default function TipoComida(props: ITipoComidaProps) {
  const [tipoComida, setTipoComida] = React.useState('recetas');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newTipoComida: string,
  ) => {
    if (newTipoComida !== null) {
      console.log('TIPO COMIDA CHANGE: ' + newTipoComida);
      props.handleRecipeType(newTipoComida);
      setTipoComida(newTipoComida);
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={tipoComida}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="comidas">Comida</ToggleButton>
      <ToggleButton value="postres">Postre</ToggleButton>
      <ToggleButton value="cafes">Cafés e infusiones</ToggleButton>
    </ToggleButtonGroup>
  );
}
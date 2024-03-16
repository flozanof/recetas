import * as React from 'react';
import MuiToggleButton from "@mui/material/ToggleButton";
//import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from "@mui/material/styles";

interface ITipoComidaProps {
  recipeType: string;
  handleRecipeType: (x: string) => void;
}

const ToggleButton = styled(MuiToggleButton)({
  backgroundColor: '#000000',
  borderColor: '#1976d2',
  color: '#888888',
  marginLeft: '30px',
  marginBottom: '10px',
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: '#123157',
    borderColor: '#1976d2'
  }
});

export default function TipoComida(props: ITipoComidaProps) {
  const [tipoComida, setTipoComida] = React.useState(props.recipeType);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newTipoComida: string,
  ) => {
    if (newTipoComida !== null) {
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
      sx={{ marginBottom: '10px', padding: '0px 0px' }} 
    >
      <ToggleButton value="entrantes">Entrantes</ToggleButton>
      <ToggleButton value="comidas">Comidas</ToggleButton>
      <ToggleButton value="postres">Postres</ToggleButton>
      <ToggleButton value="otros">Otros</ToggleButton>
    </ToggleButtonGroup>
  );
}
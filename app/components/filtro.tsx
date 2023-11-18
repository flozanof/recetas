import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

interface FilterProps {
  handleNameFilter: (name: string) => void;
  handleIngredientFilter: (ingredient: string) => void;
  handleTimeFilter: (time: number) => void;
}

export default function Filtro(props: FilterProps) {

  //  sx={{ backgroundColor: '#0e101c', boxShadow: '0px 3px 3px -2px #fff, 0px 3px 4px 0px #fff, 0px 1px 8px 0px #fff' }}
  return (
    <div className='flex justify-between'>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={4} md={4} lg={3} xl={3} >
          <input type="text" placeholder="Nombre receta"
            style={{ backgroundColor: '#0e101c', boxShadow: '0px 3px 3px -2px #fff, 0px 3px 4px 0px #fff, 0px 1px 8px 0px #fff' }}
            onChange={(e) => props.handleNameFilter(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3} xl={3} >
          <input type="text" placeholder="Ingredientes"
            style={{ backgroundColor: '#0e101c', boxShadow: '0px 3px 3px -2px #fff, 0px 3px 4px 0px #fff, 0px 1px 8px 0px #fff' }}
            onChange={(e) => props.handleIngredientFilter(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3} xl={3} >
          <input type="number" placeholder="Tiempo"
            style={{ backgroundColor: '#0e101c', boxShadow: '0px 3px 3px -2px #fff, 0px 3px 4px 0px #fff, 0px 1px 8px 0px #fff' }}
            onChange={(e) => props.handleTimeFilter(Number(e.target.value))} />
        </Grid>
      </Grid>
    </div >
  );
}
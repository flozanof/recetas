'use client';
import { useState } from 'react';
import Receta from "./components/receta";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import RecetaForm from './components/recetaForm';
import nuevaReceta from '../public/recetas/NuevaReceta.json'
import Grid from '@mui/material/Grid';

export default function Home() {
    const [newRecipe, setNewRecipe] = useState(false);

    function handleEditMode() {
        setNewRecipe(!newRecipe);
        console.log(newRecipe);
    }

    return (
        <>
            {newRecipe
                ? <RecetaForm mode="U" fileNameRecipe="Receta.json" receta={nuevaReceta} handleEditMode={() => handleEditMode()} />
                :
                <main className="flex flex-col justify-between p-24">
                    <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        sx={{ marginBottom: '10px', maxWidth: '180px' }}
                        onClick={() => { handleEditMode() }}
                    >
                        Añadir Rectea
                    </Button>
                    <div  >
                        <Grid container spacing={2} >
                            <Grid item md={6} lg={4} xl={3}>
                                <Receta filename="ContramuslosPolloSoja.json" />
                            </Grid>
                            <Grid item md={6} lg={4} xl={3}>
                                <Receta filename="ContramuslosPolloSoja.json" />
                            </Grid>
                            <Grid item md={6} lg={4} xl={3}>
                                <Receta filename="ContramuslosPolloSoja.json" />
                            </Grid>
                            <Grid item md={6} lg={4} xl={3}>
                                <Receta filename="ContramuslosPolloSoja.json" />
                            </Grid>
                            <Grid item md={6} lg={4} xl={3}>
                                <Receta filename="ContramuslosPolloSoja.json" />
                            </Grid>
                            <Grid item md={6} lg={4} xl={3}>
                                <Receta filename="ContramuslosPolloSoja.json" />
                            </Grid>
                            <Grid item md={6} lg={4} xl={3}>
                                <Receta filename="ContramuslosPolloSoja.json" />
                            </Grid>
                        </Grid>
                    </div>
                </main>
            }
        </>
    )
}

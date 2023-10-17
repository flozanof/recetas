'use client';
import React from 'react';
import { useState } from 'react';
import Receta from "./components/receta";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import RecetaForm from './components/recetaForm';
import nuevaReceta from '../public/recetas/prototipo/NuevaReceta.json'
import Grid from '@mui/material/Grid';
import { IReceta } from './interfaces/Types';
import RecetaMaximized from './components/recetaMaximized';

//const images = require('../public/recetas', false);
//const imageList = images.keys().map(image => images(image));

function getRecetas(handleMaximizedMode: (x: IReceta) => void) {
    const images = require.context('../public/recetas', false);

    return (
        <div>
            <Grid container spacing={2} >
                {images.keys().filter(nombre => nombre.endsWith('.json')).map((receta, index) => {
                    return (
                        <Grid key={index} item md={4} lg={3} xl={2}>
                            <Receta expanded={false} filename={receta} receta={null} handleMaximizedMode={handleMaximizedMode} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default function Home() {
    const [newRecipe, setNewRecipe] = useState(false);
    const [maximizedRecipe, setMaximizedRecipe] = useState<IReceta|null>(null);

    function handleEditMode() {
        setNewRecipe(!newRecipe);
    }

    function handleMaximizedMode(receta : IReceta | null) {
        setMaximizedRecipe(receta);
    }

    return (
        <>
            {newRecipe
                ? <RecetaForm mode="U" fileNameRecipe="Receta.json" receta={nuevaReceta} handleEditMode={() => handleEditMode()} />
                :
                <main className="flex flex-col justify-between p-2">
                    <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        sx={{ marginBottom: '10px', maxWidth: '180px' }}
                        onClick={() => { handleEditMode() }}
                    >
                        Añadir Receta
                    </Button>
                    <div  >
                        {(maximizedRecipe === null)
                            ? getRecetas(handleMaximizedMode)
                            : <RecetaMaximized receta={maximizedRecipe} handleMaximizedMode={() => handleMaximizedMode(null)} />
                        }
                    </div>
                </main>
            }
        </>
    )
}

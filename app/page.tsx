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
import TipoComida from './components/seleccionTipoComida'

function getRecetas(tipoReceta: string, handleMaximizedMode: (x: IReceta) => void) {
    let recipes;
    switch (tipoReceta) {
        case "cafes": {
            recipes = require.context('../public/recetas/cafes', false);
            break;
        }
        case "postres": {
            recipes = require.context('../public/recetas/postres', false);
            break;
        }
        default: {
            recipes = require.context('../public/recetas/comidas', false);
            break;
        }
    }

    return (
        <div>
            <Grid container spacing={2} >
                {
                    recipes.keys().filter(nombre => nombre.endsWith('.json')).map((recipe, index) => {
                        return (
                            <Grid key={index} item md={4} lg={3} xl={2}>
                                <Receta expanded={false} filename={recipe} recipe={null} tipoReceta={tipoReceta} handleMaximizedMode={handleMaximizedMode} />
                            </Grid>
                        );
                    })}
            </Grid>
        </div>
    );
}

export default function Home() {
    const [recipeType, setRecipeType] = useState("comidas");
    const [newRecipe, setNewRecipe] = useState(false);
    const [maximizedRecipe, setMaximizedRecipe] = useState<IReceta | null>(null);

    function handleEditMode() {
        setNewRecipe(!newRecipe);
    }

    function handleMaximizedMode(receta: IReceta | null) {
        setMaximizedRecipe(receta);
    }

    function handleRecipeType(tipoReceta: string) {
        setRecipeType(tipoReceta);
    }

    return (
        <>
            {newRecipe
                ? <RecetaForm mode="U" fileNameRecipe="Receta.json" receta={nuevaReceta} handleEditMode={() => handleEditMode()} />
                :
                <main className="flex flex-col justify-between p-2">
                    <div>
                        <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            sx={{ marginBottom: '10px', maxWidth: '180px' }}
                            onClick={() => { handleEditMode() }}
                        >
                            Añadir Receta
                        </Button>
                        <TipoComida handleRecipeType={handleRecipeType} />
                    </div>
                    <div  >
                        {(maximizedRecipe === null)
                            ? getRecetas(recipeType, handleMaximizedMode)
                            : <RecetaMaximized tipoReceta={recipeType} receta={maximizedRecipe} handleMaximizedMode={() => handleMaximizedMode(null)} />
                        }
                    </div>
                </main>
            }
        </>
    )
}

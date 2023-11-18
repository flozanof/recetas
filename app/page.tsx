'use client';
import React from 'react';
import { useState } from 'react';
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';
import { useParams, useSearchParams } from 'next/navigation';
import Receta from "./components/receta";
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import Button from '@mui/material/Button';
import RecetaForm from './components/recetaForm';
import nuevaReceta from '../public/recetas/prototipo/NuevaReceta.json'
import Grid from '@mui/material/Grid';
import { IReceta } from './interfaces/Types';
import RecetaMaximized from './components/recetaMaximized';
import TipoComida from './components/seleccionTipoComida'
import Filtro from './components/filtro'


function UnaReceta() {
    const searchParams = useSearchParams()
    const tipoReceta = searchParams.get('tipoReceta');
    const receta = searchParams.get('receta');
    return (
        <Receta expanded={true} filename={receta + '.json'} recipe={null} tipoReceta={(tipoReceta != null) ? tipoReceta : "comidas"}
            handleMaximizedMode={() => { }}
            viewOnly={false}
            ingredientFilter=""
            timeFilter={9999}
        />
    )
}


export default function Main() {
    const searchParams = useSearchParams();
    const tipoReceta = searchParams.get('tipoReceta');
    const receta = searchParams.get('receta');
    return (
        (tipoReceta != null) ? <UnaReceta /> : <Home />
        
    );
}

function getRecetas(tipoReceta: string, nameFilter: string, ingredientFilter: string, timeFilter: number, handleMaximizedMode: (x: IReceta) => void) {
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

    //    recipes.keys().filter(nombre => nombre.endsWith('.json')).map((recipe, index) => {
    //        return (
    //            <Grid key={index} item md={4} lg={3} xl={2}>
    //                <Receta expanded={false} filename={recipe} recipe={null} tipoReceta={tipoReceta} handleMaximizedMode={handleMaximizedMode} viewOnly={false} />
    //            </Grid>
    //        );
    //    })

    return (
        <div>
            <Grid container spacing={2} >
                {
                    recipes.keys().filter(nombre => nombre.endsWith('.json')).filter(nombre => nombre.toUpperCase().includes(nameFilter)).map((recipe, index) => {
                        return (
                            <Grid key={index} item md={4} lg={3} xl={2}>
                                <Receta expanded={false} filename={recipe} recipe={null} tipoReceta={tipoReceta} handleMaximizedMode={handleMaximizedMode}
                                    viewOnly={false}
                                    ingredientFilter={ingredientFilter}
                                    timeFilter={timeFilter}
                                />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}

function Home() {
    const [recipeType, setRecipeType] = useState("comidas");
    const [newRecipe, setNewRecipe] = useState(false);
    const [maximizedRecipe, setMaximizedRecipe] = useState<IReceta | null>(null);
    const [showFilter, setShowFilter] = useState(false);
    const [nameFilter, setNameFilter] = useState("");
    const [ingredientFilter, setIngredientFilter] = useState("");
    const [timeFilter, setTimeFilter] = useState(9999);

    function handleNameFilter(nameFilter: string) {
        setNameFilter(nameFilter.toUpperCase());
    }

    function handleIngredientFilter(ingredientFilter: string) {
        setIngredientFilter(ingredientFilter.toUpperCase());
    }

    function handleTimeFilter(timeFilter: number) {
        setTimeFilter((timeFilter == 0) ? 9999 : timeFilter);
    }

    function handleEditMode() {
        setNewRecipe(!newRecipe);
    }

    function handleMaximizedMode(receta: IReceta | null) {
        setMaximizedRecipe(receta);
    }

    function handleRecipeType(tipoReceta: string) {
        setRecipeType(tipoReceta);
    }

    function handleShowFilter() {
        setShowFilter(!showFilter);
    }

    return (
        <>
            {newRecipe
                ? <RecetaForm mode="U" fileNameRecipe="Receta.json" receta={nuevaReceta} handleEditMode={() => handleEditMode()} />
                :
                <main className="flex flex-col justify-between p-2">
                    <div className='flex justify-between'>
                        <Grid container spacing={2} sx={{ marginLeft: '0px' }}>
                            <Grid item md={6} lg={5} xl={8}>
                                <TipoComida recipeType={recipeType} handleRecipeType={handleRecipeType} />
                            </Grid>
                            <Grid item md={3} lg={4} xl={2}>
                                <Button
                                    sx={{ marginTop: '5px', marginBottom: '25px', maxWidth: '180px' }}
                                    variant="outlined"
                                    startIcon={<TuneIcon />}
                                    onClick={() => { handleShowFilter() }}
                                >
                                    Filtros
                                </Button>
                            </Grid>
                            <Grid item md={3} lg={3} xl={2}>
                                <Button
                                    variant="outlined"
                                    startIcon={<AddIcon />}
                                    sx={{ marginTop: '5px', marginBottom: '25px', maxWidth: '180px' }}
                                    onClick={() => { handleEditMode() }}
                                >
                                    Añadir Receta
                                </Button>
                            </Grid>
                            <Grid item md={12} xl={12}>
                                {showFilter && <Filtro handleNameFilter={handleNameFilter} handleIngredientFilter={handleIngredientFilter}
                                    handleTimeFilter={handleTimeFilter} />}
                            </Grid>
                        </Grid>
                    </div>
                    <div  >
                        {(maximizedRecipe === null)
                            ? getRecetas(recipeType, nameFilter, ingredientFilter, timeFilter, handleMaximizedMode)
                            : <RecetaMaximized tipoReceta={recipeType} receta={maximizedRecipe} handleMaximizedMode={() => handleMaximizedMode(null)} />
                        }
                    </div>
                </main>
            }
        </>
    )
}

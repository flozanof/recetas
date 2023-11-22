'use client';
import React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
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

interface IPropsHome {
    admin: boolean;
}

function UnaReceta() {
    const searchParams = useSearchParams()
    const tipoReceta = searchParams.get('tipoReceta');
    const receta = searchParams.get('receta');
    return (
        <Receta expanded={true} filename={receta + '.json'} recipe={null} tipoReceta={(tipoReceta != null) ? tipoReceta : "comidas"}
            handleMaximizedMode={() => { }}
            viewOnly={true}
            oneRecipe={true}
            ingredientFilter=""
            timeFilter={9999}
        />
    )
}


export default function Main() {
    const searchParams = useSearchParams();
    const tipoReceta = searchParams.get('tipoReceta');
    const usr = searchParams.get('usr');
    const auth = searchParams.get('auth');
    let access = 'DENY';
    if (usr === 'rct4dm1n') {
        access = 'ADMIN';
    } else if (auth != null) {
        // auth es la fecha en formato yyyy-mm-dd en Base64
        const date: Date = new Date(atob(auth));
        const now: Date = new Date();
        now.setHours(0, 0, 0, 0);
        // La resta retorna milisegundos.
        if (((now.valueOf() - date.valueOf()) / (1000 * 60 * 60 * 24)) < 4) {
            access = 'GUESS';
        }
    }
    return (
        (access === 'DENY')
            ? <div>NO TIENE PERMISOS PARA VER LAS RECETAS.</div>
            : (tipoReceta != null) ? <UnaReceta /> : <Home admin={(access === 'ADMIN')} />

    );
}

function getRecetas(tipoReceta: string, nameFilter: string, ingredientFilter: string, timeFilter: number, admin: boolean, handleMaximizedMode: (x: IReceta) => void) {
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
                    recipes.keys().filter(nombre => nombre.endsWith('.json')).filter(nombre => nombre.toUpperCase().includes(nameFilter)).map((recipe, index) => {
                        return (
                            <Receta key={index} expanded={false} filename={recipe} recipe={null} tipoReceta={tipoReceta} handleMaximizedMode={handleMaximizedMode}
                                viewOnly={!admin}
                                oneRecipe={false}
                                ingredientFilter={ingredientFilter}
                                timeFilter={timeFilter}
                            />
                        );
                    })
                }
            </Grid>
        </div>
    );
}

function Home(props: IPropsHome) {
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
                                {props.admin &&
                                    <Button
                                        variant="outlined"
                                        startIcon={<AddIcon />}
                                        sx={{ marginTop: '5px', marginBottom: '25px', maxWidth: '180px' }}
                                        onClick={() => { handleEditMode() }}
                                    >
                                        Añadir Receta
                                    </Button>
                                }
                            </Grid>
                            <Grid item md={12} xl={12}>
                                {showFilter && <Filtro handleNameFilter={handleNameFilter} handleIngredientFilter={handleIngredientFilter}
                                    handleTimeFilter={handleTimeFilter} />}
                            </Grid>
                        </Grid>
                    </div>
                    <div  >
                        {(maximizedRecipe === null)
                            ? getRecetas(recipeType, nameFilter, ingredientFilter, timeFilter, props.admin, handleMaximizedMode)
                            : <RecetaMaximized tipoReceta={recipeType} receta={maximizedRecipe} viewOnly={!props.admin} handleMaximizedMode={() => handleMaximizedMode(null)} />
                        }
                    </div>
                </main>
            }
        </>
    )
}

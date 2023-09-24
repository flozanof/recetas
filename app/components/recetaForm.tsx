import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IReceta } from '../interfaces/Types';
import RecetaLoading from './recetaLoading';


interface IRecipeProps {
    onSubmit: (data: IReceta) => void;
    receta: IReceta;
}

export default function RecetaForm({ onSubmit, receta }: IRecipeProps) {
//    const [recipe, setRecipe] = React.useState<IReceta>({ Nombre: '', Foto: '', Comensales: 0, Dificultad: 0, TiempoCoccion: 0, TiempoElaboracion: 0, TecnicaElaboracion: '', IngredientesGrupo: [], Elaboracion: [], Notas: ['una', 'dos'] });
    const [recipe, setRecipe] = React.useState<IReceta>(receta);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit(recipe);
    }

    if (recipe.Nombre) {
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={recipe.Nombre} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" name="age" value={recipe.TiempoCoccion} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    } else {
        return <RecetaLoading />
    }
}

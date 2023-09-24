import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IReceta } from '../interfaces/Types';
import RecetaLoading from './recetaLoading';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IIngredientesGrupo, IElaboracion } from '../interfaces/Types';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import { useDownloadFile } from "react-downloadfile-hook";

interface IRecipeProps {
    handleEditMode: () => void;
    receta: IReceta;
    mode: string;
}

const MyPaper = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    lineHeight: '60px',
    padding: '5px'
}));

function getListaIngredientes(grpIng: IIngredientesGrupo[]) {
    if (grpIng.length > 0) {
        return (
            <>
                {
                    grpIng.map((grp, grpIndex) => {
                        return (
                            <div key={grpIndex}>
                                {((grpIng.length > 1)) &&
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="ingGrupo"
                                        label="Nombre Grupo"
                                        fullWidth
                                        variant="outlined"
                                        defaultValue={grp.Grupo}
                                    />
                                }
                                <ul>
                                    {grp.Ingredientes.map((ingrediente, index) => {
                                        return (
                                            <div key={index}>
                                                <li key={4 * index}>
                                                    <TextField
                                                        autoFocus
                                                        margin="dense"
                                                        id="ingNombre"
                                                        label="Nombre"
                                                        variant="outlined"
                                                        defaultValue={ingrediente.Nombre}
                                                        sx={{
                                                            '& > :not(style)': { m: 0.5, width: '19ch' },
                                                        }}
                                                    />
                                                    <TextField
                                                        autoFocus
                                                        margin="dense"
                                                        id="ingCantidad"
                                                        label="Cantidad"
                                                        variant="outlined"
                                                        defaultValue={ingrediente.Cantidad}
                                                        sx={{
                                                            '& > :not(style)': { m: 0.5, width: '9ch' },
                                                        }}
                                                    />
                                                    <Select
                                                        labelId="demo-simple-select-standard-label"
                                                        autoFocus
                                                        value={ingrediente.Unidad}
                                                        label="Unidad"
                                                        inputProps={{
                                                            name: 'imgUnidad',
                                                            id: 'ingUnidad',
                                                        }}
                                                        sx={{
                                                            '& > :not(style)': { m: 1.5, width: '14ch' },
                                                        }}
                                                    >
                                                        <MenuItem value={"Unidad" as any}>Unidad</MenuItem>
                                                        <MenuItem value="Cucharada">Cucharada</MenuItem>
                                                        <MenuItem value="Cucharadita">Cucharadita</MenuItem>
                                                        <MenuItem value="Litro">Litro</MenuItem>
                                                        <MenuItem value="Mililitro">Mililitro</MenuItem>
                                                        <MenuItem value="Kilogramo">Kilogramo</MenuItem>
                                                        <MenuItem value="Gramo">Gramo</MenuItem>
                                                        <MenuItem value="Taza">Taza</MenuItem>
                                                    </Select>
                                                </li>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    }
                    )
                }
            </>
        )
    }
}

function getListaElaboracion(elaboraciones: IElaboracion[]) {
    return (
        <ul>
            {elaboraciones.map((elaboracion, index) => {
                return (
                    <div key={index}>
                        <li key="{2 * index}">
                            <TextField
                                autoFocus
                                margin="dense"
                                id="paso"
                                label="Paso"
                                type="number"
                                fullWidth
                                variant="outlined"
                                defaultValue={elaboracion.Paso}
                            />
                        </li>
                        <li key="{2 * index}">
                            <TextField
                                autoFocus
                                margin="dense"
                                id="descripcion"
                                label="Descripcion"
                                multiline
                                fullWidth
                                variant="outlined"
                                defaultValue={elaboracion.Descripcion}
                            />
                        </li>
                    </div>
                )
            })}
        </ul>
    )
}

export default function RecetaForm(props: IRecipeProps) {
    //    const [recipe, setRecipe] = React.useState<IReceta>({ Nombre: '', Foto: '', Comensales: 0, Dificultad: 0, TiempoCoccion: 0, TiempoElaboracion: 0, TecnicaElaboracion: '', IngredientesGrupo: [], Elaboracion: [], Notas: ['una', 'dos'] });
    const [recipe, setRecipe] = React.useState<IReceta>(props.receta);
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
        props.handleEditMode();
    };

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    const { downloadFile } = useDownloadFile({
        fileName: "prueba.xml",
        format: "json",
        data: `<svg><circle cx="50" cy="50" r="40"fill="red" /></svg>`,
    });

    if (recipe.Nombre) {
        return (
            <Dialog
                fullWidth={true}
                maxWidth={"xl"}
                open={open}>
                <DialogTitle>{(props.mode === "U") ? "Modificación Receta" : "Nueva Receta"}</DialogTitle>
                <DialogContent>
                    <DialogContentText marginBottom={3}>
                        Inserte los datos de la receta, guárdala y descárgala.
                        Posteriormente suba manualmente el fichero json al servidor junto con la imagen.
                    </DialogContentText>
                    <Box sx={{ width: '100%' }}>
                        <Grid container spacing={2}>

                            <Grid md={12} xl={3}>
                                <MyPaper elevation={3}>
                                    <Typography paragraph variant="h6" align='center'>
                                        DATOS GENÉRICOS
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="nombre"
                                        label="Nombre"
                                        fullWidth
                                        multiline
                                        variant="outlined"
                                        defaultValue={props.receta.Nombre}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="foto"
                                        label="Foto"
                                        fullWidth
                                        variant="outlined"
                                        defaultValue={props.receta.Foto}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="comensales"
                                        label="Comensales"
                                        type="number"
                                        variant="outlined"
                                        defaultValue={props.receta.Comensales}
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '11ch' },
                                        }}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="dificultad"
                                        label="Dificultad"
                                        type="number"
                                        variant="outlined"
                                        defaultValue={props.receta.Dificultad}
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '9ch' },
                                        }}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="tiempoElaboracion"
                                        label="Tiempo Elaboración"
                                        type="number"
                                        variant="outlined"
                                        defaultValue={props.receta.TiempoElaboracion}
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '17ch' },
                                        }}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="tiempoCoccion"
                                        label="Tiempo Cocción"
                                        type="number"
                                        variant="outlined"
                                        defaultValue={props.receta.TiempoCoccion}
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '14ch' },
                                        }}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="tecnicaElaboracion"
                                        label="Técnica Elaboración"
                                        variant="outlined"
                                        defaultValue={props.receta.TecnicaElaboracion}
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '17ch' },
                                        }}
                                    />
                                </MyPaper>
                            </Grid>
                            <Grid md={6} xl={5}>
                                <MyPaper elevation={3}>
                                    <Typography paragraph variant="h6" align='center'>
                                        INGREDIENTES
                                    </Typography>
                                    {getListaIngredientes(props.receta.IngredientesGrupo)}
                                </MyPaper>
                            </Grid>
                            <Grid md={6} xl={4}>
                                <MyPaper elevation={3}>
                                    <Typography paragraph variant="h6" align='center'>
                                        ELABORACIÓN
                                    </Typography>

                                    {getListaElaboracion(props.receta.Elaboracion)}
                                </MyPaper>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={downloadFile}>Download</Button>
                </DialogActions>
            </Dialog>
        )
    } else {
        return <RecetaLoading />
    }
}

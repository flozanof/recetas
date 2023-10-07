import React, { ChangeEvent, useMemo } from 'react';
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';
import RecetaLoading from './recetaLoading';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IReceta, IIngredienteGrupo, IIngrediente, IElaboracion } from '../interfaces/Types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styled from '@mui/material/styles/styled';
import { useDownloadFile } from "react-downloadfile-hook";
import { useForm, UseFormHandleSubmit, FieldValues, SubmitHandler } from "react-hook-form";
import RecetaFormGrupoIngr from "./recetaFormGrupoIngr";
import RecetaFormElaboracion from "./recetaFormElaboracion";
import RecetaFormNotas from "./recetaFormNotas";
import "../css/styleForm.css";
import { data } from 'autoprefixer';

interface IRecipeProps {
    handleEditMode: () => void;
    fileNameRecipe: string;
    receta: IReceta;
    mode: string;
}

const MyPaper = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    lineHeight: '60px',
    padding: '5px'
}));



function getFormJsonData(recipe: IReceta) {
    console.log("*************** GET FORM JSON DATA ************");
    return JSON.stringify(recipe);
}

export default function RecetaForm(props: IRecipeProps) {
    const [recipe, setRecipe] = React.useState<IReceta>(props.receta);
    const [open, setOpen] = React.useState(true);
    const [fileNameRecipe, setfileNameRecipe] = React.useState(props.fileNameRecipe);

    const {
        control,
        register,
        handleSubmit,
        getValues,
        formState: { errors },
        reset,
        setValue
    } = useForm<IReceta>({
        defaultValues: useMemo(() => {
            return props.receta;
        },
            [props])
    });

    const { downloadFile } = useDownloadFile({
        fileName: "receta.json",
        format: "applicationn/json",
        data: getFormJsonData(recipe),
    });

    const handleClose = () => {
        setOpen(false);
        props.handleEditMode();
    };

    const onSubmit: SubmitHandler<IReceta> = (data: IReceta) => {
        data.Elaboracion.sort((a, b) => a.Paso - b.Paso);
    };

    function saveFile() {
        downloadFile();
    }

    if (recipe.Nombre) {
        return (
            console.log("------------------  PINTANDO ------------------------------------------"),
            <Dialog
                fullWidth={true}
                maxWidth={"xl"}
                open={open}>
                <DialogTitle className='h1'>{(props.mode === "U") ? "Modificación Receta" : "Nueva Receta"}
                    <p style={{ fontSize: '14px', color: 'white' }}>Inserte los datos de la receta, guárdala y descárgala.
                        Posteriormente suba manualmente el fichero json al servidor junto con la imagen.</p>
                </DialogTitle>
                <DialogContent className='form'>
                    <DialogContentText className='p' marginBottom={3}>
                    </DialogContentText>
                    <Box sx={{ width: '100%' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{ flexGrow: 1, p: "5px 15px 15px 15px" }} >
                                <Grid container spacing={2} >
                                    <Grid item md={6} xl={3}>
                                        <MyPaper className='form' elevation={3}>
                                            <label>DATOS GENÉRICOS</label>
                                            <input type="text" placeholder="Nombre receta"
                                                {...register("Nombre", { required: true, maxLength: 50 })}
                                                aria-invalid={errors.Nombre ? "true" : "false"} />
                                            {errors.Nombre && <p role="alert">Nombre obligatorio. Máx 50 caracteres</p>}
                                            <input type="text" placeholder="Foto"
                                                {...register("Foto", { required: "Foto obligatoria", maxLength: 100 })}
                                                aria-invalid={errors.Nombre ? "true" : "false"} />
                                            {errors.Foto && <p role="alert">Error: {errors.Foto.message}</p>}
                                            <input type="number" placeholder="Comensales"
                                                {...register("Comensales", { required: "Comensales obligatorios", maxLength: 2 })}
                                                aria-invalid={errors.Comensales ? "true" : "false"} />
                                            {errors.Comensales && <p role="alert">Error: {errors.Comensales.message}</p>}
                                            <input type="number" placeholder="Dificultad (Máx: 5)"
                                                {...register("Dificultad", { required: "Dificultad  obligatoria", maxLength: 1, max: 5 })}
                                                aria-invalid={errors.Nombre ? "true" : "false"} />
                                            {errors.Dificultad && <p role="alert">Error: {errors.Dificultad.message}</p>}
                                            <input type="number" placeholder="Tiempo Cocción (minutos)"
                                                {...register("TiempoCoccion", { required: "Tiempo Cocción obligatorio", maxLength: 4 })}
                                                aria-invalid={errors.Nombre ? "true" : "false"} />
                                            {errors.TiempoCoccion && <p role="alert">Error: {errors.TiempoCoccion.message}</p>}
                                            <input type="number" placeholder="Tiempo Elaboración (minutos)"
                                                {...register("TiempoElaboracion", { required: "Tiempo elaboración obligatorio", maxLength: 4 })}
                                                aria-invalid={errors.Nombre ? "true" : "false"} />
                                            {errors.TiempoElaboracion && <p role="alert">Error: {errors.TiempoElaboracion.message}</p>}
                                            <input type="text" placeholder="Técnica Elaboración"
                                                {...register("TecnicaElaboracion", { required: "Técnica elaboración obligatoria" })}
                                                aria-invalid={errors.Nombre ? "true" : "false"} />
                                            {errors.TecnicaElaboracion && <p role="alert">Error: {errors.TecnicaElaboracion.message}</p>}
                                            {/*<input type="submit" value="DOWNLOAD JSON" />*/}
                                        </MyPaper>
                                    </Grid>
                                    <Grid item md={6} xl={5}>
                                        <MyPaper className='form' elevation={3}>
                                            <label>INGREDIENTES</label>
                                            <RecetaFormGrupoIngr {...{ control, register, getValues, setValue }} />
                                        </MyPaper>
                                    </Grid>
                                    <Grid item md={12} xl={4}>
                                        <MyPaper className="form" elevation={3}>
                                            <label>ELABORACIÓN</label>
                                            <RecetaFormElaboracion {...{ control, register, getValues, setValue }} />
                                            <label>NOTAS</label>
                                            <RecetaFormNotas {...{ control, register, getValues, setValue }} />
                                        </MyPaper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </form>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Exit</Button>
                    <Button onClick={saveFile}>Download File</Button>
                    {/*<a {...linkProps}>Download SVG File</a>;*/}
                    {/*<Button onClick={() => download(fileUrl, filename)}>Download</Button>*/}
                </DialogActions>
            </Dialog>
        )
    } else {
        return <RecetaLoading />
    }
}

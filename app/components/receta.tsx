'use client';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { IReceta } from '../interfaces/Types';
import RecetaForm from './recetaForm';
import Ingrediente from './ingrediente';
import Elaboracion from './elaboracion';
import Nota from './nota';
import RecetaLoading from './recetaLoading';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

interface RecipeProps {
    filename: string;
    recipe: IReceta | null;
    expanded: boolean;
    tipoReceta: string;
    handleMaximizedMode: (x: IReceta) => void;
}

const styles = {

    smallIcon: {
        width: 20,
        height: 20,
    },

    styleImage: {
        height: 170,
    },

    cardContent: {
        height: 0,
        padding: 0,
    },

    cardAction: {
        padding: 1,
    }

};
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Receta(props: RecipeProps) {
    const [receta, setReceta] = useState<IReceta>({ Nombre: '', Foto: '', Comensales: 0, Dificultad: 0, TiempoCoccion: 0, TiempoElaboracion: 0, TecnicaElaboracion: '', IngredientesGrupo: [], Elaboracion: [], Notas: [] });
    const [expanded, setExpanded] = useState(props.expanded);
    const [editMode, setEditMode] = useState(false);
    const [recipeLoaded, setRecipeLoaded] = useState(false);

    // Recuperamos información del cocinero de la API si no viene en las propiedades.
    useEffect(() => {
        if (props.recipe === null) {
            fetch('recetas/' + props.tipoReceta + '/' + props.filename
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    setReceta(myJson);
                    setRecipeLoaded(true);
                });
        } else {
            setReceta(props.recipe);
            setRecipeLoaded(true);
        }
    }, [props.filename, props.recipe, props.tipoReceta]);

    function handleEditMode() {
        setEditMode(!editMode);
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if (recipeLoaded) {
        return (
            <div >
                {editMode
                    ? <RecetaForm mode="U" fileNameRecipe="ContramuslosPolloSoja.json" receta={receta} handleEditMode={() => handleEditMode()} />
                    :
                    //                <Card sx={{ maxWidth: 345 }}>
                    <Card >
                        <CardHeader
                            //                        avatar={
                            //                            <Avatar sx={{ width: 0, height: 15, bgcolor: red[500], visibility: 'hidden' }} />
                            //                        }
                            action={
                                <IconButton style={styles.smallIcon} aria-label="settings" onClick={handleEditMode} hidden={props.recipe != null}>
                                    <EditIcon style={styles.smallIcon} />
                                </IconButton>
                            }
                            title={
                                <span style={{ fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.43, letterSpacing: "0.010em", display: "block" }}>
                                    {receta.Nombre}
                                </span>
                            }
                        //subheader="SUBHEADER: Time: 40 min. Dificultad: Media"
                        />
                        <CardMedia
                            component="img"
                            style={styles.styleImage}
                            image={"imagenes/" + props.tipoReceta + "/" + receta.Foto}
                            alt="Foto receta"
                        />
                        <CardContent style={styles.cardContent}>
                        </CardContent>
                        <CardActions disableSpacing style={styles.cardAction}>
                            <IconButton aria-label="expand contents" onClick={() => props.handleMaximizedMode(receta)} >
                                {
                                    (props.recipe === null)
                                        ? <FullscreenIcon />
                                        : <FullscreenExitIcon />
                                }
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <ul>
                                    <li className="flex flex-row items-center justify-between" >
                                        <div>
                                            <Typography variant="body2" color="text.secondary">Comensales: {receta.Comensales}</Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body2" color="text.secondary">Dificultad: {receta.Dificultad}</Typography>
                                        </div>
                                    </li>
                                    <li><Typography variant="body2" color="text.secondary">Tiempo elaboración: {receta.TiempoElaboracion} minutos</Typography></li>
                                    <li><Typography variant="body2" color="text.secondary">Tiempo cocción: {receta.TiempoCoccion} minutos</Typography></li>
                                    <li><Typography variant="body2" color="text.secondary">Técnica elaboración: {receta.TecnicaElaboracion}</Typography></li>
                                </ul>
                                <Ingrediente grpIng={receta.IngredientesGrupo} />
                                <Elaboracion elaboracion={receta.Elaboracion} />
                                <Nota nota={receta.Notas} />
                            </CardContent>
                        </Collapse>
                    </Card>
                }
            </div>
        );
    } else {
        return <RecetaLoading />
    }
}

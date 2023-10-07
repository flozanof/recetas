'use client';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { IReceta } from '../interfaces/Types';
import RecetaForm from './recetaForm';
import Ingrediente from './ingrediente';
import Elaboracion from './elaboracion';
import Nota from './nota';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

interface RecipeProps {
    filename: string;
}


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
    const [receta, setReceta] = useState<IReceta>({ Nombre: '', Foto: '', Comensales: 0, Dificultad: 0, TiempoCoccion: 0, TiempoElaboracion: 0, TecnicaElaboracion: '', IngredientesGrupo: [], Elaboracion: [], Notas: [], Ingredientes: [] });
    const [expanded, setExpanded] = useState(false);
    const [editMode, setEditMode] = useState(false);

    // Recuperamos información del cocinero de la API.
    useEffect(() => {
        fetch('recetas/' + props.filename
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
                console.log(myJson);
                setReceta(myJson);
            });
    }, [props.filename]);

    function handleEditMode() {
        setEditMode(!editMode);
        console.log('EditMode: ' + editMode ? ' TRUE ' : ' FALSE ');
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
        receta.Notas.forEach((nota) => { console.log(nota) })
    };

    return (
        <div >
            {editMode
                ? <RecetaForm mode="U" fileNameRecipe="ContramuslosPolloSoja.json" receta={receta} handleEditMode={() => handleEditMode()} />
                :
                <Card sx={{ maxWidth: 345 }}>
                    {/* Esto iba dentro de CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" !visible>
                            R
                        </Avatar>
                    }*/}
                    <CardHeader
                        avatar={
                            <Avatar sx={{ width: 0, bgcolor: red[500], visibility: 'hidden' }} />
                        }
                        action={
                            <IconButton aria-label="settings" onClick={handleEditMode}>
                                <EditIcon />
                            </IconButton>
                        }
                        title={receta.Nombre}
                    //subheader="SUBHEADER: Time: 40 min. Dificultad: Media"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={receta.Foto}
                        alt="Paella dish"
                    />
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
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="share" >
                            <ShareIcon />
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
                            <Ingrediente grpIng={receta.IngredientesGrupo} />
                            <Elaboracion elaboracion={receta.Elaboracion} />
                            <Nota nota={receta.Notas} />
                        </CardContent>
                    </Collapse>
                </Card>
            }
        </div>
    );
}

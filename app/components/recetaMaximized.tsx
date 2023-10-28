import React, { ChangeEvent, useMemo } from 'react';
import RecetaLoading from './recetaLoading';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { IReceta, IIngredienteGrupo, IIngrediente, IElaboracion } from '../interfaces/Types';
import Paper from '@mui/material/Paper';
import styled from '@mui/material/styles/styled';
import "../css/styleForm.css";
import Receta from './receta';

interface IRecipeProps {
    tipoReceta: string;
    receta: IReceta | null;
    handleMaximizedMode: () => void;
}

const MyPaper = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    lineHeight: '60px',
    padding: '5px'
}));

export default function RecetaMaximized(props: IRecipeProps) {
    const [open, setOpen] = React.useState(true);

    if ( (props.receta != null) && (props.receta.Nombre) ) {
        return (
            <Dialog
                fullWidth={true}
                maxWidth={"xl"}
                open={open}
                PaperProps={{ sx: { boxShadow: '0px 3px 3px -2px #bdbdbd, 0px 3px 4px 0px #bdbdbd, 0px 1px 8px 0px #bdbdbd' } }}
            >
                <DialogContent className='form' sx={{ backgroundColor: '#0e101c', boxShadow: '0px 3px 3px -2px #fff, 0px 3px 4px 0px #fff, 0px 1px 8px 0px #fff' }} >
                <Receta tipoReceta={props.tipoReceta} expanded={true} filename='' recipe={props.receta} handleMaximizedMode={props.handleMaximizedMode}/>
                </DialogContent>
            </Dialog>
        );
    } else {
        return <RecetaLoading />
    }
}

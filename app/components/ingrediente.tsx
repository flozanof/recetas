'use client';
import Typography from '@mui/material/Typography';
import { IIngredienteGrupo } from '../interfaces/Types';

export default function Ingrediente(props: {
    grpIng: IIngredienteGrupo[] | null;
}) {

    if ((props.grpIng != null) && (props.grpIng.length > 0)) {
        return (
            <>
                <Typography key="-1" paragraph variant='h5' sx={{ marginBottom: '0px' }} >Ingredientes</Typography>
                <hr style={{ marginBottom: '15px' }} />
                {
                    props.grpIng.map((grp, grpIndex) => {
                        return (
                            <div key={grpIndex}>
                                {((props.grpIng != null) && (props.grpIng.length > 1)) &&
                                    <Typography paragraph variant="h6">{grp.Grupo}</Typography>
                                }
                                <ul>
                                    {grp.Ingredientes?.filter( x => (x !== null)  ).map((ingrediente, index) => {
                                        return (
                                            <div key={index}>
                                                <li key={index}>
                                                    <Typography paragraph variant="body2">
                                                        {ingrediente.Nombre} {(ingrediente.Cantidad != null) ? '(' : ''} 
                                                        {ingrediente.Cantidad} {ingrediente.Unidad}
                                                        {(ingrediente.Cantidad != null) ? ')' : ''} 
                                                    </Typography>
                                                </li>
                                                {/*
                                                        <li key={index}> Sustituto: {ingrediente.Sustituto}</li>
                                                        */}
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


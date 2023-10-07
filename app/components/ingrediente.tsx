'use client';
import Typography from '@mui/material/Typography';
import { IIngredienteGrupo } from '../interfaces/Types';

export default function Ingrediente(props: {
    grpIng: IIngredienteGrupo[];
}) {

    if (props.grpIng.length > 0) {
        return (
            <>
                <Typography key="-1" paragraph variant='h5' sx={{ marginBottom: '0px' }} >Ingredientes</Typography>
                <hr style={{ marginBottom: '15px' }} />
                {
                    props.grpIng.map((grp, grpIndex) => {
                        return (
                            <div key={grpIndex}>
                                {((props.grpIng.length > 1)) && <Typography paragraph variant="h6">{grp.Grupo}</Typography>}
                                <ul>
                                    {grp.Ingredientes.map((ingrediente, index) => {
                                        return (
                                            <div key={index}>
                                                <li key={index}>
                                                    <Typography paragraph variant="body2">
                                                        {ingrediente.Nombre} ({ingrediente.Cantidad} {ingrediente.Unidad})
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


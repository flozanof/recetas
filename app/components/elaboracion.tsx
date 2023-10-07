'use client';
import Typography from '@mui/material/Typography';
import { IElaboracion } from '../interfaces/Types';

export default function Ingrediente({ elaboracion }: { elaboracion: IElaboracion[] }) {

    return (
        <>
            <Typography key="-2" paragraph variant='h5' sx={{ marginBottom: '0px' }}>Elaboración</Typography>
            <hr style={{ marginBottom: '15px' }} />
            <ul>
                {elaboracion.map((paso, index) => {
                    return (
                        <div key={index}>
                            <li key="1 +{index}">
                                <Typography paragraph variant="body2">Paso: {paso.Paso}</Typography>
                            </li>
                            <li key="2 + {index}">
                                <Typography paragraph variant="body2">{paso.Descripcion}</Typography>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}


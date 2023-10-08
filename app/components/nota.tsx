'use client';
import Typography from '@mui/material/Typography';

export default function Ingrediente({ nota }: { nota: string[] | null}) {
    if ((nota != null) && (nota.length > 0)) {
        return (
            <>
                <Typography key="-3" paragraph variant='h5' sx={{ marginBottom: '0px' }}>Notas</Typography>
                <hr style={{ marginBottom: '15px' }} />
                <ul>
                    {nota.map((nota, index) => {
                        return (
                            <div key={index}>
                                <li key="1 +{index}">
                                    <Typography paragraph variant="body2">{nota}</Typography>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </>
        )
    }
}


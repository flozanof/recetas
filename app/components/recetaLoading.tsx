import React from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

export default function RecetaLoading() {

    return (
        <div>
            <Grid container alignItems="center" justifyContent="center">
                <CircularProgress disableShrink />
            </Grid>
        </div>
    )
} 

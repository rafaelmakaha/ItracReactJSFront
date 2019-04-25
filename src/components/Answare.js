import React from 'react';
import { Typography, Paper, Grid, Button } from '@material-ui/core';


export const Answare = (props) => {
    return(
        <Paper >
            <Grid container spacing={8}>
                <Grid item >
                    <Typography>
                        {props.idLimeSurvey}
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography>
                        {props.orgao}
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography>
                        {props.servico}
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography>
                        {props.status}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" >Avaliar</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
import React from 'react';
import { Typography, 
    Paper, 
    Grid, 
    Button 
} from '@material-ui/core';
import {Link} from 'react-router-dom';


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
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => props.onClickModerate(props.url)}
                        component={Link} to='/edit'
                    >
                        Avaliar
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
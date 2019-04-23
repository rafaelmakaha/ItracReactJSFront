import React from 'react';
import { Typography, Paper } from '@material-ui/core';


export const Answare = (props) => {
    return(
        <Paper >
            <Typography>
                {props.idLimeSurvey}
            </Typography>
            <Typography>
                {props.orgao}
            </Typography>
            <Typography>
                {props.servico}
            </Typography>
            <Typography>
                {props.status}
            </Typography>
        </Paper>
    );
}
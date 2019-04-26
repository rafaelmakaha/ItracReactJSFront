import React from 'react';
import { Typography, 
    Paper, 
    Grid, 
    Button 
} from '@material-ui/core';


export const Answare = (props) => {
    return(
        <Paper >
            <Grid container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
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
                        {props.status==='N' ? 'Pendente': 'Processado'}
                    </Typography>
                </Grid>
                {props.status === 'N' ? (
                    <Grid item>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="small"
                            onClick={() => props.onClickModerate(props.url)}
                            // component={Link} to='/edit'
                        >
                            Avaliar
                        </Button>
                    </Grid>
                ):null}
            </Grid>
        </Paper>
    );
}
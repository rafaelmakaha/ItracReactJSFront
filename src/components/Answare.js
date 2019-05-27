import React from 'react';
import { Typography, 
    Paper, 
    Grid, 
    Button 
} from '@material-ui/core';

const styles = theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
});

export const Answare = (props) => {
    return(
        <Paper className={styles.root}>
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
                {props.status === 'N' ? (
                    <Grid item>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="small"
                            onClick={() => props.onClickModerate(props.url)}
                            // component={Link} to='/edit'
                        >
                            Moderar
                        </Button>
                    </Grid>
                ):null}
            </Grid>
        </Paper>
    );
}
import React, { Component } from 'react';
import { TextField, 
    Typography,
    Paper, 
    Button,
    Grid,
} from '@material-ui/core';
// import { Redirect } from 'react-router-dom';


export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            answare:""
        }
    }

    componentDidMount(){
        fetch(
            this.props.url,
        ).then((response) => {
            if(response.ok){
                return response.json();
            }
        }).then(data => {
            this.setState({ answare: data })
        });
    }

    render(){
        const {answare} = this.state;
        
        return(
            <Paper >
                <Typography variant="h4" align="center" >Avaliar Informações</Typography>
                <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                >
                    <Grid item xs={8}>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="outlined-name"
                            label="LimeID"
                            // className={classes.textField}
                            value={String(answare.lime_id)}
                            // onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id="outlined-name"
                            label="Órgão"
                            // className={classes.textField}
                            value={String(answare.orgao_nome)}
                            // onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id="outlined-name"
                            label="Serviço"
                            // className={classes.textField}
                            value={String(answare.orgao_nome)}
                            // onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="outlined-name"
                            label="Status"
                            // className={classes.textField}
                            value={String(answare.status)==='N'? 'Pendente' : 'Processado'}
                            // onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                >
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.props.cancelButton}
                        >Cancelar</Button>
                    </Grid>
                    <Grid item>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            // onClick={() => props.onClickModerate(props.url)}
                            // component={Link} to='/edit'
                        >
                            Confirmar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}
import React, { Component } from 'react';
import { Typography, 
    Paper, 
    Grid, 
    Button,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';


export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            answare:""
        }
    }

    async componentDidMount(){
        const zeca = await fetch(
            this.props.url,
        )
        
        // ).then((response) => {
        //     if(response.ok){
        //         return response.json();
        //     }
        // }).then(data => {
        //     this.setState({ answare: data })
        // });
    }

    render(){
        const {answare} = this.state;
        return(
            <Paper >
                <Typography>
                    {answare.lime_id}
                </Typography>
                <Typography>
                    {answare.orgao_nome}
                </Typography>
                <Typography>
                    {answare.servico_nome}
                </Typography>
                <Typography>
                    {answare.status}
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    // onClick={() => props.onClickModerate(props.url)}
                    // component={Link} to='/edit'
                >
                    Avaliar
                </Button>
            </Paper>
        )
    }
}
import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { Answare } from '../components/Answare';

export default class Pendings extends Component {
    constructor(props){
        super(props);
        this.state = {
            pendings: [],
        }
    }

    componentDidMount(){
        fetch('http://0.0.0.0:8000/answares/'
        ).then((response) => {
            if(response.ok){
                return response.json();
            }
        }).then(data => {
            this.setState({ pendings: data })
        });
    }

    render(){
        const pendings = this.state.pendings;
        return(
            <Paper >
                {pendings.map((pending,key) => {
                    return(
                        <Answare 
                        key={key}
                        idLimeSurvey={pending.lime_id}
                        orgao={pending.orgao_nome}
                        servico={pending.servico_nome}
                        status='Pendente'
                        />
                    )
                })}
            </Paper>
        );
        
    }
}
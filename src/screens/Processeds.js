import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { Answare } from '../components/Answare';

export default class Processeds extends Component {
    constructor(props){
        super(props);
        this.state = {
            processeds: [],
        }
    }

    componentDidMount(){
        fetch('http://0.0.0.0:8000/api/answares/processeds'
        ).then((response) => {
            if(response.ok){
                return response.json();
            }
        }).then(data => {
            console.log(data);
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
                        url={pending.url}
                        status='Pendente'
                        onClickModerate={props.onClickModerate}
                        />
                    )
                })}
            </Paper>
        );
        
    }
}
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
        fetch('http://0.0.0.0:8000/api/processeds/'
        ).then((response) => {
            if(response.ok){
                return response.json();
            }
        }).then(data => {
            this.setState({ processeds: data })
        });
    }

    render(){
        const processeds = this.state.processeds;
        return(
            <Paper >
                {processeds.map((processed,key) => {
                    return(
                        <Answare 
                        key={key}
                        idLimeSurvey={processed.lime_id}
                        orgao={processed.orgao_nome}
                        servico={processed.servico_nome}
                        url={processed.url}
                        status={processed.status}
                        // onClickModerate={props.onClickModerate}
                        />
                    )
                })}
            </Paper>
        );
        
    }
}
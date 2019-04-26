import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { Answare } from '../components/Answare';
import Edit from './Edit';
import EditModal from '../components/EditModal';

export default class Pendings extends Component {
    constructor(props){
        super(props);
        this.state = {
            pendings: [],
            url: "",
            open: false,
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(url) {
        this.setState({ open: true });
        this.setState({ url:url });
    };

    closeModal() {
        this.setState({ open: false });
    };


    componentDidMount(){
        fetch('http://0.0.0.0:8000/api/pendings/'
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
            <div>
                <Paper >
                    {pendings.map((pending,key) => {
                        return(
                            <Answare 
                            key={key}
                            idLimeSurvey={pending.lime_id}
                            orgao={pending.orgao_nome}
                            servico={pending.servico_nome}
                            url={pending.url}
                            status={pending.status}
                            onClickModerate={this.openModal}
                            />
                        )
                    })}
                </Paper>
                <EditModal
                open={this.state.open}
                onClose={this.closeModal}
                >
                    <Edit url={this.state.url} cancelButton={this.closeModal}/>
                </EditModal>
        </div>  
        );
        
    }
}
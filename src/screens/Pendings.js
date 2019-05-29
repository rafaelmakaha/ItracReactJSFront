import React, { Component } from 'react';
import { Paper,
    Typography,
    Grid,
} from '@material-ui/core';
import { Answare } from '../components/Answare';
import Edit from './Edit';
import EditModal from '../components/EditModal';
import CustomizedTable from '../components/CustomizedTable';

export default class Pendings extends Component {
    constructor(props){
        super(props);
        this.state = {
            pendings: [],
            url: "",
            open: false,
            isLoading: true,
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
            this.setState({ pendings: data });
            this.setState({isLoading: false});
        });
    }

    render(){
        const pendings = this.state.pendings;
        if(this.state.isLoading){
            return <Typography>Carregando...</Typography>
        }
        return(
            <div>
                {/* <Paper >
                    <Grid container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="h5">Órgão</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">Serviço</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">Moderar</Typography>
                        </Grid>
                    </Grid>
                    {pendings.map((pending,key) => {
                        return(
                            <Answare 
                            key={key}
                            orgao={pending.orgao_nome}
                            servico={pending.servico_nome}
                            url={pending.url}
                            status={pending.status}
                            onClickModerate={this.openModal}
                            />
                        )
                    })}
                </Paper> */}
                <CustomizedTable 
                data={pendings}
                onClickModerate={this.openModal}
                />
                <EditModal
                open={this.state.open}
                onClose={this.closeModal}
                >
                    <Edit 
                    url={this.state.url} 
                    cancelButton={this.closeModal}
                    />
                </EditModal>
        </div>  
        );
        
    }
}
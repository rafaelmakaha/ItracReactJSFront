import React, { Component } from 'react';
import { 
    Typography,
    Paper, 
    Button,
    Grid,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
} from '@material-ui/core';
import Select from 'react-select';
import {Link} from 'react-router-dom';


export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            answare:"",
            servicos:[],
            orgao:"",
            sugestoes: [],
            actualValueServico: "",
            otherValueServico: "",
            otherValueServicoId: "",
            value_servico: "",
            value_servico_id: "",
            isLoading: true,
            isDisabledSelect: true,
            isDisabledInputField: true
        };
        this.handleChangeServico = this.handleChangeServico.bind(this);
        this.handleOthersServico = this.handleOthersServico.bind(this);
        this.handleCheckedOthers = this.handleCheckedOthers.bind(this);
        this.handleCheckedActual = this.handleCheckedActual.bind(this);
        this.handleCheckButton = this.handleCheckButton.bind(this);
        this.onClickModerate = this.onClickModerate.bind(this);
    }

    handleCheckButton(){
        this.setState({ isDisabledSelect: true });
        this.setState({ isDisabledInputField: true });
    }
    handleCheckedActual = event => {
        this.setState({ isDisabledSelect: true });
        this.setState({ isDisabledInputField: !event.target.checked });
        this.setState({ value_servico_id: '0000' });
    }
    handleCheckedOthers = event => {
        this.setState({ isDisabledSelect: !event.target.checked });
        this.setState({ isDisabledInputField: true });
        this.setState({ value_servico_id: this.state.otherValueServicoId });
    }
    handleChangeServico = event => {
        this.setState({ value_servico: event.currentTarget.value });
    };
    handleOthersServico = event => {
        this.setState({ otherValueServico: event.value.nome });
        this.setState({ value_servico_id: event.value.id });
        this.setState({ otherValueServicoId: event.value.id });
    };

    onClickModerate(){
        fetch(
            this.props.url,
            {
                method: 'PUT',
                body: JSON.stringify({
                    answare_id: this.state.answare.answare_id,
                    servico_nome: this.state.value_servico,
                    servico_id: this.state.value_servico_id,
                    survey_id: this.state.answare.survey_id,
                }),
                headers: {
                    'Content-Type': 'application/json'
                  },          
            }
        )
    }

    componentDidMount(){
        const request = async () => {
            let response = await fetch(
                this.props.url,
            );
            if(response.ok){
                response = await response.json();
            }
            await this.setState({ answare: response });
            await this.setState({ actualValueServico: response.servico_nome})
            let response3 = await fetch(
                'http://0.0.0.0:8000/api/sugestoes/',
                {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nome:response.servico_nome
                    }) 
                }
                );
            if(response3.ok){
                response3 = await response3.json();
            }
            await this.setState({ sugestoes: response3.sugestoes });
            let response2 = await fetch(
                'http://0.0.0.0:8000/api/orgao/'+response.orgao_id+'/',
                );
            if(response2.ok){
                response2 = await response2.json();
            }
            await this.setState({ orgao: response2 });
            await this.setState({ isLoading: false });
        }
        request();
    }
    
    render(){
        const { answare, orgao, isLoading, sugestoes } = this.state;
        if(isLoading){
            return <Typography> Carregando... </Typography>
        }
        var sug = this.state.sugestoes;
        var mapa = "";
        if(sugestoes.length){
            mapa = sug.map((sugestao,i) => {
                return(
                    <FormControlLabel 
                    key={i}
                    value={sugestao.nome} 
                    control={<Radio />} 
                    label={sugestao.nome} 
                    onChange={(e) => {this.handleCheckButton(e);this.setState({value_servico_id:sugestao.id})}}
                    />
                )
            })
        }
        return(
            <Paper >
                <Typography variant="h4" align="center" >Órgão / Serviço</Typography>
                <Typography variant="subtitle1" align="center" >{answare.orgao_nome} / {answare.servico_nome}</Typography>
                <FormControl component="fieldset">
                    <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    value={this.state.value_servico}
                    onChange={this.handleChangeServico}
                    >
                        <FormControlLabel 
                        value={this.state.actualValueServico}
                        checked
                        control={<Radio />} 
                        label={"Informado no diagnóstico de servicos"} 
                        onChange={this.handleCheckedActual}
                        />
                        <TextField
                        disabled={this.state.isDisabledInputField}
                        value={this.state.actualValueServico}
                        onChange={(event) =>{ 
                            this.setState({ actualValueServico: event.target.value });
                        }}
                        />

                        {mapa}

                        <FormControlLabel
                        value={this.state.otherValueServico}
                        control={<Radio/>}
                        label={"Outro"}
                        onChange={this.handleCheckedOthers}
                        />
                    </RadioGroup>
                    <Select
                    placeholder={this.state.otherValueServico}
                    isDisabled={this.state.isDisabledSelect}
                    onChange={(e)=>{this.handleOthersServico(e)}}
                    options={orgao.servico.map((item,i) => ({label:item.nome, value:item}))}
                    isSearchable
                    />
                </FormControl>
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
                            onClick={this.onClickModerate}
                            component={Link} to='/'
                        >
                            Confirmar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}
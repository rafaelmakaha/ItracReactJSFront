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
// import OtherRadio from '../components/OtherRadio';
import Select from 'react-select';



export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            answare:"",
            servicos:[],
            orgao:"",
            actualValueServico: "",
            otherValueServico: "",
            value_servico: "",
            isLoading: true,
            isDisabledSelect: true,
            isDisabledInputField: true
        };
        this.handleChangeServico = this.handleChangeServico.bind(this);
        this.handleOthersServico = this.handleOthersServico.bind(this);
        this.handleCheckedOthers = this.handleCheckedOthers.bind(this);
        this.handleCheckedActual = this.handleCheckedActual.bind(this);
    }
    handleCheckedActual = event => {
        this.setState({ isDisabledInputField: !event.target.checked });
    }
    handleCheckedOthers = event => {
        this.setState({ isDisabledSelect: !event.target.checked });
    }
    handleChangeServico = event => {
        this.setState({ value_servico: event.currentTarget.value });
    };
    handleOthersServico = event => {
        this.setState({ otherValueServico: event.value });
    };

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
            let response2 = await fetch(
                'http://0.0.0.0:8000/api/orgao/'+response.orgao_id,
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
        const { answare,orgao, isLoading } = this.state;
        if(isLoading){
            return <Typography> Carregando... </Typography>
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

                        <FormControlLabel 
                        value="male1" 
                        control={<Radio />} 
                        label="Sugestão1" />
                        <FormControlLabel 
                        value="male2" 
                        control={<Radio />} 
                        label="Sugestão2" />
                        
                        <FormControlLabel
                        value={this.state.otherValueServico}
                        control={<Radio/>}
                        label={"Outro"}
                        onChange={this.handleCheckedOthers}
                        />
                        <Select
                        placeholder={this.state.otherValueServico}
                        // isDisabled={this.state.isDisabledSelect}
                        onChange={this.handleOthersServico}
                        options={orgao.servico.map((item,i) => ({label:item.nome, value:item.nome}))}
                        isSearchable
                        />
                       
                        {console.log('serviço selecionado: ' + this.state.value_servico)}
                        {/* {console.log('othersServico: ' + this.state.otherValueServico)}  */}
                    </RadioGroup>
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
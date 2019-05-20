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
            otherValueServico: "",
            value_servico: null,
            isLoading: true,
        };
        this.handleChangeServico = this.handleChangeServico.bind(this);
        this.handleOthersServico = this.handleOthersServico.bind(this);
    }

    handleChangeServico = event => {
        this.setState({ value_servico: event.target.value });
    };
    handleOthersServico = event => {
        this.setState({ otherValueServico: event.value });
        this.setState({ value_servico: event.value });
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
                        value={answare.servico_nome}
                        control={<Radio />} 
                        label={answare.servico_nome} />

                        <FormControlLabel 
                        value="male1" 
                        control={<Radio />} 
                        label="Sugestão1" />
                        <FormControlLabel 
                        value="male2" 
                        control={<Radio />} 
                        label="Sugestão2" />
                        <FormControlLabel 
                        value="male3" 
                        control={<Radio />} 
                        label="Sugestão3" />
                        <FormControlLabel 
                        value="male4" 
                        control={<Radio />} 
                        label="Sugestão4" />
                        <FormControlLabel 
                        value="male5" 
                        control={<Radio />} 
                        label="Sugestão5" />
                        <FormControlLabel
                            // value={this.state.otherValueServico}
                            checked={this.props.checked}
                            control={<Radio/>}
                            label={<Select
                                value={this.state.otherValueServico}
                                onChange={this.handleOthersServico}
                                options={orgao.servico.map((item,i) => ({label:item.nome, value:item.nome}))}
                                isSearchable
                            />}
                        />
                        {console.log(this.state.value_servico)}
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
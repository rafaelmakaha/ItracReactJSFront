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
import OtherRadio from '../components/OtherRadio';


export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            answare:"",
            otherValueServico: "",
            otherValueOrgao: "",
            value_orgao: null,
            value_servico: null,
        };
        this.handleChangeServico = this.handleChangeServico.bind(this);
        this.handleOthersServico = this.handleOthersServico.bind(this);
        this.handleChangeOrgao = this.handleChangeOrgao.bind(this);
        this.handleOthersOrgao = this.handleOthersOrgao.bind(this);
    }

    handleChangeServico = event => {
        this.setState({ value_servico: event.target.value });
    };
    handleOthersServico = event => {
        this.setState({ otherValueServico: event.target.value });
        this.setState({ value_servico: event.target.value });
    };
    handleChangeOrgao = event => {
        this.setState({ value_orgao: event.target.value });
    };
    handleOthersOrgao = event => {
        this.setState({ otherValueOrgao: event.target.value });
        this.setState({ value_orgao: event.target.value });
    };

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
        console.log(this.state.value_servico);
        return(
            <Paper >
                <Typography variant="h4" align="center" >Órgão / Serviço</Typography>
                <Typography variant="subtitle1" align="center" >{answare.orgao_nome} / {answare.servico_nome}</Typography>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="Orgao"
                        name="Orgao"
                        // className={classes.group}
                        value={this.state.value_orgao}
                        onChange={this.handleChangeOrgao}
                    >
                        <FormControlLabel 
                        value={answare.orgao_nome}
                        control={<Radio />} 
                        label={answare.orgao_nome} />

                        <OtherRadio
                        onTextChange={this.handleOthersOrgao}
                        value={this.state.otherValueOrgao}
                        placeholder="Others"
                        />
                    
                    </RadioGroup>
                    <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    // className={classes.group}
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
                        <OtherRadio
                            onTextChange={this.handleOthersServico}
                            value={this.state.otherValueServico}
                            placeholder="Others"
                        />
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
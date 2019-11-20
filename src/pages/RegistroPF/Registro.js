import React, { useState, useEffect } from 'react';
import ButtonOrange from '../../components/ButtonOrange';
import InputGray from '../../components/InputGray';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import api from '../../services/api';
import './Registro.css';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from '../../components/CustomSnackBar';
import { isAuthenticated } from '../../services/Auth';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#F49400',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#F49400',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#F49400',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(244, 148, 0) 0%, rgb(244, 148, 0) 50%, rgb(244, 148, 0) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,13,33) 0%, rgb(233,64,87) 50%, rgb(18,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: 10,
    marginLeft: 10,
    width: '40%',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default function Registro(props){
  const steps = [
    'Dados Pessoais',
    'Endereço'
  ];
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2012-05-18T01:01:01'));
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [bairro, setBairro] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [pais, setPais] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [confSenha, setConfsenha] = React.useState('');
  const [message, setMessage] = React.useState({
    open: false,
    variant: 'success',
    messageContent: '',
  });
  const { history } = props;
  useEffect(() => {
    if(isAuthenticated()){
      history.push("/vagas");
    }
  }, []);

  const { open, variant, messageContent } = message;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleDateChange = (date) =>{
    setSelectedDate(date);
  };

  const handleOpenMessageSuccess = (messageT, tipo) =>{
    setMessage({...message, open: true, messageContent: messageT, variant: tipo});
  }

  const handleCloseMessage = () =>{
    setMessage({...message, open: false});
  }

  const verificaSenha = () => {
    let result = false;
    if(senha.length == confSenha.length){
      if(senha === confSenha){
        result = true;
      }
    }
    return result;
  }

  const cadastrar = async () =>{
    if( verificaSenha() ){
      let endereco = {
        rua,
        numero,
        bairro,
        cidade,
        estado,
        pais,
        cep
      };
      let enderecoJson = JSON.stringify(endereco);
      let date = selectedDate.toJSON().substr(0, 10);
      let data = {
        cpf,
        name: nome,
        dateOfBirth: date,
        matricalStatus: 'teste',
        address: enderecoJson,
        cep,
        email,
        phone: telefone,
        password: senha
      }
      if (data.cpf !== '' && data.name !== '' && data.dateOfBirth !== '' && data.address !== '' && data.cep !== '' && data.email !== '' && data.phone !== '' && data.password !== ''){
        
        try{
          let resp = await api.post('homePF/signupPF', data);
          if(resp.status === 201){
            handleOpenMessageSuccess('Cadastro realizado com sucesso', 'success');
          }
        }catch(error){
          handleOpenMessageSuccess('CPF invalido', 'error');
        }
      }else{
        handleOpenMessageSuccess('Preencha todos os dados', 'error');
      }
    }else{
      handleOpenMessageSuccess('As senhas não coincidem', 'error');
    }
  }

    return (
    <div className="all">
    <div className="containerR">
      
      <div className="contentR">
      
      <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        { ( activeStep === 1 ) ? (
          <div>
            <InputGray id="custom-css-standard-input" 
              label="Rua"
              onChange={e => setRua(e.target.value)}
              value={rua} />
            <InputGray id="custom-css-standard-input" type="number"
              label="Numero"
              onChange={e => setNumero(e.target.value)}
              value={numero} />
            <InputGray id="custom-css-standard-input" 
              label="Bairro"
              onChange={e => setBairro(e.target.value)}
              value={bairro} />
            <InputGray id="custom-css-standard-input" 
              label="Cidade"
              onChange={e => setCidade(e.target.value)}
              value={cidade} />
            <InputGray id="custom-css-standard-input" 
              label="Estado"
              onChange={e => setEstado(e.target.value)}
              value={estado} />
            <InputGray id="custom-css-standard-input" 
              label="País"
              onChange={e => setPais(e.target.value)}
              value={pais} />
            <InputGray id="custom-css-standard-input" type="number"
              label="CEP"
              onChange={e => setCep(e.target.value)}
              value={cep} />
            <div className="buttons">
              <ButtonOrange disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Voltar
              </ButtonOrange>
              <ButtonOrange onClick={handleReset} className={classes.button} onClick={cadastrar}>
                Enviar
              </ButtonOrange>
            </div>
          </div>
          ) : (
          <div>
            
            <div>
              <InputGray id="custom-css-standard-input" 
                label="Nome"
                onChange={e => setNome(e.target.value)}
                value={nome} />
              <InputGray id="custom-css-standard-input" type="number"
                label="CPF"
                onChange={e => setCpf(e.target.value)}
                value={cpf} />
              <InputGray id="custom-css-standard-input" type="number"
                label="Telefone"
                onChange={e => setTelefone(e.target.value)}
                value={telefone} />
              <InputGray id="custom-css-standard-input" 
                label="Email"
                onChange={e => setEmail(e.target.value)}
                value={email} />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Data de Nascimento"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              <InputGray  id="custom-css-standard-input" type="password"
                label="Senha"
                onChange={e => setSenha(e.target.value)}
                value={senha} />
              <InputGray  id="custom-css-standard-input" type="password"
                label="Confirmar Senha"
                onChange={e => setConfsenha(e.target.value)}
                value={confSenha} />
              
              <div className={classes.buttons}>
                <ButtonOrange
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Proximo
                </ButtonOrange>
              </div>
            </div>
          </div>
          )}
      </div>
    </div>
    </div>
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={open}
    autoHideDuration={1500}
    onClose={handleCloseMessage}
  >
    <MySnackbarContentWrapper
      onClose={handleCloseMessage}
      variant={variant}
      message={messageContent}
    />
  </Snackbar>
  </div>
  </div>
  );
}
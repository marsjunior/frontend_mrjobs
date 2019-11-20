import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import ButtonTransparent from '../../components/ButtonTransparent';
import ButtonOrange from '../../components/ButtonOrange';
import InputGray from '../../components/InputGray';
import api from '../../services/api';
import { login, isAuthenticated } from '../../services/Auth';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from '../../components/CustomSnackBar';



function Login({ history }) {
  const [ cpf, setCpf ] = useState('');
  const [ password, setPassword ] = useState('');
  const [message, setMessage] = useState({
    open: false,
    variant: 'success',
    messageContent: '',
  });

  const { open, variant, messageContent } = message;

  const handleOpenMessageSuccess = (messageT, tipo) =>{
    setMessage({...message, open: true, messageContent: messageT, variant: tipo});
  }

  const handleCloseMessage = () =>{
    setMessage({...message, open: false});
  }

  useEffect(() => {
    if(isAuthenticated()){
      history.push("/vagas");
    }
  }, []);

  async function logar(e){
    e.preventDefault();
    
    
    try {
      const resp =  await api.post('auth/loginPF/cpf', {
        cpf,
        password
      });
      let token = resp.data.token;
      login(token);

      history.push("/vagas");
    }catch(erro){
      handleOpenMessageSuccess('Usuario ou senha incorretos', 'error');
    }
  }


  return (
    <div className="all">
      <div className="container">
        
        <img className="logo" src={logo} alt="mr jobs"/>
        <div className="content">
        
        <form onSubmit={logar}>
          <InputGray id="custom-css-standard-input" 
            onChange={ e => setCpf(e.target.value)} 
            label="CPF" />

          <InputGray  id="custom-css-standard-input" type="password"
            onChange={ e => setPassword(e.target.value)}
            label="Senha" />
          <ButtonOrange variant="contained" color="inherit" type="submit" className="button">Login</ButtonOrange>
          </form>
          <a href="/recuperarsenha">Esqueci minha senha</a>
          <ButtonTransparent variant="outlined" onClick={ () => history.push("/registro")} color="inherit" className="button">Registre-se</ButtonTransparent>
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

export default Login;

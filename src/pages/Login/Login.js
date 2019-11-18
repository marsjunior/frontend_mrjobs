import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import ButtonTransparent from '../../components/ButtonTransparent';
import ButtonOrange from '../../components/ButtonOrange';
import InputGray from '../../components/InputGray';
import api from '../../services/api';
import { login, isAuthenticated } from '../../services/Auth';



function Login({ history }) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  useEffect(() => {
    if(isAuthenticated()){
      history.push("/vagas");
    }
  }, []);

  async function logar(e){
    e.preventDefault();
    
    const resp =  await api.post('auth/loginPF/email', {
      email,
      password
    });
    let token = resp.data.token;
    login(token);

    history.push("/vagas");
  }


  return (
    <div className="all">
      <div className="container">
        
        <img className="logo" src={logo} alt="mr jobs"/>
        <div className="content">
        
        <form onSubmit={logar}>
          <InputGray id="custom-css-standard-input" 
            onChange={ e => setEmail(e.target.value)} 
            label="Email" />

          <InputGray  id="custom-css-standard-input" type="password"
            onChange={ e => setPassword(e.target.value)}
            label="Senha" />
          <ButtonOrange variant="contained" color="inherit" type="submit" className="button">Login</ButtonOrange>
          </form>
          <a href="/recuperarsenha">Esqueci minha senha</a>
          <ButtonTransparent variant="outlined" onClick={ () => history.push("/registro")} color="inherit" className="button">Registre-se</ButtonTransparent>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import { withStyles, AppBar, Button, TextField, Toolbar, Typography, Menu } from '@material-ui/core';


const ColorButton = withStyles( theme => ({
  root: {
    color: "#fff",
    marginTop: 30,
    width: '100%',
    borderRadius: '2em',
    backgroundColor: "#F49400",
    "&:hover": {
      backgroundColor: "#cc7a00"
    }
  }

}))(Button);

const ButtonT = withStyles( theme => ({
  root: {
    color: "#F49400",
    borderRadius: '2em',
    borderColor: "#F49400",
    marginTop: 15,
    fontSize: 12,
  }

}))(Button);

const InputCustom = withStyles( theme => ({
  root: {
    width: '100%'
  }

}))(TextField);

const ToobarCustom = withStyles( theme => ({
  root: {
    backgroundColor: '#F49400'
  }
}))(Toolbar);

function App() {
  return (
    <div className="all">
      <AppBar position="static">
        <ToobarCustom variant="dense">
          <Typography>Login</Typography>
        </ToobarCustom>
      </AppBar>
      <div className="container">
        
        <img className="logo" src={logo} alt="mr jobs"/>
        <div className="content">
        
        <InputCustom  id="custom-css-standard-input" label="Email" />

        <InputCustom  id="custom-css-standard-input" label="Senha" />
        <ColorButton variant="contained" color="inherit" className="button">Login</ColorButton>
        <a href="#">Esqueci minha senha</a>
        <ButtonT variant="outlined" color="inherit" className="button">Registre-se</ButtonT>
        
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';

import { isAuthenticated, logout } from './services/Auth';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Vagas from './pages/Vagas/Vagas';
import Registro from './pages/RegistroPF/Registro';
import RegistroPJ from './pages/RegistroPJ/Registro';
import Perfil from './pages/Perfil/Perfil';

const PrivateRoute = ({ component: Component, ... rest })  => (
    <Route 
    { ... rest} 
    render={props => (
        isAuthenticated() ? ( 
            <Component { ... props } />
        ) : (
            <Redirect to={{pathname: '/', state: { from: props.location } }} />
        )
    )}/>
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/registropj" component={RegistroPJ} />
            <Route exact path="/recuperarsenha" component={() => <h1>Recuperar Conta</h1>} />
            <PrivateRoute path="/vagas" component={Vagas} />
            <PrivateRoute path="/perfil" component={Perfil} />
            <PrivateRoute path="/sair" component={ (props) => {logout(); return <Redirect to={{pathname: '/', state: { from: props.location }}} />;}} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
import React from 'react';

import { isAuthenticated } from './services/Auth';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';
import Vagas from './pages/Vagas/Vagas';
import Registro from './pages/RegistroPF/Registro';
import RegistroPJ from './pages/RegistroPJ/Registro';
import Perfil from './pages/Perfil/Perfil';

const PrivateRoute = ( { component: Component, ... rest } )  => (
    <Route { ... rest} render={ props => (
        isAuthenticated() ? ( <Component {... props} />) :
        (
            <Redirect to={{pathname: '/', state: { from: props.location } }} />
        )
    )}/>
);

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/registropj" component={RegistroPJ} />
        <Route exact path="/recuperarsenha" component={() => <h1>Recuperar Conta</h1>} />
        <PrivateRoute path="/app" component={() => <h1>Você esta logado</h1>} />
        <PrivateRoute path="/vagas" component={Vagas} />
        <PrivateRoute path="/perfil" component={Perfil} />
    </BrowserRouter>
);

export default Routes;
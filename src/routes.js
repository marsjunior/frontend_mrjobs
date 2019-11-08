import React from 'react';

import { isAuthenticated } from './services/Auth';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';
import Vagas from './pages/Vagas/Vagas';

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
        <Route exact path="/cadastro" component={() => <h1>Cadastro</h1>} />
        <Route exact path="/recuperarsenha" component={() => <h1>Recuperar Conta</h1>} />
        <PrivateRoute path="/app" component={() => <h1>Você esta logado</h1>} />
        <PrivateRoute path="/vagas" component={Vagas} />
    </BrowserRouter>
);

export default Routes;
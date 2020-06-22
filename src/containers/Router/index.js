import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../Login';
import SignUpPage from '../SignUp';
import HomePage from '../Home';

export const routes = {
    root: "/",
    login: "/login",
    signup: "/signup",
    home: "/home",
    signupAdm: "/signupadm"
}

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={LoginPage}/>
                <Route exact path={routes.signup} component={SignUpPage}/>
                <Route exact path={routes.home} component={HomePage}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default Router;
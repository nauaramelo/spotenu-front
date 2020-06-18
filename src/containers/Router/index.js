import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../Login';
import SignUpPage from '../SignUp';

export const routes = {
    root: "/",
    login: "/login",
    signup: "/signup",
    home: "/home"
}

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={LoginPage}/>
                <Route exact path={routes.signup} component={SignUpPage}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default Router;
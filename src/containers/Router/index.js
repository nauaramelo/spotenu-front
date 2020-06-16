import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../Login';

export const routes = {
    root: "/",
    login: "/login",
    home: "/home"
}

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={LoginPage}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default Router;
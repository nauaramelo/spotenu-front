import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../Login';
import SignUpPage from '../SignUp';
import HomePage from '../Home';
import SignUpAdminPage from '../SignUpAdmin';
import ApproveBandPage from '../ApproveBand';
import AddGenrePage from '../AddGenre';
import AddMusicPage from '../AddMusic';
import AddAlbumPage from '../AddAlbum';
import ListGenrePage from '../ListGenre';

export const routes = {
    root: "/",
    login: "/login",
    signup: "/signup",
    home: "/home",
    signupAdm: "/signupadm",
    approveBand: "/band/approve",
    addGenre: "/genre/add",
    listGenre: "/genre/list",
    addMusic: "/music/add",
    addAlbum: "/album/add"
}

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={LoginPage}/>
                <Route exact path={routes.signup} component={SignUpPage}/>
                <Route exact path={routes.home} component={HomePage}/>
                <Route exact path={routes.signupAdm} component={SignUpAdminPage}/>
                <Route exact path={routes.approveBand} component={ApproveBandPage}/>
                <Route exact path={routes.addGenre} component={AddGenrePage}/>
                <Route exact path={routes.listGenre} component={ListGenrePage}/>
                <Route exact path={routes.addMusic} component={AddMusicPage}/>
                <Route exact path={routes.addAlbum} component={AddAlbumPage}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default Router;
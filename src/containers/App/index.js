import React, { useState } from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../../style/theme";
import Router from "../Router";
import { createBrowserHistory } from "history"; 
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware } from "connected-react-router";
import styled from "styled-components";
import Menu from "../Menu";
import Header from '../Header'

const Divizona = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 100vh;
  color: white;
  background-color: #212121; 
`

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

const App = props => {
  const [state, setState] = useState({
    isLogged: window.localStorage.getItem('token') || store.getState().login.logged
  })

  store.subscribe(() => { 
    setState({ isLogged: store.getState().login.logged || window.localStorage.getItem('token') })
  })

  const renderPagesWithUserLogged = () => {
    return (
      <Divizona>
        <Menu />
        <main>
          <Header />
          <Router history={history} />
        </main>
      </Divizona>
    )
  }
  
  const renderPagesWithoutUserLogged = () => {
    return (
      <Router history={history} />
    )
  }

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        { state.isLogged ? renderPagesWithUserLogged() : renderPagesWithoutUserLogged() }
      </MuiThemeProvider>
    </Provider>
  )
}

export default App;
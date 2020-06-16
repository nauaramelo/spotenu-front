import React from "react";
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
/* import Card from '@material-ui/core/Card'; */
/* import CardContent from '@material-ui/core/CardContent'; */
import AppBar from '@material-ui/core/AppBar'; 
/* import {classes} from '../../style/theme'; */

const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "main"
  "footer";
`

/* const Headers = styled(AppBar)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  background-color: "#fafafa"
` */

/* const PageContent = styled(Card)`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
` */
/* const Footer = styled(AppBar)`
  display: flex;
  align-items: center;
  padding: 19px;
` */
export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
 {/*       /*<Headers>
        Spotenu
      </Headers> */ }
      <Router history={history} />
      {/* <PageContent className={classes.card}>
        <CardContent>
        </CardContent>
      </PageContent> */
/*        <Footer position="static" color="primary">
        <strong> digite aqui um footer</strong>
      </Footer> */} 
      </Container>
    </MuiThemeProvider>
  </Provider>
);

export default App;
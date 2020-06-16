import React, { useState } from 'react';
/* import { login } from '../../actions/login'; */
import { TextField, Typography, Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { connect } from "react-redux";
import styled from "styled-components";
import CardMedia from '@material-ui/core/CardMedia';
import logo from "./logo.png"

/* const Containers = styled.div`
    height: 100vh;
    gap: 2vh;
    place-content: center;
    justify-items: center;
    display: grid;
` */
const Forms = styled.form`
  /* height: 100vh; */
  margin-top: 10vh;
  gap: 2vh;
  place-content: center;
  justify-items: center;
  display: grid;
`

const Textfields = styled(TextField)`
    width: 55vh;
`

const Dividers = styled(Divider)`
    width: 55vh;
    place-content: center;
    justify-items: center;
`

const DividerHead = styled(Divider)`
    place-content: center;
    justify-items: center;
`

const ThypographyHead = styled(Typography)`
    margin-top: 1vh;
`

const Buttons = styled(Button)`
    color: #fff;
    padding: 16px 14px 18px;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    padding: 16px 48px 18px;
    transition-duration: .3s;
    border-width: 0;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;
`

const Logo = styled.img`
    height: 8vh;
    width: 8vh;
    display: inline-block;
    margin-right: 1vh;
`

const Head = styled.div`
    display: flex;
    justify-content: center;
    height: 15vh;
    margin-top: 8vh;
    gap: 1vh;
`

const LoginPage = props => {
    const [state, setState] = useState({
        credential: "",
        password: ""
    })

    const handleFieldChange = (event) => {
        setState(event.target.password)
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
/*         props.login(credential, password) */
        //Lembrar de mudar quando houver outra action
    }

    return (
        <div>
            <Head>
                <Logo src={logo} title="Spotenu"/>
                <ThypographyHead variant="h4"> 
                    Spotenu
                </ThypographyHead>
            </Head>
            <DividerHead variant="middle" />
            <Forms onSubmit={onSubmitForm}>
                <Typography variant="h6"> 
                  Para continuar, faça login no Spotenu.  
                </Typography>
                <Textfields 
                    variant="outlined"
                    onChange={handleFieldChange}
                    name="credential"
                    type="text"
                    label="Email ou Nickname"
                    value={state.credential}
                />
                <Textfields 
                    variant="outlined"
                    onChange={handleFieldChange}
                    name="password"
                    type="password"
                    label="Senha"
                    value={state.password}
                />
                <Buttons type="submit" variant="contained" color="primary"> ENTRAR </Buttons>
                <Dividers variant="middle" />
                <Typography variant="h6"> 
                  Não tem uma conta?   
                </Typography>
                <Buttons type="submit" variant="contained" color="secondary" > INSCREVER-SE NO SPOTENU </Buttons>
            </Forms>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
/*     login: (credential, password) => dispatch(login(credential, password)) */
})

export default connect (null, mapDispatchToProps)(LoginPage)
import React, { useState, useEffect } from 'react';
/* import { login } from '../../actions/login'; */
import { TextField, Typography, Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { connect } from "react-redux";
import styled from "styled-components";
import logo from "./logo.png"
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { login } from '../../actions/login'
import {Link, useHistory} from 'react-router-dom'

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
    const [form, setForm] = useState({
        emailOrNickname: '',
        password: ''
      })

    const history = useHistory()

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
          history.push('/home')
        }
    }, [history])

    const onChangeField = (event) => {
        const fieldName = event.target.name
        setForm({...form, [fieldName]: event.target.value})
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.login(form.emailOrNickname, form.password)
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
                    variant={"outlined"}
                    onChange={onChangeField}
                    name={"emailOrNickname"}
                    type={"text"}
                    label={"Email ou Nickname"}
                    value={form.emailOrNickname}
                />
                <Textfields 
                    variant={"outlined"}
                    onChange={onChangeField}
                    name={"password"}
                    type={"password"}
                    label={"Senha"}
                    value={form.password}
                />
                <Buttons type="submit" variant="contained" color="primary"> ENTRAR </Buttons>
                <Dividers variant="middle" />
                <Typography variant="h6"> 
                  Não tem uma conta?   
                </Typography>
                <Buttons type="button" variant="contained" color="secondary" onClick={props.goToSignup}> 
                    INSCREVER-SE NO SPOTENU 
                </Buttons>
            </Forms>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    login: (credential, password) => dispatch(login(credential, password)),
    goToSignup: () => dispatch(push(routes.signup))
})

export default connect(null, mapDispatchToProps)(LoginPage)
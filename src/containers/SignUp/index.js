import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField, Typography, Button } from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styled from "styled-components";
import logo from "./logo.png"
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { push } from "connected-react-router";
import { routes } from "../Router";
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";
import theme from '../../style/theme'

const Logo = styled.img`
    height: 8vh;
    width: 8vh;
    display: inline-block;
    margin-right: 1vh;
`
const Head = styled.div`
    display: flex;
    justify-content: center;
    height: 13vh;
    margin-top: 5vh;
    gap: 1vh;
`
const ThypographyHead = styled(Typography)`
    margin-top: 1vh;
`

const Forms = styled.form`
  margin-top: 3vh;
  gap: 2vh;
  place-content: center;
  justify-items: center;
  display: grid;
  margin-bottom: 5vh;
`

const FormControls = styled(FormControl)`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 2vh;
    width: 100%;
`

const Textfields = styled(TextField)`
    width: 55vh;
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
    width: 55vh;
`

const DividerHead = styled(Divider)`
    place-content: center;
    justify-items: center;
`

const RadioGroups = styled(RadioGroup)`
    display: flex;
    flex-direction: row;
`

const DivCustomLink = styled.div`
    display: flex;
    flex-direction: row;

    a {
        margin-left: 0.5vh;
    }
`

const typesUser = {
    BAND: 'BAND',
    LISTENER_NO_PAYING: 'LISTENERNOPAYING'
}

const SignUpPage = props => {

    const [state, setState] = useState({
        name: "",
        nickname: "",
        email: "",
        password: "",
        description:"",
        typesUser: ""
    }) 

    const handleFieldChange = (event) => {
        setState(state => ({
            ...state,
            [event.target.name]: event.target.value
        }))
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
    }

    const shouldRender = () => {
        return state.typesUser === typesUser.BAND
    }

    const renderFieldsForBand = () => {
        return (<Textfields 
                    variant="outlined"
                    onChange={handleFieldChange}
                    name="description"
                    type="text"
                    label="Escreva uma descrição."
                    defaultValue="Escreva uma descrição."
                    value={state.description}
        />)
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
                <Typography variant="h5">
                    Inscreva-se e comece a curtir.
                </Typography>
                    <FormControls component="fieldset">
                        <FormLabel component="legend"> Você é: </FormLabel>
                        <RadioGroups aria-label="usuário" name="typesUser" value={state.typesUser} onChange={handleFieldChange}>
                            <FormControlLabel value={typesUser.LISTENER_NO_PAYING} control={<Radio color="primary" />} label="Ouvinte" />
                            <FormControlLabel value={typesUser.BAND} control={<Radio color="primary" />} label="Músico/banda" />
                        </RadioGroups>
                    </FormControls>
                <Textfields 
                    variant="outlined"
                    onChange={handleFieldChange}
                    name="name"
                    type="text"
                    label="Qual o seu nome?"
                    value={state.name}
                />
                <Textfields 
                    variant="outlined"
                    onChange={handleFieldChange}
                    name="nickname"
                    type="text"
                    label="Como devemos chamar você?"
                    value={state.nickname}
                />
                <Textfields 
                    variant="outlined"
                    onChange={handleFieldChange}
                    name="email"
                    type="email"
                    label="Qual o seu email?"
                    value={state.email}
                />
                <Textfields 
                    variant="outlined"
                    onChange={handleFieldChange}
                    name="password"
                    type="text"
                    label="Crie uma senha."
                    value={state.password}
                />
                <Textfields 
                    variant="outlined"
                    onChange={handleFieldChange}
                    name="password"
                    type="text"
                    label="Insira a senha novamente."
                    value={state.password}
                />
                { shouldRender() ? renderFieldsForBand() : null}
                <Buttons type="button" variant="contained" color="primary" onClick={props.goToHome}> 
                    INSCREVER-SE
                </Buttons>
                <DivCustomLink>
                    <Typography variant="body1"> 
                        Ja tem uma conta?
                    </Typography>
                    <Link to={routes.root} style={{ color: theme.palette.primary.main }}>Faça Login</Link>
                </DivCustomLink>
            </Forms>
        </div>
    )
} 

const mapDispatchToProps = dispatch => ({
    goToHome: () => dispatch(push(routes.home)),
    goToLogin: () => dispatch(push(routes.root))
})

export default connect(null, mapDispatchToProps)(SignUpPage)
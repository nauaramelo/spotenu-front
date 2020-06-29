import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import FormLogged from '../../components/FormLogged'
import { signupAdmin } from '../../actions/user';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { setLogged } from '../../actions/login'

const forms = [
    {
        name: "name",
        type: "text", 
        label: "Nome Completo", 
        required: true
    },
    {
        name: "nickname",
        type: "text", 
        label: "Nickname", 
        required: true
    },
    {
        name: "email",
        type: "email", 
        label: "Email",
        required: true
    },
    {
        name: "password",
        type: "text", 
        label: "Senha",
        required: true
    },
    {
        name: "confirmPassword",
        type: "text", 
        label: "Confirmação de senha",
        required: true
    },
]


const SignupAdminPage = props => {

    const [state, setState] = useState({
        name: '',
        nickname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            props.setLogged(false)
            props.goToLogin()
        }
    }, [])

    const onSubmitForm = (event) => {
        event.preventDefault();

        if (isValidPassword()) {
            props.signupAdmin(state)
            clearFields()
        } else {
            alert('Senhas diferentes')
        }
    }

    const isValidPassword = () => {
        return state.password === state.confirmPassword
    }

    const clearFields = () => {
        setState({name: '', nickname: '', email: '', password: '', confirmPassword: '' })
    }

    return (
        <FormLogged 
            onSubmitForm={onSubmitForm}
            featureTitle={'Cadastrar administrador'}
            fields={forms}
            state={state}
            setState={setState}
            buttonName={'Cadastrar Administrador'}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    signupAdmin: (form) => dispatch(signupAdmin(form)),
    setLogged: (logged) => dispatch(setLogged(logged)),
    goToLogin: () => dispatch(push(routes.root))
})

export default connect(null, mapDispatchToProps)(SignupAdminPage)
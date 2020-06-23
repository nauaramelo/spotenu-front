import React, { useState } from 'react';
import { connect } from "react-redux";
import FormLogged from '../../components/FormLogged'

const forms = [
    {
        name: "name",
        type: "text", 
        label: "Nome Completo", 
        pattern: "^[a-z-A-Z\\s]{3,}$",
        required: true
    },
    {
        name: "nickname",
        type: "text", 
        label: "Nickname", 
        pattern: "^[a-z-A-Z\\s]{3,}$",
        required: true
    },
    {
        name: "email",
        type: "email", 
        label: "Email", 
        pattern: "^[a-z-A-Z\\s]{3,}$",
        required: true
    },
    {
        name: "password",
        type: "text", 
        label: "Senha", 
        //Mudar pattern para senha de 6 caracteres
        pattern: "^[a-z-A-Z\\s]{3,}$",
        required: true
    },
    {
        name: "confirmPassword",
        type: "text", 
        label: "Confirmação de senha", 
        //Mudar pattern para senha de 6 caracteres
        pattern: "^[a-z-A-Z\\s]{3,}$",
        required: true
    },
]


const SignupAdminPage = props => {

    const [state, setState] = useState({})

    const onSubmitForm = (event) => {
        event.preventDefault();
    }

    return (
        <FormLogged 
            onSubmitForm={onSubmitForm}
            featureTitle={'Cadastrar administrador'}
            fields={forms}
            state={state}
            setState={setState}
            actionButton={props.goToHome}
            buttonName={'Cadastrar Administrador'}
        />
    )
}

const mapDispatchToProps = dispatch => ({})

export default connect(null, mapDispatchToProps)(SignupAdminPage)
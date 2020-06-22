import React, { useState } from 'react';

const SignupAdmin = props => {

    const [state, SetState] = useState({
        name: "",
        nickname: "",
        email: "",
        password: "",
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

    return (
        <form>
            <Typography variant="h5">
                Cadastrar administrador
            </Typography>
            <TextField 
                variant="outlined"
                onChange={handleFieldChange}
                name="name"
                type="text"
                label="Qual o nome dele?"
                value={state.name}
            />
            <TextField 
                variant="outlined"
                onChange={handleFieldChange}
                name="nickname"
                type="text"
                label="Como ele vai ser chamado?"
                value={state.nickname}
            />
            <TextField 
                variant="outlined"
                onChange={handleFieldChange}
                name="email"
                type="email"
                label="Qual o email dele?"
                value={state.email}
            />
            <TextField 
                variant="outlined"
                onChange={handleFieldChange}
                name="password"
                type="text"
                label="Escolha uma senha para ele"
                value={state.password}
            />
            <button variant="contained" color="primary" onClick={props.goToHome}>
                Cadastrar Administrador
            </button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({})

export default connect(null, mapDispatchToProps)(SignupAdmin)
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import FormLogged from '../../components/FormLogged';
import { addGenre } from '../../actions/genre';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { setLogged } from '../../actions/login'

const forms = [
    {
        name: "name",
        type: "text", 
        label: "Nome do Gênero", 
        required: true
    },
]

const AddGenrePage = (props) => {

    const [state, setState] = useState({
        name: ""
    })

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            props.setLogged(false)
            props.goToLogin()
        }
    }, [])

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.addGenre(state)
    }

    return (
        <div>
            <FormLogged 
                onSubmitForm={onSubmitForm}
                featureTitle={'Adicionar Gênero'}
                fields={forms}
                state={state.name}
                setState={setState}
                buttonName={'Adicionar'}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setLogged: (logged) => dispatch(setLogged(logged)),
    goToLogin: () => dispatch(push(routes.root)),
    addGenre: (form) => dispatch(addGenre(form)),
    goToHome: () => dispatch(push(routes.home))
})

export default connect(null, mapDispatchToProps)(AddGenrePage)

import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import FormLogged from '../../components/FormLogged';
import { listGenres } from '../../actions/genre';
import { setLogged } from '../../actions/login'
import { push } from 'connected-react-router';
import { routes } from '../Router';

const AddAlbumPage = (props) => {
    const forms = [
        {
            name: "name",
            type: "text", 
            label: "Nome do Album", 
            required: true
        },
        {
            name: "genres",
            type: "select", 
            label: "Selecione o Gênero", 
            required: true,
            options: props.genres,
            multiple: true
        }
    ]

    const [state, setState] = useState({
        genres: []
    })

    const handleFieldChange = (event) => {
        const fieldName = event.target.name
        setState({...state, [fieldName]: event.target.value})
    }

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            props.setLogged(false)
            props.goToLogin()
        }

        if (window.localStorage.getItem('token')) {
            props.listGenres()
        }

    }, [])

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.listGenres()
    }

    return (
        <FormLogged 
            onSubmitForm={onSubmitForm}
            featureTitle={'Criar Album'}
            fields={forms}
            state={state}
            setState={setState}
            buttonName={'Criar'}
            onChange={handleFieldChange}
        />
    )
}

const mapStateToProps = state => {
    return {
      genres: state.genre.genres
    }
}

const mapDispatchToProps = dispatch => ({
    listGenres: () => dispatch(listGenres()),
    setLogged: (logged) => dispatch(setLogged(logged)),
    goToLogin: () => dispatch(push(routes.root))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAlbumPage)
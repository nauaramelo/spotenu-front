import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import FormLogged from '../../components/FormLogged';
import { setLogged } from '../../actions/login'
import { createMusic } from '../../actions/music';
import { listAlbums } from '../../actions/album';
import { push } from 'connected-react-router';
import { routes } from '../Router';

const AddMusicPage = (props) => {

    const forms = [
        {
            name: "name",
            type: "text", 
            label: "Nome da Música", 
            required: true
        },
        {
            name: "idAlbum",
            type: "select", 
            label: "Selecione o Album", 
            required: true,
            options: props.albums,
            multiple: false
        }
    ]

    const [state, setState] = useState({
        name: '',
        albums: []
    })

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            props.setLogged(false)
            props.goToLogin()
        }

        if (window.localStorage.getItem('token')) {
            props.listAlbums()
        }

    }, [])

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.createMusic(state);
        clearFields()
    }

    const clearFields = () => {
        setState({ name: '', albums: [] })
    }

    return (
        <FormLogged 
            onSubmitForm={onSubmitForm}
            featureTitle={'Adicionar Música'}
            fields={forms}
            state={state}
            setState={setState}
            actionButton={props.goToHome}
            buttonName={'Adicionar'}
        />
    )
}

const mapStateToProps = state => {
    return {
      albums: state.album.albums
    }
}

const mapDispatchToProps = dispatch => ({
    setLogged: (logged) => dispatch(setLogged(logged)),
    goToLogin: () => dispatch(push(routes.root)),
    listAlbums: () => dispatch(listAlbums()),
    createMusic: (data) => dispatch(createMusic(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMusicPage)

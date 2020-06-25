import React, { useState } from 'react';
import { connect } from "react-redux";
import FormLogged from '../../components/FormLogged';

const forms = [
    {
        name: "name",
        type: "text", 
        label: "Nome do Album", 
        required: true
    },
    {
        name: "genre",
        type: "select", 
        label: "Selecione o Gênero", 
        required: true,
        options: [
            {
                id: 1,
                name: 'Forró'
            },
            {
                id: 2,
                name: 'Funk'
            }
        ]
    }
]

const AddAlbumPage = (props) => {

    const [state, setState] = useState({})

    const onSubmitForm = (event) => {
        event.preventDefault();
    }

    return (
        <FormLogged 
            onSubmitForm={onSubmitForm}
            featureTitle={'Criar Album'}
            fields={forms}
            state={state}
            setState={setState}
            actionButton={props.goToHome}
            buttonName={'Criar'}
        />

    )
}

const mapDispatchToProps = dispatch => ({})

export default connect(null, mapDispatchToProps)(AddAlbumPage)
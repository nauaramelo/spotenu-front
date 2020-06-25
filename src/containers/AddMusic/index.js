import React, { useState } from 'react';
import { connect } from "react-redux";
import FormLogged from '../../components/FormLogged';

const forms = [
    {
        name: "name",
        type: "text", 
        label: "Nome da Música", 
        required: true
    },
    {
        name: "album",
        type: "select", 
        label: "Selecione o Album", 
        required: true,
        options: [
            {
                id: 1,
                name: 'Album 1'
            },
            {
                id: 2,
                name: 'Album 2'
            }
        ]
    }
]

const AddMusicPage = (props) => {

    const [state, setState] = useState({
        genre: ''
    })

    const onSubmitForm = (event) => {
        event.preventDefault();
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

const mapDispatchToProps = dispatch => ({})

export default connect(null, mapDispatchToProps)(AddMusicPage)

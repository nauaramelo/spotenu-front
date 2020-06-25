import React, { useState } from 'react';
import { connect } from "react-redux";
import FormLogged from '../../components/FormLogged';


const forms = [
    {
        name: "name",
        type: "text", 
        label: "Nome do Gênero", 
        required: true
    },
]

const AddGenrePage = (props) => {

    const [state, setState] = useState({})

    const onSubmitForm = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <FormLogged 
                onSubmitForm={onSubmitForm}
                featureTitle={'Adicionar Gênero'}
                fields={forms}
                state={state}
                setState={setState}
                actionButton={props.goToHome}
                buttonName={'Adicionar'}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({})

export default connect(null, mapDispatchToProps)(AddGenrePage)

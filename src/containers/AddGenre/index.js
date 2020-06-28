import React, { useState } from 'react';
import { connect } from "react-redux";
import FormLogged from '../../components/FormLogged';
import { addGenre } from '../../actions/genre';
import { push } from 'connected-react-router';
import { routes } from '../Router';


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

    const handleFieldChange = (event) => {
        const fieldName = event.target.name
        setState({...state, [fieldName]: event.target.value})
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.addGenre(state)
    }

    return (
        <div>
            <FormLogged 
                onSubmitForm={onSubmitForm}
                featureTitle={'Adicionar Gênero'}
                onChange={handleFieldChange}
                fields={forms}
                state={state.name}
                setState={setState}
                buttonName={'Adicionar'}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addGenre: (form) => dispatch(addGenre(form)),
    goToHome: () => dispatch(push(routes.home))
})

export default connect(null, mapDispatchToProps)(AddGenrePage)

import React from 'react'; 
import TextFieldTest from '../../components/TextFieldFormLogged';
import { TextField,Typography, Button, MenuItem } from "@material-ui/core";
import styled from 'styled-components';


const Forms = styled.form`
  margin-top: 3vh;
  place-content: center;
  justify-items: center;
  display: grid;
  margin-bottom: 5vh;
` 

const Buttons = styled(Button)`
    margin-top: 2vh;
    color: #fff;
    padding: 16px 14px 18px;
    font-size: 12px;
    line-height: 1;
    border-radius: 500px;
    transition-duration: .3s;
    border-width: 0;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;
    width: 55vh;
`

const TypographyCustom = styled(Typography)`
  color: white;
`

const FormLogged = (props) => {
    const handleFieldChange = (event) => {
        const fieldName = event.target.name
        console.log('state antes', props.state)
        props.setState({...props.state, [fieldName]: event.target.value})
        console.log('state depois', props.state)
    }

    return(
        <Forms onSubmit={props.onSubmitForm}>
            <TypographyCustom variant="h5" >
                {props.featureTitle}
            </TypographyCustom>
            { props.fields && props.fields.map(field => (
                field.type !== 'select' ?
                    <TextFieldTest key={field.name}
                        variant="outlined"
                        onChange={handleFieldChange}
                        name={field.name}
                        type={field.type}
                        label={field.label}
                        value={props.state[`${field.name}`]}
                        required={field.required}
                    />
                :
                    <TextFieldTest key={field.name}
                        select={true}
                        variant="outlined"
                        onChange={handleFieldChange}
                        name={field.name}
                        type={field.type}
                        label={field.label}
                        value={props.state[`${field.name}`]}
                        required={field.required}
                        options={field.options}
                    />
            ))}

            <Buttons variant="contained" color="primary" onClick={props.actionButton}>
                {props.buttonName}
            </Buttons>
        </Forms>
    )
}

export default FormLogged;
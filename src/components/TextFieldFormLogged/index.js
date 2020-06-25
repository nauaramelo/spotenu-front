import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, MenuItem } from '@material-ui/core';
import styled from 'styled-components';

const styles = theme => ({

  cssLabel: {
    color : '#52525d'
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
      color: 'white'
    }
  },

  cssFocused: {
      color: 'white'
  },

  notchedOutline: {
    borderColor: '#52525d !important'
  },

  input: {
      color: 'white'
  }

});

const Text = styled(TextField)`
    width: 55vh;
`

const TextFieldFormLogged = (props) => {
    const { classes } = props;

    return (
        <Text
          select={props.select || false}
          label={props.label}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          type={props.type}
          required={props.required}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            className: classes.input,
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            }
          }}
        >
          { props.options && props.options.map(option => {
            return (<MenuItem key={option.id} value={option.id}> {option.name} </MenuItem>)
          }) }
        </Text>
    );
}

export default withStyles(styles)(TextFieldFormLogged);

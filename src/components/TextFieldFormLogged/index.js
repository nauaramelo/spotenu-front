import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
        />
    );
}

export default withStyles(styles)(TextFieldFormLogged);

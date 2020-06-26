import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    primary: {
      main: '#1ed760',
    },

    secondary: {
      main: '#616467',
      light: '#616467',
    },

    default: {
      light: '#ff5722'
    }
  }
}); 


/* export const classes = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  /* pos: {
    marginBottom: 12,
  }, 
}; */
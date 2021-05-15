import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        type: 'light'
    },
});

theme.typography.h1 = {
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    fontSize: '0.5rem',
    
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    }
  };

theme.typography.h2 = {
    fontSize: '0.9rem',
    fontWeight: 'normal',
    
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    }
};

theme.typography.h3 = {
  fontSize: '0.8rem',
  fontWeight: 'normal',
  
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
  }
};

export default theme;

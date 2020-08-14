import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Rubik', 'sans-serif'],
    fontStyle:'normal'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: 'Rubik',
            fontStyle:'normal'
          }
        ]
      }
    }
  },
  palette: {
    primary: {
      main:'#42b883'
    },
    background:{
      default:'#f1f3f4'
    }
  }
})

export default theme;
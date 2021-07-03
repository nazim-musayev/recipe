import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette : {
        secondary : {
            main : '#49111C'
        }
    },
    overrides: {
        MuiTooltip : {
          tooltip: {
            fontSize: "1em",
            color: "black",
            backgroundColor: "white"
          }
        }
      },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 800,
          lg: 1280,
          xl: 1920,
        },
      },
})

export default theme;
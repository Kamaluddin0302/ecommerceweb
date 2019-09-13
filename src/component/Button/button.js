import React from 'react';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: 'purple',
    fontSize : '10px',
    width : '240px',
    display : 'block',
    height : '40px',
    fontWeight: 'lighter',
    fontFamily: 'Arial Verdana',
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
            {props.children}
      </ColorButton>
      
  
    </div>
  );
}
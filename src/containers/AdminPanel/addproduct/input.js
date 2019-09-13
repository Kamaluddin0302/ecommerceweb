      
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // width: '600px',
    marginLeft: '90px'
    
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      
      <TextField
    
        id="outlined-dense-multiline"
        label={props.fullname}
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        multiline
        style={{width: props.size, float: props.color }}
        rowsMax="4" 
        type = "number"
        value = {props.value} 
        name = {props.name}
        onChange = {(e)=>props.onclick(e)}
      />
      
    
      
    
    </form>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import history from './../../config/history/history'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: "20px"
  },
  chip: {
    margin: theme.spacing(1),
    width: "300px",
    backgroundColor: "purple",color: "white",
    fontSize: "22px"
  },
}));

export default function OutlinedChips(props) { 
console.log(props)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        label= {props.name}
        clickable
        className={classes.chip}
        color="primary"
        variant="outlined"
        onClick = {(e)=>props.shoppage(e)}
      />
     
    </div>
  );
}
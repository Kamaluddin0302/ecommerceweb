import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { MdShoppingCart} from "react-icons/md";
import history from './../../../config/history/history'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      {/* #1c2331 */}
      <table class="table">
  <thead  style = {{backgroundColor : "#800080" ,color: 'white'}}>
    <tr>
      <th scope="col">image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Remove</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    {props.products.length ?
props.products.map((val,ind) =>
<tr>
      <th scope="row" >
      <img src = {val.image} 
      alt = "profile"style ={{width:"60px"}}/></th>
      <td>{val.name}</td>
      <td>{val.price}</td>
      <td>{val.quantity}</td>
      <td><img src="https://img.icons8.com/color/48/000000/delete-sign.png" 
       onClick = {()=> props.delete(val.id, ind)}
       style = {{width : '30px', cursor: 'pointer'}}/></td>  
    <td><img src="https://img.icons8.com/material/24/000000/edit--v3.png" 
       onClick = {()=> history.push("/editproduct", {value : val})}
       style = {{width : '30px', cursor: 'pointer'}}/></td>
    </tr>)
    :
    <h3 style = {{textAlign:'center' ,marginLeft : 600,marginTop: 50}}>There is no any product</h3>}

  </tbody>
  
</table>
    </div>
  );
}
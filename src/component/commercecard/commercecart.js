import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { MdShoppingCart} from "react-icons/md";
import history from './../../config/history/history'
import FooterPage from './../Footer/footer'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();

const [totalPrice, settotalPrice] = useState(0)
  return (
    <div>
      <Paper className={classes.root}>
      {/* #1c2331 */}
      <table class="table">
  <thead  style = {{backgroundColor : "#800080" ,color: 'white'}}>
    <tr>
      <th scope="col">image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total price</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
    {props.productCard.length ?
props.productCard.map((val,ind) =>
<tr>
      <th scope="row" >
      <img src = {val.image} 
      alt = "profile"style ={{width:"60px"}}/></th>
      <td>{val.name}</td>
      <td>{val.price}</td>
      <td>{val.count}</td>
      <td>{val.count * val.price}</td>
       <td><img src="https://img.icons8.com/color/48/000000/delete-sign.png" 
       onClick = {()=> props.onClick(ind)}
       style = {{width : '30px', cursor: 'pointer'}}/></td>
    </tr>)
    :
    <h3 style = {{textAlign:'center' ,marginLeft : 600,marginTop: 50}}>There is no any product</h3>}
    {props.totalPrice ? 
  <tr>
  <th colSpan = "2" style ={{fontSize:'25px'}}>Total Price</th>
  <th colSpan = "2" style ={{fontSize:'25px'}}>{props.totalPrice}</th>
  <th colSpan = "2" style ={{fontSize:'25px'}}>

  <Button size="large" 
            style={{ color: "#fff", backgroundColor: "#9C27B0",curser:'pointer'}} 
            onClick = {()=> history.push("/facebooklogin")
          }
           >
      <MdShoppingCart />Press Order
   </Button>
  </th>

</tr>
: <h1></h1>  
  }

  </tbody>
  
</table>
      </Paper>

 <FooterPage/>

    </div>
  );
}
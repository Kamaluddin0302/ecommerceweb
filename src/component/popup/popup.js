import React from "react";
import Popup from "reactjs-popup";
import history from './../../config/history/history'
import Button from '@material-ui/core/Button';
import { MdShoppingCart} from "react-icons/md";
import './popup.css'
const ToolTipPositions = (props) => (
    <Popup
      className = "popup-content"
      trigger={ <MdShoppingCart />}
      position="bottom right"
      on="hover"
      >
<table className="table">
        {props.getproduct.length ? <div>
        {props.getproduct.map((val , ind)=>
  <tr>
    <td>
 <img width="70px" height= "50" src={val.image} />

    </td>
    <td>
    <span  style={{color:"black" ,fontSize: "20px"}}>{val.name}</span>

    </td>
    <td>
    <span style={{color:"#3f51b5",fontSize: "20px"}}>{val.price}</span> 

    </td>

    <td>
    <span style={{color:"#3f51b5",fontSize: "20px"}}>{val.count}</span> 

    </td>

  </tr>
)}

<span>
             <Button size="large" 
            style={{ color: "#fff", backgroundColor: "#9C27B0", marginTop: "30px",curser:'pointer'}} 
            onClick = {()=> history.push("/mycart")}
           >
      <MdShoppingCart />  View Cart
   </Button></span>
                    
</div>

:
          <div style ={{color: 'black',fontSize: "15px"}}>There is no any product</div>}
        
    </table>
    </Popup>
);
export default ToolTipPositions


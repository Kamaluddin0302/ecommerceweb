import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { MdShoppingCart } from 'react-icons/md';
import Grid from '@material-ui/core/Grid';
import Appbar from './../../component/navbar/navbar'
import FooterPage from './../../component/Footer/footer'
import './chekout2.css'
import {Firebase} from './../../config/firrebase/firebase'
class Checkout extends React.Component {
    constructor(){
        super()
        this.state = {
            productCard : [],
            fullName : '',
            email: '',
            address: '',
            city : '',
            cardName:'',
            cardNumber: '',
        }
    }
        componentDidMount(){
            let getproduct = localStorage.getItem('Allpeoduct')
            if(getproduct){
              getproduct= JSON.parse(getproduct);
              this.setState({
                productCard : getproduct
              })
            }
            }
saveValue = (e)=> {
this.setState({
  [e.target.name] : e.target.value
})
}
addData = ()=>{
  Firebase.firestore().collection("order").add(this.state)
  this.props.history.push("/")
  alert("Offer Send Successfuuly")
}

      render(){
console.log(this.state)
return(
<div>
    <Appbar getproduct = {this.state.productCard} />
    <br />
<div className="row">
  <div className="col-75">
    <div className="container2">
      <form action="/action_page.php">
        <div className="row">
          <div className="col-50">
            <h3>Filling Address</h3>
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" className='inputtext' id="fname" name="fullName" onChange = {this.saveValue.bind(this)} placeholder="Enter Full Name" />
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" className='inputtext' id="email" name="email" placeholder="Enter Email" onChange = {this.saveValue.bind(this)}/>
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" className='inputtext' id="adr" name="address" placeholder="Enter your address" onChange = {this.saveValue.bind(this)}/>
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" className='inputtext' id="city" name="city" placeholder="Enter City" onChange = {this.saveValue.bind(this)}/>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
           
            <label for="cname">Name on Card</label>
            <input type="text" className='inputtext' id="cname" name="cardName" placeholder="Name On Card" onChange = {this.saveValue.bind(this)}/>
            <label for="ccnum">Credit card number</label>
            <input type="text" className='inputtext' id="ccnum" name="cardNumber" placeholder="1111-2222-3333-4444" onChange = {this.saveValue.bind(this)}/>
           
          </div>
        </div>
       
        <input type="button" value="Continue to checkout" className="btn" onClick = {this.addData}/>
      </form>
    </div>
  </div>
  <div className="col-25">
    <div className="container2">
      <h4>Cart
        <span className="price" style={{color:'black'}}>
          <i className="fa fa-shopping-cart"></i>
          <b></b>
        </span>
      </h4>
      <p><span> Price </span><span className="price">$15</span></p>
      <p><span> Shiping Text</span> <span className="price">$5</span></p>
      <hr />
      <p>Total <span className="price" style={{color:'black'}}><b>$30</b></span></p>
    </div>
  </div>
   </div>
<FooterPage />
</div>
  )}}
  export default Checkout;
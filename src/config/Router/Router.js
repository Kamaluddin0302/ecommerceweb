import React from "react";
import { Router, Route } from "react-router-dom";
import {Home ,Shop ,Product,Mycart,Adminpanel,Checkout,Addproduct,Login, Facebook,Dashboard,Order,Editproduct} from './../../component'
import history from './../history/history'
function BasicExample() {
  return (
    <Router history = {history}>
        <Route exact path="/" component={Home}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/product" component={Product}/>
        <Route path="/mycart" component={Mycart}/>
        <Route path="/adminpanel" component={Adminpanel}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/addproduct" component={Addproduct}/>
        <Route path="/facebooklogin" component={Facebook}/>
        <Route path="/order" component={Order}/>
        <Route path="/editproduct" component={Editproduct}/>
    </Router>
  );
}
export default BasicExample;
 
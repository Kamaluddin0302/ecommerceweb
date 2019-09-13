import React from 'react';
import Paper from '@material-ui/core/Paper';
import './facebooklogin.css'
import {loginfacebook} from './../../config/function/function'

class Facebook extends React.Component {
  constructor() {
    super();
    this.state = {
      showArray: [],
      productCard : []
    };
  }
loginFunc = async()=>{
  try{
  let user = await loginfacebook()
   await alert("your Order successfully done") 
  await this.props.history.push("/checkout")
}
  catch(err){
    console.log(err)
  }
  }
  render(){
  return (
    <div className="App">
      <Paper style = {{width: "50%" ,padding: "10%", marginLeft: "25%", marginTop : "7%"}}>
        <h1>Login with facebook</h1>
        <button class="loginBtn loginBtn--facebook" onClick = {this.loginFunc}>
  Login with Facebook
</button>
</Paper>

    </div>
  );
}
}
export default Facebook;

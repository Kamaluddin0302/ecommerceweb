import React from 'react';
import Drawer from './Drawer/drawer'
import Login from './login/login'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Looder from './../../component/looder/looder'

class Adminpanel extends React.Component {
  constructor(){
    super()
    this.state={
      mail: '',
      password: ''
    }


  }

  getvalue = (e)=>{
console.log(e.target.value, e.target.name)
this.setState({
  [e.target.name] : e.target.value
})
  }

loginFunc = ()=> {
  let {mail,password} = this.state
  console.log(this.state)
  if (mail === "kamal@admin.com" && password === "admin123"){
    localStorage.setItem("login" , JSON.stringify("loginsuccessfull"))
    this.props.history.push("/dashboard")
  }
  else{
    alert("failed")
  }
}
  render(){
  return (
    <div className="App" >
<Paper style={{width: '600px', height: '300px' , margin: '0 auto',marginTop: "80px"}}>
  <h1>Login</h1>
        <Login name='mail' type = 'text' size='500px' place='Enter Email' onChange ={this.getvalue}/><br/>
        <Login name='password' type = 'password' size='500px' place='Enter Password' onChange ={this.getvalue}/>
<br/><br/>
        <Button size="large" onClick = {this.loginFunc}
            style={{ color: "#fff", backgroundColor: "#9C27B0", curser: 'pointer' }}
          >
            Login
   </Button>
</Paper>
    </div>
  );
}
}
export default Adminpanel;

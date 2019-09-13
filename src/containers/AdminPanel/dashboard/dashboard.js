
import React from 'react'
import Drawer from './../Drawer/drawer'
import Paper from '@material-ui/core/Paper';
// import OutlinedTextFields from './../../../contener/checkoutform/checkoutform'
// import { MdChevronRight } from "react-icons/md";
// import Button from '@material-ui/core/Button';
import {Firebase} from './../../../config/firrebase/firebase'
import './dashboard.css'
import Allproduct from './../allproduct/allproduct'

class Deshboard extends React.Component{
    constructor(){
        super()
        this.state = {
        products:[],
        login: false
        }
} 
componentDidMount(){
    let {products} = this.state;
    let login = localStorage.getItem("login")
      if(login){
   Firebase.firestore().collection("product").get()
   .then(data=>{
       console.log(data)
       data.forEach(value=>{
           let result = value.data();
            result.id = value.id
           products.push(result);
            this.setState({
                products:products,
                login: true
            })
       })
   })    
}
else{
this.props.history.push("/adminpanel")
}
}
dlt = (id ,ind)=>{
    let {products} = this.state
    products.splice(ind,1)
    this.setState({products: products})
    Firebase.firestore().collection("product").doc(id).delete().then(()=> {
        console.log("Document successfully deleted!");
    }).catch((error)=> {
        console.error("Error removing document: ", error);
    });

}          
render(){
    console.log(this.state.products)
        // console.log(this.state)
        return(
<div>
    
<div className="App">
        <Drawer/>
 <Paper style={{ padding: 20 , width: 1350, marginTop: '0px',marginLeft:"230px" ,height: 400 }}>
       <h1>dashboard</h1>
       <Paper style={{marginLeft:'100px',float: 'left', display: 'inline-block', padding: 20 , width: 220, marginTop: '100px', height: 120 }}>
     <span style={{}} className='img'><img  src='https://image.flaticon.com/icons/svg/145/145867.svg' width = '40' height = '40'/></span>
         <span style={{fontWeight: 'bolder' }} className='img2'>Total User</span>
         <span style={{fontSize: '50px' }} >00</span>

         </Paper>

         <Paper style={{marginLeft:'100px', float: 'left',display: 'inline-block', padding: 20 , width: 220, marginTop: '100px', height: 120 }}>
         <span style={{}} className='img'><img  src='https://image.flaticon.com/icons/svg/2099/2099103.svg' width = '40' height = '40'/></span>
         <span style={{fontWeight: 'bolder' }} className='img2'>Total Order</span>
         <span style={{fontSize: '50px' , marginRight: '30px'}} >00</span>

         </Paper>

         <Paper style={{marginLeft:'100px',float: 'left',display: 'inline-block', padding: 20 , width: 220, marginTop: '100px', height: 120 }}>
         <span style={{ }} className='img'><img  src='https://image.flaticon.com/icons/svg/138/138360.svg'width = '40' height = '40'/></span>
         <span style={{fontWeight: 'bolder' }} className='img2'>Total Payment</span>
         <span style={{fontSize: '50px' }} >00</span>

     </Paper>

     <Paper style={{marginLeft:'100px',float: 'left',display: 'inline-block', padding: 20 , width: 220, marginTop: '100px', height: 120 }}>
     <span style={{}} className='img'><img  src='https://image.flaticon.com/icons/svg/743/743007.svg'width = '40' height = '40'/></span>
     <span style={{fontWeight: 'bolder' }} className='img2'>Total Sale</span>
     <span style={{fontSize: '50px' }} >00</span>

     
     </Paper> 
  {/* products */}

         </Paper>
         <Paper>
<Allproduct products = {this.state.products} delete = {this.dlt}/>
</Paper>
 
</div>
</div>
  );
}
}
export default Deshboard

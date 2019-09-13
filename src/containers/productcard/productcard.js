import React, { useState }from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { MdShoppingCart } from 'react-icons/md';
import SimpleRating from './../../component/star/star';
import Footer from '../../component/Footer/footer'
class CardExample extends React.Component {
    constructor(){
        super()
        this.state = {
            count : 0,
            disable : true,
            disablebutton: true
        }
    }
    addToCart=()=>{
     let{count,myCart} = this.state;
      let cart = {
          image:this.props.location.state.image,
          title:this.props.location.state.title,
          price:this.props.location.state.price,
          count:count
      }
      myCart.push(cart);
      this.setState({
          myCart:myCart
      })

      localStorage.setItem("myCart",JSON.stringify(myCart));
    }

    componentDidMount(){
        if(JSON.parse(localStorage.getItem("myCart"))){
            this.setState({
                myCart:JSON.parse(localStorage.getItem("myCart")),
            })
        }
    }
    render(){
     let{count,myCart,disable,disablebutton} = this.state;
    return (
        <div >
  {console.log(this.props.value)}
        <div style={{ margin: "20px" }}>
            <Paper style={{ padding: 20, display: "flex" }}>
                <div style={{ marginRight: "40px" }}>
                    {console.log(this.props.value.image)}
                    <img src={this.props.value.image} width="500" height = "500px"/>
                </div>
                <div style={{ marginTop: '10px',textAlign:'left' }}>
                    <h2>{this.props.value.name}</h2>
                    <SimpleRating />
                    <p>{this.props.value.detail}</p>
                    {console.log(Number(this.props.value.quantity))}
                    <h3 style={{ color: "#9C27B0" }}>Rs: {this.props.value.price}</h3>
                    <h3>Quantity:</h3>
                    <div style={{ display: 'flex', border: '1px solid', justifyContent: "space-between",
                     width: "50%", }}>
                        <button  disabled = {disable} onClick={()=>{
                           
                            (count > 1) ? this.setState({count: count -1,disable : false,disablebutton: false, }):
                             this.setState({count: count -1,disable : true,disablebutton: true})
                            }} style={{ height: "35px", width: "40px",color:'white', backgroundColor: "purple" }}>-</button>
                        <h5 style={{ color: "#9C27B0", marginTop: "2px" ,width:"60% ",textAlign:"center"}}>{count}</h5>
                        <button  style={{ height: "35px", width: "40px",color:'white', backgroundColor: "purple" }} onClick = {()=>{
                     count < Number(this.props.value.quantity) ? this.setState({count: count + 1,disable : false,disablebutton: false}) : alert("only " + this.props.value.quantity + '  present')}
                        } >
                            +</button>
                    </div>
                    <Button  disabled = {disablebutton}  onClick = {()=>this.props.onclick(count,this.props.value)} size="large" style={{ color: "#fff", backgroundColor: "purple", marginTop: "30px" }}>
                        <MdShoppingCart />Add to Cart
                    </Button>
                </div>
            </Paper>
        </div>
<Footer/>
        </div>
    )
}
}

export default CardExample;

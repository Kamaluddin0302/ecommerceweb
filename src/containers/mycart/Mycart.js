import React from "react";
import Appbar from "./../../component/navbar/navbar";
import Commmercecart from './../../component/commercecard/commercecart'
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
  productCard : [],
  totalPrice : 0
    };
  }

  deletFun = (ind)=>{
    let {productCard,totalPrice} = this.state
   totalPrice = totalPrice - (productCard[ind].price * productCard[ind].count)
    productCard.splice(ind,1)
    this.setState({
      productCard: productCard,
      totalPrice:totalPrice
    })
 console.log(totalPrice)

   localStorage.setItem("Allpeoduct" ,JSON.stringify(productCard))
    }
  componentDidMount(){
    let {totalPrice} = this.state
    let getproduct = localStorage.getItem('Allpeoduct')
    if(getproduct){
      getproduct= JSON.parse(getproduct);
      this.setState({
        productCard : getproduct
      })
    }
for(var i =0; i < getproduct.length;i++){
 totalPrice = totalPrice + (getproduct[i].price * getproduct[i].count)
 this.setState({
   totalPrice : totalPrice
 })
 console.log(totalPrice)
}
    }
 
  render() {
    let {totalPrice} = this.state
    return (
      <div className="App">
        <Appbar getproduct = {this.state.productCard} />
        <Commmercecart productCard = {this.state.productCard} totalPrice = {totalPrice} onClick = {this.deletFun}/>
      </div>
    );
  }
}
export default Home;

import React from 'react';
import Appbar from './../../component/navbar/navbar'
import ProductCard from './../productcard/productcard'
class Product extends React.Component {
  constructor(){
    super()
    this.state = {
      productCard : []
    }
    this.saveProduct = this.saveProduct.bind(this)
  }
  saveProduct(data,productval){
  let {productCard} = this.state
let product = {
  count :data,
  image : productval.image,
  name: productval.name,
  price: productval.price,
}
let flag = true
  for(var i = 0; i < productCard.length; i++){
    if(productCard[i].image === productval.image){
      productCard[i].count = productCard[i].count + data;
      flag = false
    }
  }
  if(flag === true){
    productCard.push(product)
      }
          this.setState({
      productCard: productCard
    })
    localStorage.setItem('Allpeoduct' ,JSON.stringify(productCard))
}


componentDidMount(){
let getproduct = localStorage.getItem('Allpeoduct');
console.log(getproduct)
if(getproduct){
  getproduct= JSON.parse(getproduct);
  this.setState({
    productCard : getproduct
  })
}

}
  render(){
    console.log(this.state)
  return (
    <div className="App">
    <Appbar getproduct = {this.state.productCard}/>
    <ProductCard onclick = {this.saveProduct} value = {this.props.location.state}/>
    </div>
  );
}}
export default Product;
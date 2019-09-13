import React from 'react';
import Appbar from './../../component/navbar/navbar'
import {Firebase} from './../../config/firrebase/firebase';
import OutlinedChips from './../../component/Chips/Chips'
import Grid from "@material-ui/core/Grid";
import MediaCard from "./../../component/card/card";
import FooterPage from './../../component/Footer/footer'

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      showArray: [],
      productCard : []
    };
  }
  componentDidMount(){
    let {showArray} = this.state
    let getproduct = localStorage.getItem('Allpeoduct')
    if(getproduct){
      getproduct= JSON.parse(getproduct);
      this.setState({
        productCard : getproduct
      })
    }
    console.log(this.props.location.state)
    if (this.props.location.state){
      var ref = Firebase.firestore().collection('product').where('catagery' , "==" , this.props.location.state.name)
    }
    else{
      var ref = Firebase.firestore().collection('product')
    }
    ref.get().then(querySnapshot=> {
      console.log(querySnapshot)
            querySnapshot.forEach(doc=>{
            let FirebaseData = doc.data()
            showArray.push(FirebaseData) 
            console.log(showArray)
            this.setState({
              showArray
            })
    })
  })
  }

  shoppage =(e)=>{
    let {showArray} = this.state
    showArray = []
      Firebase.firestore().collection('product').where('catagery' , "==" , e.target.innerHTML)
      .get().then(querySnapshot=> {
      console.log(querySnapshot)
            querySnapshot.forEach(doc=>{
            let FirebaseData = doc.data()
            showArray.push(FirebaseData) 
            console.log(showArray)
            this.setState({
              showArray
            })
    })
  }).catch(
    this.setState({
      showArray
    })
  )
   }
  render(){
  return (
    <div className="App">
        <Appbar  getproduct = {this.state.productCard}/>
        <OutlinedChips name = "Shirt" shoppage = {this.shoppage}/>
        <OutlinedChips name = "Watch" shoppage = {this.shoppage}/>
        <OutlinedChips name = "Laptop" shoppage = {this.shoppage}/>
        <OutlinedChips name = "Shose" shoppage = {this.shoppage}/>


        <Grid container justify="center">
          {this.state.showArray.map((v, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              {console.log(v)}
              <MediaCard image={v.image} name= {v.name} price = {v.price} detail = {v.discription}/>
            </Grid>
          ))}
        </Grid>
        <FooterPage/>
    </div>
  );
}
}
export default Shop;

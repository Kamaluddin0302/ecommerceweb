import React from "react";
import banner from "./../../images/ecommerce-banner.png";
import CarouselPage from "./../../component/slider/slider";
import OutlinedChips from "./../../component/Chips/Chips";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./../../component/card/card";
import Appbar from "./../../component/navbar/navbar";
import {Firebase} from './../../config/firrebase/firebase';
import FooterPage from './../../component/Footer/footer'
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      showArray: [],
      productCard : []
    };
    this.shoppage = this.shoppage.bind(this)
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
    console.log("firebas")
      Firebase.firestore().collection('product').get().then(querySnapshot=> {
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
  shoppage(e){
  console.log(this.props)
this.props.history.push( "/shop",{name :e.target.innerHTML})
 }

  render() {
 console.log(this.state, "home")
    return (
      <div className="App">
        {console.log(this.props)}
        <Appbar getproduct = {this.state.productCard} />
        <CarouselPage />
        <br />
        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <img src={banner} alt="baner" width="100%" />
          </Grid>
        </Grid>
        <OutlinedChips name = "Shirt" shoppage = {this.shoppage}/>
        <OutlinedChips name = "Watch" shoppage = {this.shoppage}/>
        <OutlinedChips name = "Laptop" shoppage = {this.shoppage}/>
        <OutlinedChips name = "Shose" shoppage = {this.shoppage}/>


        <Grid container justify="center">
          {this.state.showArray.map((v, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              {console.log(v)}
              <MediaCard image={v.image} name= {v.name} price = {v.price} detail = {v.discription} quantity = {v.quantity}/>
            </Grid>
          ))}
        </Grid>
        <FooterPage/>
      </div>
    );
  }
}
export default Home;

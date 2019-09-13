import React from 'react';
import OutlinedTextFields from './../addproduct/input'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Firebase} from './../../../config/firrebase/firebase'
import Drawer from './../Drawer/drawer' 
class Addproduct extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      price: "",
      discription: "",
      quantity: "",
      image: "",
      id: "",
      catagery : "",
      imagename : "",
      datect: true
    }
  }
  nameFunc = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name] : e.target.value
    })
  }
 
  imageFunc = async (e) => {
    let imagename = e.target.files[0].name
    console.log(this.state.imagename)
    let ref = Firebase.storage().ref('/').child("image/" + this.state.imagename)
    await ref.put(e.target.files[0])
    ref.getDownloadURL().then(url =>
      this.setState({
        image: url
      })
    )
  }
  componentDidMount() {
     if (this.props.location.state){
        var val= this.props.location.state.value
        console.log(val)
        this.setState({
            name: val.name,
            price: val.price,
            discription: val.price,
            quantity:val.quantity,
            image: val.image,
            id: val.id,
            catagery : val.catagery,
            imagename : val.imagename   
          })
        }
        else{
          this.setState({
            datect : false
          })
        }
  }
  update() {
 
  Firebase.firestore().collection("product").doc(this.state.id).set(this.state)
  }
  render() {
    let { name, price, quantity, discription } = this.state
    console.log(this.state)
    return (
      <div className="App"> 
      {this.state.datect ? 
      <div>
        <Drawer/>
        <Paper style={{ padding: 20, width: 800, marginLeft: '400px', height: 600 }}>
          <h1>Edit Product</h1>
          <OutlinedTextFields fullname='Product Name' name = "name" value={name} size='600px' onclick={this.nameFunc} /><br />
          <OutlinedTextFields fullname='Price' name = "price" size='600px' value={price} onclick={this.nameFunc} /><br />
          <OutlinedTextFields fullname='Detail' name = "discription" size='600px' value={discription} onclick={this.nameFunc} /><br />
          <OutlinedTextFields fullname='Quantity' name = "quantity" size='600px' value={quantity} onclick={this.nameFunc} /><br />
          {/* <OutlinedTextFields fullname = 'Image Url' name = "image" size='600px' value ={image} onclick = {this.imageFunc}/><br/> */}
          <input type="file" onChange={this.imageFunc.bind(this)} /> <br /><br />
          <select onClick = {(e)=>this.setState({catagery : e.target.value})}>
              <option value = "">Select Catagery</option>
              <option value = "Shirt">Shirt</option>
              <option value = "Watch">Watch</option>
              <option value= "Laptop ">Laptop</option>

          </select>
        <br /><br />


          <Button size="large"
            style={{ color: "#fff", backgroundColor: "#9C27B0", curser: 'pointer' }}
            onClick={this.update.bind(this)}
          >
            Edit Product
   </Button>
        </Paper>
        </div> : <Paper>
          <h1>404</h1>
<h2>Page is Not Found</h2>
        </Paper>}
      </div>
    )
  }
}

export default Addproduct
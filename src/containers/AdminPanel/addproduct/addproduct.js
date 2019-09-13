import React from 'react';
import OutlinedTextFields from './input'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { savedata } from '../../../config/function/function'
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
      catagery : ""
    }
  }
  nameFunc = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name] : e.target.value
    })
  }
 
  imageFunc = async (e) => {
    console.log(e.target.files[0])
    let imagename = e.target.files[0].name
    let ref = Firebase.storage().ref('/').child("image/" + imagename)
    await ref.put(e.target.files[0])
    ref.getDownloadURL().then(url =>
      this.setState({
        image: url,
        imagename : imagename,
        login: false
      })
    )
  }

  componentDidMount() {
      let login =localStorage.getItem("login")
      if(login){
    let ref = Firebase.firestore().collection("product")
    ref.get().then(data => {
      data.forEach(val => {
        console.log(val.id, val.data())
        this.setState({
          id: val.id,
          login : true
        })
      })

    })
  }
    else{
    this.props.history.push("/adminpanel")
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
        <Drawer/>
        <Paper style={{ padding: 20, width: 800, marginLeft: '400px', height: 600 }}>
          <h1>Add Product</h1>
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
            onClick={() => {
              savedata(this.state)

              this.setState({
                name: "",
                price: "",
                discription: "",
                quantity: "",
                image: ""
              })
            }}
          >
            Add Product
   </Button>

        </Paper>
      </div>
    )
  }
}

export default Addproduct
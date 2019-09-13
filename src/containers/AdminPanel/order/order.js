import React from 'react';
import OutlinedTextFields from './../addproduct/input'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { savedata } from '../../../config/function/function'
import {Firebase} from './../../../config/firrebase/firebase'
import Drawer from './../Drawer/drawer'
class Addproduct extends React.Component {
  constructor() {
    super()
    this.state = {
    
    }
  }
 
  render() {
    console.log(this.state)
    return (
      <div className="App">
          <Drawer />
      </div>
    )
  }
}

export default Addproduct
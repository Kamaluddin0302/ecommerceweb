
import React from 'react'
import './looder.css'
import Paper from '@material-ui/core/Paper';
class Looder extends React.Component{
render(){
    return(
<div class="preloader-wrapper big active">
<Paper style ={{width: '900px' ,height: "700px", marginLeft:"25%" ,marginTop: "10%"}}>
<div class="loader"></div>
</Paper>
</div>
    )
}
}
export default Looder

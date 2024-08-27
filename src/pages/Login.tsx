import { Button, Grid, Paper, TextField } from "@mui/material"
import "./home.css"
import { Link } from "react-router-dom"


export const Login=()=>{
  
    return<div>  
      
    <Paper style={{padding:'100px',margin:'500px',marginTop:'50px',backgroundColor:'transparent',borderBlockColor:'black',borderBlockStartStyle:'groove',borderBlockEndStyle:'groove',borderRadius:'50px',borderRightStyle:'groove',borderLeftStyle:'groove',borderColor:'crimson',borderTopStyle:'groove',borderBottomStyle:'groove'}} className="abcd">
      <center><h1 style={{color:'violet'}}>TECH WORLD</h1></center>
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <br />
  <TextField id="outlined-basic" label="email" variant="filled" style={{backgroundColor:'lightblue',borderRadius:'40px'}}/>
  <br />
  <TextField id="outlined-basic" label="password" variant="filled" style={{backgroundColor:'lightblue',borderRadius:'40px'}} />
  <br />
  
  

  

  <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"
>


<Link to='/Register'>
<Button variant="contained" style={{color:'black',backgroundColor:'lightskyblue',borderRadius:'10px',borderEndStartRadius:'10px',borderBlockEndStyle:'groove'}}>Register</Button></Link>
<Link to='/Home'>
<Button variant="contained" style={{color:'black',backgroundColor:'lightskyblue',borderRadius:'10px',borderEndStartRadius:'10px',borderBlockEndStyle:'groove'}}>Login</Button></Link>
  
  </Grid>
   
    </Grid>
    </Paper>
    </div>
}
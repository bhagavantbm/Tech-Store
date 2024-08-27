import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const Mobile=()=>{
    return <>
    <center>
    <h1 style={{color:'orangered'}}>Select the Brand</h1>
    <br />
    
    </center>
    <Link to='/Redmi'>
    <Button style={{fontSize:'20px',marginLeft:'700px',fontWeight:'bolder',color:'Background',backgroundColor:'orange'}} >Redmi</Button></Link>
    <br />
    <Link to='/Samsung'>
    <Button style={{fontSize:'20px',marginLeft:'675px',fontWeight:'bolder',color:'Background',backgroundColor:'orange',marginTop:'30px'}} >Samsung</Button></Link>
    <br /><Link to='/Oneplus'>
    <Button style={{fontSize:'20px',marginLeft:'710px',fontWeight:'bolder',color:'Background',backgroundColor:'orange',marginTop:'30px'}} >1+</Button></Link>
    
    
    
    </>
}
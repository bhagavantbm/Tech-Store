import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import img1 from "./images/1.webp"
import img2 from "./images/2.jpg"
import img3 from "./images/3.avif"
import img4 from "./images/4.avif"
import img5 from "./images/5.jpg"
import img6 from "./images/6.jpg"
import img7 from "./images/7.avif"
import img8 from "./images/8.webp"
import img9 from "./images/9.png"
import img10 from "./images/10.jpg"
import img11 from "./images/11.webp"
import img12 from "./images/12.jpg"
import img13 from "./images/13.webp"
import img14 from "./images/14.avif"
import img15 from "./images/15.avif"
import img16 from "./images/16.avif"



import { url } from "inspector";
import { Link } from "react-router-dom";

export const Samsung = () => {
    
    const url='https://web.whatsapp.com/'
    const url1='https://www.samsung.com/in/smartphones/galaxy-s24-ultra/'
    const url2='https://www.samsung.com/in/smartphones/galaxy-s24/'
    const url3='https://www.samsung.com/in/smartphones/galaxy-s23/'
    const url4='https://www.samsung.com/in/smartphones/galaxy-s/galaxy-s23-fe-mint-128gb-sm-s711blgbins/'
   const url5='https://www.samsung.com/in/smartphones/galaxy-s24/'
   const url6='https://www.samsung.com/in/smartphones/galaxy-s24/buy/?modelCode=SM-S926BZVCINS' 
   const url7 ='https://www.samsung.com/in/smartphones/galaxy-s23-ultra/buy/?modelCode=SM-S918BZGCINS'
   const url8='https://www.samsung.com/in/smartphones/galaxy-s/galaxy-s21-fe-5g-olive-256gb-sm-g990blg4ins/'
 const url9='https://www.samsung.com/in/smartphones/galaxy-z-flip6/buy/?modelCode=SM-F741BAKAINS'
const url10='https://www.samsung.com/in/smartphones/galaxy-z-fold6/buy/?modelCode=SM-F956BZSDINS'
const url11='https://www.samsung.com/in/smartphones/galaxy-z-fold5/'
const url12='https://www.samsung.com/in/smartphones/galaxy-z-flip5/'
const url13='https://www.samsung.com/in/smartphones/galaxy-a55/buy/?modelCode=SM-A556ELBHINS'
const url14='https://www.samsung.com/in/smartphones/galaxy-a/galaxy-a35-5g-awesome-iceblue-128gb-sm-a356elbjins/'
const url15='https://www.samsung.com/in/smartphones/galaxy-a/galaxy-a15-5g-light-blue-128gb-sm-a156elbpins/'
const url16='https://www.samsung.com/in/smartphones/galaxy-a/galaxy-a14-5g-green-64gb-sm-a146blgdins/'



   return (
    <>
          
          <br />
          <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
        <br />
        {/* image---------------------------------------------------------------------------------------------------1 */}
                                <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img1} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹67,999
              <br />
              M.R.P : 
              <del>   ₹79,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Galaxy S24
<br />
Colour :  CollapseOnyx Black

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url1}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------------------------2 */}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img2} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹1,29,999
              <br />
              M.R.P : 
              <del>   ₹1,34,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Galaxy S24 Ultra
              <br />Colour : CollapseTitanium Yellow

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url2}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image-------------------------------------------------------------------------------------3 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
            
              
              image={img3} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹64,999
              <br />
              M.R.P : 
              <del>   ₹89,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Galaxy S23
<br />
Colour : CollapsePhantomblack

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url3}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
                        {/* image-------------------------------------------------------------------------------------4 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img4} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -7%  ₹52,999
              <br />
              M.R.P : 
              <del>   ₹64,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy S24+
<br />
Colour :CollapseCobalt Violet

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url4}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
            <br />
                                    {/* image-------------------------------------------------------------------------------------5 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img5} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹67,999
              <br />
              M.R.P : 
              <del>   ₹79,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy S24 (Special Edition)
<br />
Colour : CollapseSapphire Blue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url5}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image-------------------------------------------------------------------------------------6*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img6} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹67,999
              <br />
              M.R.P : 
              <del>   ₹79,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy S24 (Special Edition)
<br />
Colour : CollapseSapphire Blue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url6}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
              {/* image-------------------------------------------------------------------------------------7*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img7} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹1,04,999
              <br />
              M.R.P : 
              <del>   ₹1,12,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy S23 Ultra
<br />
Colour :CollapseGreen

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url7}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
                          {/* image-------------------------------------------------------------------------------------8*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img8} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹39,999
              <br />
              M.R.P : 
              <del>   ₹48,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy S21 FE 5G
<br />
Colour :CollapseOlive

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url8}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
                       {/* image-------------------------------------------------------------------------------------9 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img9} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -10%  ₹109,999
              <br />
              M.R.P : 
              <del>   ₹1,19,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy Z Flip6 (Special Edition)
<br />
Colour : Black

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url9}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
                                   {/* image-------------------------------------------------------------------------------------10 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img10} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -20%  ₹1,64,999
              <br />
              M.R.P : 
              <del>   ₹1,84,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy Z Fold6

<br />
Colour : Black

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url10}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
      {/* image---------------------------------------------------------------------------------------------------------11 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img11} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -20%  ₹1,64,999
              <br />
              M.R.P : 
              <del>   ₹1,84,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy Z Fold5 (Special Edition)


<br />
Colour :Sky-blue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url11}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
                  {/* image---------------------------------------------------------------------------------------------------------12*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img12} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -20%  ₹1,64,999
              <br />
              M.R.P : 
              <del>   ₹1,84,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy Z Flip5

<br />
Colour :Sky-olive

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url12}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            <br />
     {/* image---------------------------------------------------------------------------------------------------------13*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img13} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -20%  ₹45,999
              <br />
              M.R.P : 
              <del>   ₹48,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy A55 5G (12GB Memory)
 <br />
Colour : CollapseAwesome Iceblue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url13}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            {/* image---------------------------------------------------------------------------------------------------------14*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img14} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -13%  ₹33,999
              <br />
              M.R.P : 
              <del>   ₹30,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy A35 5G (8GB Memory)
<br />
Colour : CollapseAwesome Iceblue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url14}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
             {/* image---------------------------------------------------------------------------------------------------------15*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img15} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -13%  ₹19,999
              <br />
              M.R.P : 
              <del>   ₹21,499
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy A15 5G (8 GB Memory)
<br />
Colour : CollapseLight Blue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url15}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
                         {/* image---------------------------------------------------------------------------------------------------------16*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img16} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -15%  ₹11,999
              <br />
              M.R.P : 
              <del>   ₹14,499
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy A14 5G (4 GB Memory)
<br />
Colour :CollapseLight Green

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url16}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
         <br /> 
       
  
        {/* image---------------------------------------------------------------------------------------------------1 */}
                                <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img1} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹67,999
              <br />
              M.R.P : 
              <del>   ₹79,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Galaxy S24
<br />
Colour :  CollapseOnyx Black

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url1}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------------------------2 */}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img2} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹1,29,999
              <br />
              M.R.P : 
              <del>   ₹1,34,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Galaxy S24 Ultra
              <br />Colour : CollapseTitanium Yellow

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url2}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image-------------------------------------------------------------------------------------3 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
            
              
              image={img3} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹64,999
              <br />
              M.R.P : 
              <del>   ₹89,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Galaxy S23
<br />
Colour : CollapsePhantomblack

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url3}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
                        {/* image-------------------------------------------------------------------------------------4 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img4} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -7%  ₹52,999
              <br />
              M.R.P : 
              <del>   ₹64,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy S24+
<br />
Colour :CollapseCobalt Violet

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url4}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
            <br />
                                    {/* image-------------------------------------------------------------------------------------5 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img5} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹67,999
              <br />
              M.R.P : 
              <del>   ₹79,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy S24 (Special Edition)
<br />
Colour : CollapseSapphire Blue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url5}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image-------------------------------------------------------------------------------------6*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img6} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹67,999
              <br />
              M.R.P : 
              <del>   ₹79,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy S24 (Special Edition)
<br />
Colour : CollapseSapphire Blue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url6}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
              {/* image-------------------------------------------------------------------------------------7*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img7} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹1,04,999
              <br />
              M.R.P : 
              <del>   ₹1,12,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy S23 Ultra
<br />
Colour :CollapseGreen

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url7}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
                          {/* image-------------------------------------------------------------------------------------8*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img8} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹39,999
              <br />
              M.R.P : 
              <del>   ₹48,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy S21 FE 5G
<br />
Colour :CollapseOlive

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url8}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
                       {/* image-------------------------------------------------------------------------------------9 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img9} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -10%  ₹109,999
              <br />
              M.R.P : 
              <del>   ₹1,19,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy Z Flip6 (Special Edition)
<br />
Colour : Black

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url9}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
                                   {/* image-------------------------------------------------------------------------------------10 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img10} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -20%  ₹1,64,999
              <br />
              M.R.P : 
              <del>   ₹1,84,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy Z Fold6

<br />
Colour : Black

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url10}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
      {/* image---------------------------------------------------------------------------------------------------------11 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img11} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -20%  ₹1,64,999
              <br />
              M.R.P : 
              <del>   ₹1,84,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy Z Fold5 (Special Edition)


<br />
Colour :Sky-blue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url11}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
                  {/* image---------------------------------------------------------------------------------------------------------12*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img12} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -20%  ₹1,64,999
              <br />
              M.R.P : 
              <del>   ₹1,84,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy Z Flip5

<br />
Colour :Sky-olive

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url12}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            <br />
     {/* image---------------------------------------------------------------------------------------------------------13*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img13} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -20%  ₹45,999
              <br />
              M.R.P : 
              <del>   ₹48,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy A55 5G (12GB Memory)
 <br />
Colour : CollapseAwesome Iceblue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url13}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            {/* image---------------------------------------------------------------------------------------------------------14*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img14} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -13%  ₹33,999
              <br />
              M.R.P : 
              <del>   ₹30,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy A35 5G (8GB Memory)
<br />
Colour : CollapseAwesome Iceblue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url14}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
             {/* image---------------------------------------------------------------------------------------------------------15*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img15} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -13%  ₹19,999
              <br />
              M.R.P : 
              <del>   ₹21,499
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy A15 5G (8 GB Memory)
<br />
Colour : CollapseLight Blue

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url15}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
                         {/* image---------------------------------------------------------------------------------------------------------16*/}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' ,marginTop:'20px',marginLeft:'30px'}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img16} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -15%  ₹11,999
              <br />
              M.R.P : 
              <del>   ₹14,499
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">

              Galaxy A14 5G (4 GB Memory)
<br />
Colour :CollapseLight Green

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url16}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
         <br /> 
            </Grid>
            </>
 );
}
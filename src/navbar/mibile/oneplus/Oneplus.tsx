import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import img1 from "./images/1.webp"
import img2 from "./images/2.png"
import img3 from "./images/3.webp"
import img4 from "./images/4.webp"
import img5 from "./images/5.png"
import img6 from "./images/6.webp"
import img7 from "./images/7.webp"
import img8 from "./images/8.webp"
import img9 from "./images/10.jpg"
import img11 from "./images/11.jpg"


import { url } from "inspector";
import { Link } from "react-router-dom";

export const Oneplus= () => {
    
    const url='https://web.whatsapp.com/'
    const url1='https://www.oneplus.in/oneplus-12r?sku=5011105224'
    const url2='https://www.oneplus.in/oneplus-12?sku=5011105273'
    const url3='https://www.oneplus.in/oneplus-open?sku=5011103224'
const url4='https://www.oneplus.in/oneplus-nord-ce4-lite-5g?sku=5011110200'
const url5='https://www.oneplus.in/oneplus-nord-4?sku=5011110280'
const url6='https://www.oneplus.in/oneplus-nord-ce4-5g?sku=5011110020'
const url7='https://www.amazon.in/OnePlus-Nord-Bahamas-128GB-Storage/dp/B09RG5R5FG/ref=sr_1_13?adgrpid=60559645324&dib=eyJ2IjoiMSJ9.FsqlbJVpvstbdYDRqGZQc4Wzgh3b7jW9-DUjQRN-ZINLHS-JSLEYrr_tKcyT4KhogZ0BhC0e-ugTwF0Jq_LxNT9VhRTUzQZXZHSmM78Xm7M1mDnwMlDMb5iz-gKRJRcz8gPQh1Gq_tFKyvugUebvgd1GSBwMTZIpZiDsI3ck5ZC9RToRI5sIa3TB66S-ep7z87KJWD5Eb35-YMM33T_xiOhkywotymYBR92UnGTsSRc.CSAvOLAOIhQt4QRjq4QcM2bcgHOQO7nq6arh_b3jFPM&dib_tag=se&ext_vrnc=hi&hvadid=590595471528&hvdev=c&hvlocphy=9148183&hvnetw=g&hvqmt=e&hvrand=17862971044728518007&hvtargid=kwd-302675404973&hydadcr=26758_2636086&keywords=oneplus+phones&qid=1724690268&sr=8-13'
const url8='https://www.amazon.in/OnePlus-Ultra-Orange-128GB-Storage/dp/B0D5YDJ5QM/ref=sr_1_14?adgrpid=60559645324&dib=eyJ2IjoiMSJ9.FsqlbJVpvstbdYDRqGZQc4Wzgh3b7jW9-DUjQRN-ZINLHS-JSLEYrr_tKcyT4KhogZ0BhC0e-ugTwF0Jq_LxNT9VhRTUzQZXZHSmM78Xm7M1mDnwMlDMb5iz-gKRJRcz8gPQh1Gq_tFKyvugUebvgd1GSBwMTZIpZiDsI3ck5ZC9RToRI5sIa3TB66S-ep7z87KJWD5Eb35-YMM33T_xiOhkywotymYBR92UnGTsSRc.CSAvOLAOIhQt4QRjq4QcM2bcgHOQO7nq6arh_b3jFPM&dib_tag=se&ext_vrnc=hi&hvadid=590595471528&hvdev=c&hvlocphy=9148183&hvnetw=g&hvqmt=e&hvrand=17862971044728518007&hvtargid=kwd-302675404973&hydadcr=26758_2636086&keywords=oneplus+phones&qid=1724690268&sr=8-14'
const url9='https://www.amazon.in/OnePlus-Mercurial-Silver-256GB-Storage/dp/B0D7VKSZGW/ref=sr_1_17?adgrpid=60559645324&dib=eyJ2IjoiMSJ9.FsqlbJVpvstbdYDRqGZQc4Wzgh3b7jW9-DUjQRN-ZINLHS-JSLEYrr_tKcyT4KhogZ0BhC0e-ugTwF0Jq_LxNT9VhRTUzQZXZHSmM78Xm7M1mDnwMlDMb5iz-gKRJRcz8gPQh1Gq_tFKyvugUebvgd1GSBwMTZIpZiDsI3ck5ZC9RToRI5sIa3TB66S-ep7z87KJWD5Eb35-YMM33T_xiOhkywotymYBR92UnGTsSRc.CSAvOLAOIhQt4QRjq4QcM2bcgHOQO7nq6arh_b3jFPM&dib_tag=se&ext_vrnc=hi&hvadid=590595471528&hvdev=c&hvlocphy=9148183&hvnetw=g&hvqmt=e&hvrand=17862971044728518007&hvtargid=kwd-302675404973&hydadcr=26758_2636086&keywords=oneplus%2Bphones&qid=1724690268&sr=8-17&th=1'
   return (
    <>
          
          <br />
         
<Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="flex-start"
>

        
        {/* image---------------------------------------------------------------------------------------------------1 */}
                                <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img1} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -4%  ₹19,999
              <br />
              M.R.P : 
              <del>   ₹20,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE4 Lite 5G
8 GB RAM + 128 GB Storage
            <br />
              color:Mega Blue

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url1}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------------------------2*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img2} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -16%  ₹69,999
              <br />
              M.R.P : 
              <del>   ₹78,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus 12
16 GB RAM + 512 GB Storage
            <br />
              color:Flowy Emerald

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url2}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------------------------3*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img3} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -6%  ₹1,39,999
              <br />
              M.R.P : 
              <del>   ₹1,49,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Open
16 GB RAM + 512 GB Storage
            <br />
              color:Emerald Dusk

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url3}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
                         {/* image---------------------------------------------------------------------------------------------------4*/}
                         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img4} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -6%  ₹1,39,999
              <br />
              M.R.P : 
              <del>   ₹1,49,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Open
16 GB RAM + 512 GB Storage
            <br />
              color:Emerald Dusk

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url4}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            <br />
            {/* image---------------------------------------------------------------------------------------------------5*/}
                                     <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img5} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -4%  ₹29,999
              <br />
              M.R.P : 
              <del>   ₹35,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord 4
              8 GB RAM + 128 GB Storage
            <br />
              color:Obsidian Midnight

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url5}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            {/* image---------------------------------------------------------------------------------------------------6*/}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img6} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -4%  M.R.P :  ₹24,999
              <br />
              
              <del>   
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE4
              8 GB RAM + 128 GB Storage
            <br />
              color:Celadon Marble

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url6}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>        

 {/* image---------------------------------------------------------------------------------------------------7*/}
 <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img7} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'ornge'}}>
              <Typography gutterBottom  component="div" >
              -4%  M.R.P :  ₹24,999
              <br />
              
              <del>   
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)
            <br />
              color:Celadon Marble

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'ornge'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url7}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>     
             {/* image---------------------------------------------------------------------------------------------------8*/}
 <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img8} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'ornge'}}>
              <Typography gutterBottom  component="div" >
              -5% ₹19,999
              <br />
              M.R.P :
              <del>   ₹20,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE4 Lite 5G (Ultra Orange, 8GB RAM, 128GB Storage)
            <br />
             

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'ornge'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url8}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            <br />  
             {/* image---------------------------------------------------------------------------------------------------9*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="350"
              width='500px'
              
              image={img9} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'ornge'}}>
              <Typography gutterBottom  component="div" >
              ₹32,999
              <br />
              M.R.P :
              <del>   ₹40,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord 4 5G (Mercurial Silver, 8GB RAM, 256GB Storage)
            <br />
             

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'ornge'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url9}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 

    
              





              {/* 2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}
                      {/* image---------------------------------------------------------------------------------------------------1 */}
                      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img1} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -4%  ₹19,999
              <br />
              M.R.P : 
              <del>   ₹20,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE4 Lite 5G
8 GB RAM + 128 GB Storage
            <br />
              color:Mega Blue

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url1}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------------------------2*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img2} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -16%  ₹69,999
              <br />
              M.R.P : 
              <del>   ₹78,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus 12
16 GB RAM + 512 GB Storage
            <br />
              color:Flowy Emerald

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url2}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------------------------3*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img3} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -6%  ₹1,39,999
              <br />
              M.R.P : 
              <del>   ₹1,49,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Open
16 GB RAM + 512 GB Storage
            <br />
              color:Emerald Dusk

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url3}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
                         {/* image---------------------------------------------------------------------------------------------------4*/}
                         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img4} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -6%  ₹1,39,999
              <br />
              M.R.P : 
              <del>   ₹1,49,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Open
16 GB RAM + 512 GB Storage
            <br />
              color:Emerald Dusk

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url4}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            <br />
            {/* image---------------------------------------------------------------------------------------------------5*/}
                                     <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img5} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -4%  ₹29,999
              <br />
              M.R.P : 
              <del>   ₹35,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord 4
              8 GB RAM + 128 GB Storage
            <br />
              color:Obsidian Midnight

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url5}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            {/* image---------------------------------------------------------------------------------------------------6*/}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img6} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -4%  M.R.P :  ₹24,999
              <br />
              
              <del>   
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE4
              8 GB RAM + 128 GB Storage
            <br />
              color:Celadon Marble

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url6}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>        

 {/* image---------------------------------------------------------------------------------------------------7*/}
 <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img7} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'ornge'}}>
              <Typography gutterBottom  component="div" >
              -4%  M.R.P :  ₹24,999
              <br />
              
              <del>   
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)
            <br />
              color:Celadon Marble

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'ornge'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url7}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>     
             {/* image---------------------------------------------------------------------------------------------------8*/}
 <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img8} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'ornge'}}>
              <Typography gutterBottom  component="div" >
              -5% ₹19,999
              <br />
              M.R.P :
              <del>   ₹20,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE4 Lite 5G (Ultra Orange, 8GB RAM, 128GB Storage)
            <br />
             

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'ornge'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url8}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            <br />  
             {/* image---------------------------------------------------------------------------------------------------9*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="350"
              width='500px'
              
              image={img9} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'ornge'}}>
              <Typography gutterBottom  component="div" >
              ₹32,999
              <br />
              M.R.P :
              <del>   ₹40,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord 4 5G (Mercurial Silver, 8GB RAM, 256GB Storage)
            <br />
             

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'ornge'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url9}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 

            {/* image---------------------------------------------------------------------------------------------------1 */}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img1} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -4%  ₹19,999
              <br />
              M.R.P : 
              <del>   ₹20,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE4 Lite 5G
8 GB RAM + 128 GB Storage
            <br />
              color:Mega Blue

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url1}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------------------------2*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img2} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -16%  ₹69,999
              <br />
              M.R.P : 
              <del>   ₹78,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus 12
16 GB RAM + 512 GB Storage
            <br />
              color:Flowy Emerald

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url2}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------------------------3*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img3} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -6%  ₹1,39,999
              <br />
              M.R.P : 
              <del>   ₹1,49,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Open
16 GB RAM + 512 GB Storage
            <br />
              color:Emerald Dusk

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url3}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
                         {/* image---------------------------------------------------------------------------------------------------4*/}
                         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img4} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -6%  ₹1,39,999
              <br />
              M.R.P : 
              <del>   ₹1,49,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Open
16 GB RAM + 512 GB Storage
            <br />
              color:Emerald Dusk

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url4}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            <br />
            {/* image---------------------------------------------------------------------------------------------------5*/}
                                     <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img5} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -4%  ₹29,999
              <br />
              M.R.P : 
              <del>   ₹35,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord 4
              8 GB RAM + 128 GB Storage
            <br />
              color:Obsidian Midnight

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url5}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            {/* image---------------------------------------------------------------------------------------------------6*/}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img6} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'white'}}>
              <Typography gutterBottom  component="div" >
              -4%  M.R.P :  ₹24,999
              <br />
              
              <del>   
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE4
              8 GB RAM + 128 GB Storage
            <br />
              color:Celadon Marble

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'white'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url6}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>        

 {/* image---------------------------------------------------------------------------------------------------7*/}
 <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img7} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'ornge'}}>
              <Typography gutterBottom  component="div" >
              -4%  M.R.P :  ₹24,999
              <br />
              
              <del>   
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)
            <br />
              color:Celadon Marble

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'ornge'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url7}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>     
             {/* image---------------------------------------------------------------------------------------------------8*/}
 <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img8} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'ornge'}}>
              <Typography gutterBottom  component="div" >
              -5% ₹19,999
              <br />
              M.R.P :
              <del>   ₹20,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord CE4 Lite 5G (Ultra Orange, 8GB RAM, 128GB Storage)
            <br />
             

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'ornge'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url8}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
            <br />  
             {/* image---------------------------------------------------------------------------------------------------9*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="350"
              width='500px'
              
              image={img9} // Use imported image reference
           
            />  
            <CardContent style={{backgroundColor:'ornge'}}>
              <Typography gutterBottom  component="div" >
              ₹32,999
              <br />
              M.R.P :
              <del>   ₹40,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OnePlus Nord 4 5G (Mercurial Silver, 8GB RAM, 256GB Storage)
            <br />
             

</Typography>
            </CardContent >
            <CardActions style={{backgroundColor:'ornge'}}>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url9}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 

    
            </Grid>
            </>
   );
}
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Carosal } from "./Carosal"


import img2 from "../static/2.webp"
import img3 from '../static/2.jpg'
import img4 from "../static/4.jpg"
import img5 from '../static/5.jpg'
import img6 from "../static/6.jpg"
import img7 from "./images/1.webp"
import img8 from "./images/2.png"
import img9 from "./images/3.webp"
import img10 from "./images/4.webp"



import { Link } from "react-router-dom";



const url='https://web.whatsapp.com/'
const url1='https://www.amazon.in/Lenovo-IdeaPad-i7-13620H-38-1cm-83EM008GIN/dp/B0D6NCVQZQ/ref=sr_1_13?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.yBLtX5CW_7yJp0ypl9Iztx-5MHiq8_ssLZeAwFgl4HrAoGOSUZqr1RxARmjavlQUf_F5vbiMUCMcJ37H9mpWeL22Cnax4JhjTtDFmQhhDKyDx9Yd22PANhaLlyGHlY0SYKYRa1Aa6FpBAVz-d8FSaXDjC09YK34kTta1vpcbD_hhXiKpb-lHQfYwnsFi9IrsvK5KLr6hkFAcDgbbdDWaFazhk4zogT_vdoZnIakQyBE.zu7kKwgrOp1uvkkLHonPHqsIDD2hBKyKab7G82bH_S0&dib_tag=se&keywords=laptop&qid=1724606087&sprefix=lap%2Caps%2C254&sr=8-13&th=1'
const url2='https://www.amazon.in/Lenovo-IdeaPad-i7-13620H-38-1cm-83EM008GIN/dp/B0D6NCVQZQ/ref=sr_1_13?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.yBLtX5CW_7yJp0ypl9Iztx-5MHiq8_ssLZeAwFgl4HrAoGOSUZqr1RxARmjavlQUf_F5vbiMUCMcJ37H9mpWeL22Cnax4JhjTtDFmQhhDKyDx9Yd22PANhaLlyGHlY0SYKYRa1Aa6FpBAVz-d8FSaXDjC09YK34kTta1vpcbD_hhXiKpb-lHQfYwnsFi9IrsvK5KLr6hkFAcDgbbdDWaFazhk4zogT_vdoZnIakQyBE.zu7kKwgrOp1uvkkLHonPHqsIDD2hBKyKab7G82bH_S0&dib_tag=se&keywords=laptop&qid=1724606087&sprefix=lap%2Caps%2C254&sr=8-13'
const url3='https://www.amazon.in/HP-Pavilion-x360-multitouch-Enabled-14-ek1020TU/dp/B0CBBRTSCZ/ref=asc_df_B0CBBRTSCZ/?tag=googleshopdes-21&linkCode=df0&hvadid=666281859354&hvpos=&hvnetw=g&hvrand=6940220848635151319&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9148183&hvtargid=pla-2206519415663&psc=1&mcid=0e347da2a6cf33bfab0ead7b0f725f40'
const url4='https://www.amazon.in/Lenovo-IdeaPad-WUXGA-OLED-GamePass-83DA003GIN/dp/B0CYGZSBRV/ref=pd_ci_mcx_pspc_dp_d_2_i_2?pd_rd_w=kYwgG&content-id=amzn1.sym.c951cdb5-f0e8-4efb-abcb-595e3ce751f9&pf_rd_p=c951cdb5-f0e8-4efb-abcb-595e3ce751f9&pf_rd_r=0WNHC51XQCP3PAKHZ2R6&pd_rd_wg=fCFhY&pd_rd_r=65b6f56f-8326-47f8-9d57-c73b4970317d&pd_rd_i=B0CYGZSBRV&th=1'
const url5='https://www.amazon.in/Dell-Smartchoice-i3-1215U-Processor-Spill-Resistant/dp/B0BQJ68HHC/ref=sr_1_14?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.yBLtX5CW_7yJp0ypl9Iztx-5MHiq8_ssLZeAwFgl4HrAoGOSUZqr1RxARmjavlQUf_F5vbiMUCMcJ37H9mpWeL22Cnax4JhjTtDFmQhhDKyDx9Yd22PANhaLlyGHlY0SYKYRa1Aa6FpBAVz-d8FSaXDjC09YK34kTta1vpcbD_hhXiKpb-lHQfYwnsFi9IrsvK5KLr6hkFAcDgbbdDWaFazhk4zogT_vdoZnIakQyBE.zu7kKwgrOp1uvkkLHonPHqsIDD2hBKyKab7G82bH_S0&dib_tag=se&keywords=laptop&qid=1724606087&sprefix=lap%2Caps%2C254&sr=8-14&th=1'
const url6='https://www.oneplus.in/oneplus-12r?sku=5011105224'
const url7='https://www.oneplus.in/oneplus-12?sku=5011105273'
const url8='https://www.oneplus.in/oneplus-open?sku=5011103224'
const url9='https://www.oneplus.in/oneplus-nord-ce4-lite-5g?sku=5011110200'
const url10='https://www.oneplus.in/oneplus-nord-4?sku=5011110280'
export const Home=()=>{
  return<>

  <Carosal/>
 
<Grid
  container
  direction="column"
  justifyContent="space-evenly"
  alignItems="flex-start"
>
<br />
<Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'90px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img2} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -21.54% off ₹70,990.00
          <br />
          M.R.P : 
          <del>   ₹90,480.00
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Pavilion x360, 13th Gen Intel Core i7-1355U, 14-inch (35.6 cm), FHD, Touchscreen, 16GB DDR4, 512GB SSD, FPR, 5 MP camera, Backlit KB, Audio by B&O, Pen (Win 11, MSO 2021, Gold, 1.51 kg), ek1020TU
          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url3}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image-----------------------------------------------------------------------------------------------------2 */}
      
    
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img3} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -27% ₹61,990
          <br />
          
          M.R.P : 
          <del>  ₹85,390
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lenovo IdeaPad Slim 3 13th Gen Intel Core i7-13620H 15" (38.1cm) FHD IPS 300 Nits Thin & Light Laptop (16GB/512GB SSD/Win 11/MSO 21/1Yr ADP Free/Alexa Built-in/3 mon Game Pass/Grey/1.6Kg), 83EM008GIN</Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url2}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
      </Card>
   
      {/* image-------------------------------------------------------------------------------------------------3 */}
      
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img4} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -15% ₹88,800

          <br />
          
          M.R.P : 
          <del>  ₹1,04,048
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Pavilion x360, 13th Gen Intel Core i7-1355U, 14-inch (35.6 cm), FHD, Touchscreen, 16GB DDR4, 512GB SSD, FPR, 5 MP camera, Backlit KB, Audio by B&O, Pen (Win 11, MSO 2021, Gold, 1.51 kg), ek1020TU</Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url1}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
      </Card>

        {/* image ------------------------------------------------------------------------------------------------------------4 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img5} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -20% ₹81,490
          <br />
          M.R.P : 
          <del>   ₹1,02,090
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lenovo IdeaPad Slim 5 Intel Core Ultra 5 125H Built-in AI 14" (35.5cm) WUXGA-OLED 400Nits Thin & Light Laptop (16GB/1TB SSD/Win 11/Office 21/FHD+IR Camera/Alexa/3 Mon GamePass/Grey/1.4Kg), 83DA003GIN
          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url4}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
  
        {/* image------------------------------------------------------------------------------------------5 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img6} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -25% ₹35,990
          <br />
          M.R.P : 
          <del>  ₹47,876
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dell [Smartchoice] 15 Thin & Light Laptop, 12th Gen Intel Core i3-1215U Processor/8GB/512GB SSD/Intel UHD Graphics/15.6"(39.62cm) FHD/Windows 11 + MSO'21/15 Month McAfee/Spill-Resistant KB/Grey/1.48kg          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url5}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
{/* mobile-------------------------------********************************************************----------------------------mobile */}
   {/* image---------------------------------------------------------------------------------------------------1 */}
   <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img6} // Use imported image reference
           
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
              <Link to ={url6}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to SAMSUNG.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------------------------2*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img7} // Use imported image reference
           
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
              <Link to ={url7}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------------------------3*/}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img8} // Use imported image reference
           
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
              <Link to ={url8}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
                         {/* image---------------------------------------------------------------------------------------------------4*/}
                         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img9} // Use imported image reference
           
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
              <Link to ={url9}>
              
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
              
              image={img10} // Use imported image reference
           
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
              <Link to ={url10}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to 1+.com!')}>More</Button></Link>
              
            </CardActions>
            </Card> 
</Grid>

  </>
  
}
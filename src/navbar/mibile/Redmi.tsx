import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import img1 from "./images/1.jpg"// Adjust the path as necessary
import img2 from "./images/2.jpg"
import img3 from "./images/3.webp"
import img4 from "./images/4.webp"
import img5 from "./images/5.webp"
import img6 from "./images/6.webp"
import img7 from "./images/7.webp"
import img8 from "./images/8.webp"
import  img9 from "./images/9.webp"
import img10 from "./images/10.webp" 
import img11 from "./images/11.webp"
import img12 from "./images/12.webp"




import { url } from "inspector";
import { Link } from "react-router-dom";

export const Redmi = () => {
    
    const url='https://wa.me/?text=${message}'
    const url1='https://www.amazon.in/Stardust-Storage-Powered-Mediatek-Display/dp/B0CMTTRN8M/ref=sr_1_6?crid=88A16IOCEEML&dib=eyJ2IjoiMSJ9.0LnKyCxtd5G1hdwYnt5aSq9fTW6gO6OA6Ktt649Fx46cYanzEFFn3SFDpB9jw42DZePCBSglQXFuEAKgB8G0eaJrtvyK0DAdJRX7Wp9XalXJ_8pwABElaUNnRDWrLQp4-mHxrzy-qVaWfBSA-u_i9njGT3kHQUiKKh1Zp6VzOT_kJbeiL_ur44dS5IAypGlXb5pBJy4RHzRm_SAJpSUz2SnmVivWkoG_hQfcuiWsY90._ZpPlzIns5V4U0C-n9Hq3UgV27yU_tNftKahKBGqSz4&dib_tag=se&keywords=redmi&qid=1724648114&sprefix=redmi%2Caps%2C317&sr=8-6&th=1'
    const url2='https://www.amazon.in/Redmi-Note-Cosmic-Purple-Storage/dp/B07X3P1N2V/ref=sr_1_2?crid=1Z879M8IFIISZ&dib=eyJ2IjoiMSJ9.2u2QImh5pzl9rcqOWBe1JcSMsDuiR6E_rNv8kcXSXNHJKbsneG6TcGz_5SZpcQUGWAhHUv6zMhmxXAVSbrNQGce2M_LYO5GP5OIrHC3dOdMKs3J8p0ZzDENN892gv9SLWeYStyaq3bAYMAL3VYM75j2cS2IKqYWfCG3zpJfGiHHjhxELRMc4xI9VkNLHj3w-WIc9Yp4tKZ2V3yhJYc0mAZgEkLi4g7cnQMx2D3a4JV4.011N96RWwC2j55wqAidOxpAQqD58-5p5bKeZq2AGnLI&dib_tag=se&keywords=redmi+note+8&qid=1724649521&sprefix=redmi+note+8%2Caps%2C257&sr=8-2'
    const url3='https://www.amazon.in/Redmi-Storage-Bezel-Less-Slimmest-Pro-Grade/dp/B0CQP38JRG/ref=sr_1_13?crid=88A16IOCEEML&dib=eyJ2IjoiMSJ9.d_24loqvHazEdxgnuYpyjavWk9RTcdbEdChkR3mzP2KuIGROHK77rXTcUhGyxgfr1SxCigFi6DJyJAaaqiVAshwVL6YtfNwYBMzJo7dwKEybCphpf7bfIhNlEjn-2zoYpVmMofP_Eqm-wki4VKF_t_OhgnphwmZp37nZy7BYm72h35jQGEwJHoGuUFV41EylaZBJED6oUq65ebhxYsOLVdB5y7sXbnIEc1bGlY0fEx8QJC6OPSz5K37AKd4oIKEtXVqZ-8iH3JiymzHaRqEPzKWRVF9opAE28G3WacmpLhM.02jb4pYoP-xKe2eYZtdQY0OjkF5ASV2TxzaRdqVOMqQ&dib_tag=se&keywords=redmi&qid=1724649287&refinements=p_n_feature_thirty_browse-bin%3A44897287031%2Cp_123%3A339703&rnid=91049095031&s=electronics&sprefix=redmi%2Caps%2C317&sr=1-13&th=1'
   const url4='https://www.amazon.in/Renewed-Redmi-Note-Green-Storage/dp/B08X7FKNLN/ref=sr_1_2?crid=3LJBVA0S8OGHR&dib=eyJ2IjoiMSJ9.N2_1ufj3Ixe52saxWPH-XoyKkvhSzykrcVer-AsfczCzM1WjimvUP87xNqNynx7xlxOil--SGwcSAkp_HuxSpqh6v_aXTamiWnu3ZuoG8rIhiCZ4wwSvdgaCCjDqdTP2gYjwEgeChhJvC7mHHpMTStc5gCgILfL0OLlTIXl08HxQCRRg3h6lDa_oie_qwxNX2svoXi1wWWabKmnWhkIYKaZDq4RUo09vJlke20jkE1M.nd01t7A09oKNmXVyF2SL8-Yu-uLmaf_B8PSOX12aB7c&dib_tag=se&keywords=redmi+note+9&qid=1724649641&sprefix=redmi+note+9%2Caps%2C386&sr=8-2'
   const url5='https://www.mi.com/in/product/xiaomi-14-ultra/'
   const url6='https://www.mi.com/in/product/xiaomi-14/'
   const url7='https://www.mi.com/in/product/xiaomi-14-civi/' 
   const url8='https://www.mi.com/in/product/redmi-note-13-pro-plus-5g/'  
   const url9='https://www.mi.com/in/product/xiaomi-14-civi-limited-edition/'
   const url10='https://www.mi.com/in/mi-11x-pro/'
   const url11='https://www.mi.com/in/product/redmi-a2/'
   const url12='https://www.mi.com/in/product/redmi-pad-pro-5g/'
   
   return (
    <>
   
          
          <br />
          <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{display:'flex',alignItems:'center'}}
    >
        {/* image---------------------------------------------------------------------------------------------------1 */}
                                <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img5} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹99,999
              <br />
              M.R.P : 
              <del>   ₹1,19,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Xiaomi 14 Ultra (Black, 16GB RAM, 512GB Storage) | 50 MP Leica Quad Camera | 2K 120 Hz LTPO AMOLED | Flagship Snapdragon 8 Gen 3 | 90 W Hypercharge</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url5}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* IMAGE-------------------------------------------------------------------------------------------------------2 */}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="320"
              
              image={img6} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -12%  ₹69,999
              <br />
              M.R.P : 
              <del>   ₹79,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Xiaomi 14 (Black, 12GB RAM, 512GB Storage) | 50MP Leica Professional Optics | 120 Hz 1.5K LTPO AMOLED | SD 8 Gen 3 Hyper OS  </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url6}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image-------------------------------------------------------------------------------------------------3 */}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img8} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -13%  ₹29,499
              <br />
              M.R.P : 
              <del>   ₹33,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi Note 13 Pro+ (Fusion Purple, 12GB RAM, 256GB Storage) | World's first Mediatek 7200 Ultra 5G | 200MP Hi-Res Camera | 1.5K Curved AMOLED | 120W HyperCharge</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url8}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* </Card>image ----------------------------------------------------------------------------------------------4 */}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="330"
              
              image={img7} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -12%  ₹42,999
              <br />
              M.R.P : 
              <del>   ₹54,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Xiaomi 14 CIVI (Cruise Blue, 8GB RAM, 256GB Storage) </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url7}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
            {/* image---------------------------------------------------------------------------------5 */}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="330"
              
              image={img9} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -18%  ₹48,999
              <br />
              M.R.P : 
              <del>   ₹59,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Xiaomi 14 Civi Limited Edition</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url9}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------6 */}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="330"
              
              image={img10} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -45%  ₹27,999
              <br />
              M.R.P : 
              <del>   ₹49,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Mi 11X Pro

CUT ABOVE THE BEST

120Hz E4 AMOLED Display

Qualcomm® Snapdragon™ 888

108MP HM2 Primary Camera</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url10}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image--------------------------------------------------------------------------------------7 */}
          <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img11} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -25% ₹6,499
              <br />
              M.R.P : 
              <del>   ₹10,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi A2 (Aqua Blue, 4GB RAM, 64GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large 16.5 cm HD+ Display with Massive 5000mAh Battery | 2 Years Warranty [Limited time Offer]     </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url11}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image--------------------------------------------------------------------------------------------------8 */}
       
          <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'-20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img12} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -10% ₹24,999
              <br />
              M.R.P : 
              <del>   ₹27,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi Pad Pro 5G |Snapdragon 7s Gen 2|30.7cm(12.1") Tablet|33+ Days Standby| 10000mAh|HyperOS|8GB, 128GB|Quad Speakers |Wi-Fi 6 + 5G |Quick Silver         </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url12}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
        {/* image--------------------------------------------------------------------------------------13 */}
          <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img1} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -36% ₹7,699
              <br />
              M.R.P : 
              <del>   ₹11,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) | Powered by 4G Mediatek Helio G85 | 90Hz Display | 50MP AI Triple Camera              </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url1}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            
            {/* image--------------------------------------------------------------------------------------14 */}
          <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img3} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -19% ₹16,999
              <br />
              M.R.P : 
              <del>   ₹20,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) | Powered by 4G Mediatek Helio G85 | 90Hz Display | 50MP AI Triple Camera              </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url3}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image------------------------------------------------------------------------------------------15 */}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img2} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -27% ₹10,999
              <br />
              M.R.P : 
              <del>   ₹14,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi Note 8 (Cosmic Purple, 4GB RAM, 64GB Storage) | Snapdragon 665 Processor | 48 MP Quad CameraVisit the Xiaomi Store             </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url2}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
                        {/* image------------------------------------------------------------------------------------------16 */}
                        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img4} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -28%  ₹7,899
              <br />
              M.R.P : 
              <del>   ₹10,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi Note 9 (Aqua Green, 4GB RAM, 128GB Storage) - 48MP Quad Camera & Full HD+ Display           </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url4}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
            
        {/* image---------------------------------------------------------------------------------------------------1 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img5} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -16%  ₹99,999
              <br />
              M.R.P : 
              <del>   ₹1,19,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Xiaomi 14 Ultra (Black, 16GB RAM, 512GB Storage) | 50 MP Leica Quad Camera | 2K 120 Hz LTPO AMOLED | Flagship Snapdragon 8 Gen 3 | 90 W Hypercharge</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url5}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* IMAGE-------------------------------------------------------------------------------------------------------2 */}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="320"
              
              image={img6} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -12%  ₹69,999
              <br />
              M.R.P : 
              <del>   ₹79,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Xiaomi 14 (Black, 12GB RAM, 512GB Storage) | 50MP Leica Professional Optics | 120 Hz 1.5K LTPO AMOLED | SD 8 Gen 3 Hyper OS  </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url6}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image-------------------------------------------------------------------------------------------------3 */}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img8} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -13%  ₹29,499
              <br />
              M.R.P : 
              <del>   ₹33,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi Note 13 Pro+ (Fusion Purple, 12GB RAM, 256GB Storage) | World's first Mediatek 7200 Ultra 5G | 200MP Hi-Res Camera | 1.5K Curved AMOLED | 120W HyperCharge</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url8}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* </Card>image ----------------------------------------------------------------------------------------------4 */}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="330"
              
              image={img7} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -12%  ₹42,999
              <br />
              M.R.P : 
              <del>   ₹54,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Xiaomi 14 CIVI (Cruise Blue, 8GB RAM, 256GB Storage) </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url7}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
            {/* image---------------------------------------------------------------------------------5 */}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="330"
              
              image={img9} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -18%  ₹48,999
              <br />
              M.R.P : 
              <del>   ₹59,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Xiaomi 14 Civi Limited Edition</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url9}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
             {/* image---------------------------------------------------------------------------------6 */}
             <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="330"
              
              image={img10} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -45%  ₹27,999
              <br />
              M.R.P : 
              <del>   ₹49,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Mi 11X Pro

CUT ABOVE THE BEST

120Hz E4 AMOLED Display

Qualcomm® Snapdragon™ 888

108MP HM2 Primary Camera</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url10}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to XIAOMI.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image--------------------------------------------------------------------------------------7 */}
          <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img11} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -25% ₹6,499
              <br />
              M.R.P : 
              <del>   ₹10,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi A2 (Aqua Blue, 4GB RAM, 64GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large 16.5 cm HD+ Display with Massive 5000mAh Battery | 2 Years Warranty [Limited time Offer]     </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url11}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image--------------------------------------------------------------------------------------------------8 */}
       
          <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'-20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img12} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -10% ₹24,999
              <br />
              M.R.P : 
              <del>   ₹27,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi Pad Pro 5G |Snapdragon 7s Gen 2|30.7cm(12.1") Tablet|33+ Days Standby| 10000mAh|HyperOS|8GB, 128GB|Quad Speakers |Wi-Fi 6 + 5G |Quick Silver         </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url12}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
        {/* image--------------------------------------------------------------------------------------13 */}
          <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img1} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -36% ₹7,699
              <br />
              M.R.P : 
              <del>   ₹11,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) | Powered by 4G Mediatek Helio G85 | 90Hz Display | 50MP AI Triple Camera              </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url1}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            
            {/* image--------------------------------------------------------------------------------------14 */}
          <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img3} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -19% ₹16,999
              <br />
              M.R.P : 
              <del>   ₹20,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) | Powered by 4G Mediatek Helio G85 | 90Hz Display | 50MP AI Triple Camera              </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url3}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image------------------------------------------------------------------------------------------15 */}
            <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img2} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -27% ₹10,999
              <br />
              M.R.P : 
              <del>   ₹14,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi Note 8 (Cosmic Purple, 4GB RAM, 64GB Storage) | Snapdragon 665 Processor | 48 MP Quad CameraVisit the Xiaomi Store             </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url2}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
                        {/* image------------------------------------------------------------------------------------------16 */}
                        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img4} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -28%  ₹7,899
              <br />
              M.R.P : 
              <del>   ₹10,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Redmi Note 9 (Aqua Green, 4GB RAM, 128GB Storage) - 48MP Quad Camera & Full HD+ Display           </Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ={url4}>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to Amezon.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
        </Grid>
        </>
        );
    };
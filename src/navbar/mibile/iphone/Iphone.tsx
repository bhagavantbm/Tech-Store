import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.webp"
import img4 from "./images/4.webp"
import img5 from "./images/5.webp"
import img6 from "./images/6.webp"
import img7 from "./images/7.webp"
import img8 from "./images/8.webp"

const url='https://wa.me/?text=${message}'
export const Iphone=()=>{
   
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
                                <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginLeft:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img1} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -9%  ₹1,44,999
              <br />
              M.R.P : 
              <del>   ₹1,59,999
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Apple iPhone 15 Pro Max (256 GB) - Natural Titanium
</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ='https://www.apple.com/iphone-15-pro/'>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to i-phone.com!')}>More</Button></Link>
              
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
              -11%  ₹71,290
              <br />
              M.R.P : 
              <del>   ₹79,900
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Apple iPhone 15 (128 GB) - Pink

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ='https://www.apple.com/iphone-15/'>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to i-phone.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
                    {/* image---------------------------------------------------------------------------------------------------3 */}
                    <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img4} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -9%  ₹1,44,900
              <br />
              M.R.P : 
              <del>   ₹1,59,900
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Apple iPhone 15 Pro Max (256 GB) - Natural Titanium

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ='https://www.amazon.in/Apple-iPhone-Pro-256GB-Silver/dp/B0BDJHC1VV/ref=sr_1_1_sspa?crid=27TTKZG0741HO&dib=eyJ2IjoiMSJ9.BH6DDuFufjPmcFMvSHia_As2GPV4zny_sRklUkgBR2GQaoF9znVwZCV-L4V8XJrbx6FWSKA5MlJVF3UMon8XFBybHsHT2D7c4rQMODq50eRgdt_il3GWGXqgvStlK90jWpVlxwJX6FJyHwE0JVWBh-_jYzw6kaKjpJ7wzSrSNZHinCQxQeDIKhQoSeMpxgyAUv5UgCTsASxGbLrNiRyS3RClUGXfOggi4vP-0WTlxpA.MrtX11W8SRj0oWDa2pQ7evu9-eKseijNi_jqgSrDs5k&dib_tag=se&keywords=iphone+14+pro+max&qid=1724777126&sprefix=iphone+14+pro+max%2Caps%2C6998&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to i-phone.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            {/* image---------------------------------------------------------------------------------------------------4 */}
                    <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img3} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -0%  ₹1,29,290
              <br />
              M.R.P : 
              <del>   ₹1,29,900
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Apple iPhone 14 Pro (128 GB) - Gold

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ='https://www.amazon.in/Apple-iPhone-Pro-128GB-Gold/dp/B0BDJBGBF3/ref=sr_1_1_sspa?crid=390MNIKRFHLX5&dib=eyJ2IjoiMSJ9.asFEJdWnI1k7n6COFTtaf5W66_CbmvYa6rtV5-kn_oCXZo4gdfr6NOw3hpFrfQbypChhZzzHceOQiIHsT_7O0igbJpE9o7tr9IPSlp--C-UM9gg-vugoGzdyaV2JhdEr-daOH-IzIBccYZ52YBCu5DQ4RtFfYPrFf-LIwgRLnAm6AIgQXMYTrqiDIO9cZX_5G0qQti1ZIZ4rP_LsAmntyCiZDxiJW7G7dmGJSMV5PoA.6c3ycmCwjmg3jPj5D7f92f35OSe4cV3zgn0ZHGyLqxY&dib_tag=se&keywords=iphone+14+pro&qid=1724776822&sprefix=iphone+14%2Caps%2C288&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>
              
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to i-phone.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
        <br /> 
  {/* image---------------------------------------------------------------------------------------------------5 */}
  <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'30px',marginLeft:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img5} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -10%  ₹62,600
              <br />
              M.R.P : 
              <del>   ₹69,900
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Apple iPhone 14 (128 GB) - Purple

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              <Link to ='https://www.amazon.in/Apple-iPhone-14-128GB-Purple/dp/B0BDJ213TX/ref=sr_1_1_sspa?crid=3JQJ23A1D7C2G&dib=eyJ2IjoiMSJ9.m0OKDUXl1xDZZkfshTMyWOi_17PjCzyboKgBS8FVJFxINhjsHLi0srjS8CUgYCmgCPZouCKkNQEUbjQCquyKc63iXxcYlSZWdGx_m5xc3Yt8BjChvE5QytvmDqoN0nNyxI826Ha64zCGPSWMJnCcPCnqtgL0t5XGUziVxMBnggaUDaxVvA8bLVyUTttnwNHUDbxuubpe07I3fhFW2QefbiEozEjYAADCqYfjww8vUCk.qcHthpPzp71hYtIIbK1rJV_Omyj7gr_50E8cyfIXqcU&dib_tag=se&keywords=iphone+14&qid=1724777722&sprefix=iphone+14+%2Caps%2C339&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to i-phone.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>

  {/* image---------------------------------------------------------------------------------------------------6 */}
  <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img6} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
              -13%  ₹51,999
              <br />
              M.R.P : 
              <del>   ₹59,900
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Apple iPhone 13 (128GB) - Pink

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              
              <Link to ='https://www.amazon.in/Apple-iPhone-13-128GB-Pink/dp/B09G9FPGTN/ref=sr_1_1_sspa?crid=FQL82JH3KY6N&dib=eyJ2IjoiMSJ9.OCoJgZ8ghdguKvc7Ozmt3OyY3JIh2zh_9fXQPStOsFwpTzwddd1UzpesJ4Mv-O8QW1EVH-ptseMuAqV58yUxhrL6f_iSObQ3NnQT79RAkLF3XELn_lmJ7tvKPl55mxdcffR6aMh5zCEmaBrl87kf9RGvtGg0qcG14nhw-8I74R9ZAgduQVeDZPDcw0D1C3zFZjGINRulV_07pNG9Nm1YI3TRLX0JjeJGQWF1mSUuCyY.hTF0g6rdoPbQcNVrH3hzaw3OkuMCtx6bsXrydLUgIhg&dib_tag=se&keywords=iphone+13+pro&qid=1724777910&sprefix=iphone+13+pro+%2Caps%2C259&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to i-phone.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>

  {/* image---------------------------------------------------------------------------------------------------7 */}
  <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img7} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
               ₹54,899
              <br />
              M.R.P : 
              <del>   ₹54,900
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Apple iPhone 12 (128GB) - White

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              
              <Link to ='https://www.amazon.in/New-Apple-iPhone-12-128GB/dp/B08L5S1NT7/ref=sr_1_4?crid=24ZRYYYV34OSM&dib=eyJ2IjoiMSJ9.6LjbcVUdGJ8Gdj_KSlITtMLG10QPEc_WWSXXHQ1TaWzazLGvApcuMTPjxecZM_uU4BjXshjMoT2Mci1jvMjnAcGomZh0MrVPaFNy7yV9PMm60QBx9sQYhzeR6uEWjyjoqWAtAxmg1hXLs66ZmXrmtb2xpGtoCsnrI3hyk3N6D8LzVhSnujMKgEfSL7ZfGh7sF54VBXwRsnG_B1PBXv-RFJYEut_AxkG8roQ-UPmDTBk.gxM6m642XdAAze10TOqCE5h-6jheMveckYbvkIJiAW4&dib_tag=se&keywords=iphone+12&qid=1724778044&sprefix=iphone+12+%2Caps%2C264&sr=8-4'>
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to i-phone.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>

  {/* image---------------------------------------------------------------------------------------------------7 */}
  <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'30px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              
              image={img8} // Use imported image reference
           
            />  
            <CardContent>
              <Typography gutterBottom  component="div">
               ₹48,899
              <br />
              M.R.P : 
              <del>   ₹48,900
              </del>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Apple iPhone 11 (128GB) - Purple

</Typography>
            </CardContent>
            <CardActions>
                <Link to ={url}>
              <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
              <Link to ='/Mycart'>
              <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
              
              <Link to ='https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8CXFZ1/ref=sr_1_1_sspa?crid=122FY8GZI45AC&dib=eyJ2IjoiMSJ9.O7h768Ju-SZ52InUAfFnLsmDX8X3ymAWL0ehze-39skJrQ17HskNFXrgDJz7f6HLh2kXPvK7kAYyTP-5-ncnsZTO7cobjhSFmrVx2jmBF6eYBsDrnRuvuHi7KofjXt_Qjr3Fku2XVekT6qegCgb_WF9xykr32FcYkPiHTRAhVt6jL1kk9Z8zYUwAuIqqOTr3mk5yynZVfPuaV1HjlMeHYfibGh_0HaTIN3Mjv_la0Xc.K0uJmhpm9U-wd1ikrCYqq6oukU7hZsn_XdBpOwVRYNQ&dib_tag=se&keywords=iphone+11&qid=1724778213&sprefix=iphone+11%2Caps%2C287&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>
              <Button size="small" style={{ marginTop: '-20px' }} onClick={() => window.alert('Are you sure,It will take to i-phone.com!')}>More</Button></Link>
              
            </CardActions>
            </Card>
            <br />
    </Grid>
    </>
    );
}
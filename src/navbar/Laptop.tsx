import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import img1 from "../static/0.png"; // Adjust the path as necessary
import img2 from "../static/2.webp"
import img3 from '../static/2.jpg'
import img4 from "../static/4.jpg"
import img5 from '../static/5.jpg'
import img6 from "../static/6.jpg"
import img7 from "../static/7.jpg"
import img8 from "../static/8.webp"
import img9 from "../static/9.webp"
import img10 from "../static/10.jpg"
import img11 from "../static/11.webp"
import imag12 from "../static/12.webp"
import img13 from "../static/13.webp"
import img14 from "../static/14.jpg" 
import img15 from "../static/15.webp"
import img16 from "../static/16.jpg"
import img17 from "../static/17.jpg"

import { url } from "inspector";
import { Link } from "react-router-dom";

export const Laptop = () => {
    const url='https://web.whatsapp.com/'
    const url1='https://www.amazon.in/Lenovo-IdeaPad-i7-13620H-38-1cm-83EM008GIN/dp/B0D6NCVQZQ/ref=sr_1_13?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.yBLtX5CW_7yJp0ypl9Iztx-5MHiq8_ssLZeAwFgl4HrAoGOSUZqr1RxARmjavlQUf_F5vbiMUCMcJ37H9mpWeL22Cnax4JhjTtDFmQhhDKyDx9Yd22PANhaLlyGHlY0SYKYRa1Aa6FpBAVz-d8FSaXDjC09YK34kTta1vpcbD_hhXiKpb-lHQfYwnsFi9IrsvK5KLr6hkFAcDgbbdDWaFazhk4zogT_vdoZnIakQyBE.zu7kKwgrOp1uvkkLHonPHqsIDD2hBKyKab7G82bH_S0&dib_tag=se&keywords=laptop&qid=1724606087&sprefix=lap%2Caps%2C254&sr=8-13&th=1'
    const url2='https://www.amazon.in/Lenovo-IdeaPad-i7-13620H-38-1cm-83EM008GIN/dp/B0D6NCVQZQ/ref=sr_1_13?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.yBLtX5CW_7yJp0ypl9Iztx-5MHiq8_ssLZeAwFgl4HrAoGOSUZqr1RxARmjavlQUf_F5vbiMUCMcJ37H9mpWeL22Cnax4JhjTtDFmQhhDKyDx9Yd22PANhaLlyGHlY0SYKYRa1Aa6FpBAVz-d8FSaXDjC09YK34kTta1vpcbD_hhXiKpb-lHQfYwnsFi9IrsvK5KLr6hkFAcDgbbdDWaFazhk4zogT_vdoZnIakQyBE.zu7kKwgrOp1uvkkLHonPHqsIDD2hBKyKab7G82bH_S0&dib_tag=se&keywords=laptop&qid=1724606087&sprefix=lap%2Caps%2C254&sr=8-13'
    const url3='https://www.amazon.in/HP-Pavilion-x360-multitouch-Enabled-14-ek1020TU/dp/B0CBBRTSCZ/ref=asc_df_B0CBBRTSCZ/?tag=googleshopdes-21&linkCode=df0&hvadid=666281859354&hvpos=&hvnetw=g&hvrand=6940220848635151319&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9148183&hvtargid=pla-2206519415663&psc=1&mcid=0e347da2a6cf33bfab0ead7b0f725f40'
    const url4='https://www.amazon.in/Lenovo-IdeaPad-WUXGA-OLED-GamePass-83DA003GIN/dp/B0CYGZSBRV/ref=pd_ci_mcx_pspc_dp_d_2_i_2?pd_rd_w=kYwgG&content-id=amzn1.sym.c951cdb5-f0e8-4efb-abcb-595e3ce751f9&pf_rd_p=c951cdb5-f0e8-4efb-abcb-595e3ce751f9&pf_rd_r=0WNHC51XQCP3PAKHZ2R6&pd_rd_wg=fCFhY&pd_rd_r=65b6f56f-8326-47f8-9d57-c73b4970317d&pd_rd_i=B0CYGZSBRV&th=1'
    const url5='https://www.amazon.in/Dell-Smartchoice-i3-1215U-Processor-Spill-Resistant/dp/B0BQJ68HHC/ref=sr_1_14?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.yBLtX5CW_7yJp0ypl9Iztx-5MHiq8_ssLZeAwFgl4HrAoGOSUZqr1RxARmjavlQUf_F5vbiMUCMcJ37H9mpWeL22Cnax4JhjTtDFmQhhDKyDx9Yd22PANhaLlyGHlY0SYKYRa1Aa6FpBAVz-d8FSaXDjC09YK34kTta1vpcbD_hhXiKpb-lHQfYwnsFi9IrsvK5KLr6hkFAcDgbbdDWaFazhk4zogT_vdoZnIakQyBE.zu7kKwgrOp1uvkkLHonPHqsIDD2hBKyKab7G82bH_S0&dib_tag=se&keywords=laptop&qid=1724606087&sprefix=lap%2Caps%2C254&sr=8-14&th=1'
    const url6='https://www.amazon.in/HP-15-6-inch-Anti-glare-Graphics-15s-eq2084AU/dp/B0CRDZVKNK/ref=sr_1_25?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.DbNSFi1Lrlxi3SE2hCkuyhn0YA3oKkn7pVodA_2INGxpcDnudDmQOBYJzjFJ_FGEDJryztPQZdFBS6uyw6F___x_g8O0-9Ze0bTgaZrlaBVkUz23yBgourB5Cg9Q18JZeKwxrgFYm0S6PpjH_57qFVdHt7MZ5P6oZ3Ldr1Em48vX_CMQIwxn-I707rOGdgay0p6rgAb8VGL1xbCHizY2BDSQ4_h6kmvFp4BgJcPYuvM.gyWowwm0BoY0v75DfYsvjc6-y0rvZi8RQMyQwh7p-jg&dib_tag=se&keywords=laptop&qid=1724607806&sprefix=lap%2Caps%2C254&sr=8-25'
    const url7='https://www.amazon.in/Dell-15-Processor-Antivirus-Spill-Resistant/dp/B0BQJ7WR2R/ref=sr_1_29?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.DbNSFi1Lrlxi3SE2hCkuyhn0YA3oKkn7pVodA_2INGxpcDnudDmQOBYJzjFJ_FGEDJryztPQZdFBS6uyw6F___x_g8O0-9Ze0bTgaZrlaBVkUz23yBgourB5Cg9Q18JZeKwxrgFYm0S6PpjH_57qFVdHt7MZ5P6oZ3Ldr1Em48vX_CMQIwxn-I707rOGdgay0p6rgAb8VGL1xbCHizY2BDSQ4_h6kmvFp4BgJcPYuvM.gyWowwm0BoY0v75DfYsvjc6-y0rvZi8RQMyQwh7p-jg&dib_tag=se&keywords=laptop&qid=1724607806&sprefix=lap%2Caps%2C254&sr=8-29'
    const url8='https://www.amazon.in/Lenovo-IdeaPad-39-62cm-300nits-82K20289IN/dp/B0CL5L59Z9/ref=sr_1_36?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.DbNSFi1Lrlxi3SE2hCkuyhn0YA3oKkn7pVodA_2INGxpcDnudDmQOBYJzjFJ_FGEDJryztPQZdFBS6uyw6F___x_g8O0-9Ze0bTgaZrlaBVkUz23yBgourB5Cg9Q18JZeKwxrgFYm0S6PpjH_57qFVdHt7MZ5P6oZ3Ldr1Em48vX_CMQIwxn-I707rOGdgay0p6rgAb8VGL1xbCHizY2BDSQ4_h6kmvFp4BgJcPYuvM.gyWowwm0BoY0v75DfYsvjc6-y0rvZi8RQMyQwh7p-jg&dib_tag=se&keywords=laptop&qid=1724607806&sprefix=lap%2Caps%2C254&sr=8-36'
    const url9='https://www.amazon.in/HP-Pavilion-Enhanced-Graphics-af0028TU/dp/B0D2685XZW/ref=pd_rhf_se_s_pd_sbs_rvi_d_sccl_2_5/257-1324143-1275927?pd_rd_w=9MRcZ&content-id=amzn1.sym.ed04a9b6-f1e8-467f-8e81-e050db1b5151&pf_rd_p=ed04a9b6-f1e8-467f-8e81-e050db1b5151&pf_rd_r=5AJR5M7GRT2F46QD7BJ1&pd_rd_wg=2hX6a&pd_rd_r=0936b717-7567-45ae-8f30-72b9b2686e21&pd_rd_i=B0D2685XZW&psc=1'
    const url10='https://www.amazon.in/dp/B0D4Z8WJY4/ref=sspa_dk_rhf_search_pt_sub_2/?_encoding=UTF8&ie=UTF8&psc=1&sp_csd=d2lkZ2V0TmFtZT1zcF9yaGZfc2VhcmNoX3BlcnNvbmFsaXplZA%3D%3D&pd_rd_w=jiwzm&content-id=amzn1.sym.dbda62b4-ed5d-4311-8123-0f4aa03e7535&pf_rd_p=dbda62b4-ed5d-4311-8123-0f4aa03e7535&pf_rd_r=G521KCRYR80XG716061P&pd_rd_wg=IMVcu&pd_rd_r=5fdf8959-162a-49a5-8b2e-8c09680f4c18&ref_=sspa_dk_rhf_search_pt_sub'
    const url11='https://www.amazon.in/Dell-Inspiron-Enabled-Powered-Processor/dp/B0CYLXZ28F/ref=pd_rhf_se_s_pd_sbs_rvi_d_sccl_2_6/257-1324143-1275927?pd_rd_w=5Ds7o&content-id=amzn1.sym.ed04a9b6-f1e8-467f-8e81-e050db1b5151&pf_rd_p=ed04a9b6-f1e8-467f-8e81-e050db1b5151&pf_rd_r=G521KCRYR80XG716061P&pd_rd_wg=IMVcu&pd_rd_r=5fdf8959-162a-49a5-8b2e-8c09680f4c18&pd_rd_i=B0CYLXZ28F&psc=1'
    const url12='https://www.amazon.in/Acer-Celeron-Processor-LPDDR4X-A324-45/dp/B0D7PSTHRD/ref=sr_1_35?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.qeFwlskYDXW4ci_3yzNjyMxiU72LXHUlLgBgsyNC69LGjHj071QN20LucGBJIEps.uQJTDd0-1uD5yEHj5pdJuo5O5q52Vg-eSruPnro-Uik&dib_tag=se&keywords=laptop&qid=1724645030&sprefix=lap%2Caps%2C254&sr=8-35'
    const url13='https://www.amazon.in/HP-i5-13420H-15-6-inch-Speakers-fa1307TX/dp/B0D2LG3DRJ/ref=sr_1_37?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.qeFwlskYDXW4ci_3yzNjyMxiU72LXHUlLgBgsyNC69LGjHj071QN20LucGBJIEps.uQJTDd0-1uD5yEHj5pdJuo5O5q52Vg-eSruPnro-Uik&dib_tag=se&keywords=laptop&qid=1724645030&sprefix=lap%2Caps%2C254&sr=8-37'
    const url14='https://www.amazon.in/HP-i3-1215U-Anti-Glare-Speakers-15s-fq5328TU/dp/B0CYQ8DS2B/ref=sr_1_35?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.6-kAgfs3OxHWbBol52HpgkPRwpgx7B13QuJXp7aWQTOAVd2VRumveeDF7EZwXDSeDqtXp9_rczn9x0K2qi230f5_phneF9JvuU7EHuYcPizBwUYW2Zc1VCaKEqX_4klb2_WkAv74dYcJJPnsjG_UOcLAl77gwlMqqI-D4-_ljKz15-CrQhiZkZEnQJ-7-oB1.tfqDcUAylHjEQqZtwPrz9jeo2LlOC8QUO1uJ8DH88ZI&dib_tag=se&keywords=laptop&qid=1724645030&sprefix=lap%2Caps%2C254&sr=8-35'
    const url15='https://www.amazon.in/Chuwi-HeroBook-Plus-Processor-Graphics/dp/B0D9QQ7SS1/ref=sr_1_37?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.6-kAgfs3OxHWbBol52HpgkPRwpgx7B13QuJXp7aWQTOAVd2VRumveeDF7EZwXDSeDqtXp9_rczn9x0K2qi230f5_phneF9JvuU7EHuYcPizBwUYW2Zc1VCaKEqX_4klb2_WkAv74dYcJJPnsjG_UOcLAl77gwlMqqI-D4-_ljKz15-CrQhiZkZEnQJ-7-oB1.tfqDcUAylHjEQqZtwPrz9jeo2LlOC8QUO1uJ8DH88ZI&dib_tag=se&keywords=laptop&qid=1724645030&sprefix=lap%2Caps%2C254&sr=8-37'
    const url16='https://www.amazon.in/Dell-Inspiron-3530-i7-1355U-Processor/dp/B0CJK111K3/ref=sr_1_39_sspa?crid=2W2XKVLDQ6CIB&dib=eyJ2IjoiMSJ9.6-kAgfs3OxHWbBol52HpgkPRwpgx7B13QuJXp7aWQTOAVd2VRumveeDF7EZwXDSeDqtXp9_rczn9x0K2qi230f5_phneF9JvuU7EHuYcPizBwUYW2Zc1VCaKEqX_4klb2_WkAv74dYcJJPnsjG_UOcLAl77gwlMqqI-D4-_ljKz15-CrQhiZkZEnQJ-7-oB1.tfqDcUAylHjEQqZtwPrz9jeo2LlOC8QUO1uJ8DH88ZI&dib_tag=se&keywords=laptop&qid=1724645030&sprefix=lap%2Caps%2C254&sr=8-39-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1'
    return (
    <>
      
      <br />
      <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
      
    
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
      
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
        <br />
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
        {/* image----------------------------------------------------------------------------------------------6 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img7} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -24% ₹48,990
          <br />
          M.R.P : 
          <del>  ₹64,175
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Laptop 15s AMD Ryzen 7 5700U, 15.6-inch(39.6 cm) FHD, Anti-Glare Laptop (16 GB/512 GB/AMD Radeon Graphics/Dual Speakers/Backlit KB/Win 11/1.69kg/Natural Silver, 15s-eq2084AU          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url6}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image-----------------------------------------------------------------------------------------------7 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img8} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -23% ₹51,990
          <br />
          M.R.P : 
          <del>  ₹67,457
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dell 15 Thin & Light Laptop, Intel Core i5-1235U Processor/16GB DDR4 + 512GB SSD/Intel UHD Graphics/15 (38cm) FHD Display/Windows 11 + MSO'21/15 Month McAfee/Carbon Black/Spill-Resistant KB/1.69kg          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url7}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image--------------------------------------------------------------------------------------------------------------8 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img9} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -41% ₹45,990
          <br />
          M.R.P : 
          <del>  ₹77,990
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          [Smart Choice] Lenovo IdeaPad Gaming 3 Laptop AMD Ryzen 5 5500H 15.6" (39.62cm) FHD IPS 300nits 144Hz (8GB/512GB SSD/Win 11/NVIDIA RTX 2050 4GB/Alexa/3 Month Game Pass/Shadow Black/2.32Kg), 82K20289IN          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url8}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        <br />
        {/* image -------------------------------------------------------------------------------------------------9 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img10} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -15% ₹88,490
          <br />
          M.R.P : 
          <del>  ₹1,04,048
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Pavilion 16, Enhanced by AI, Intel Core Ultra 7 155U, 16-inch (40.6 cm), WUXGA, 16GB LPDDR5x, 512GB SSD, Intel Graphics, 1080p FHD IR Camera, Copilot, Backlit KB (Win 11, Silver, 1.77 kg),af0028TU            </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url9}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image--------------------------------------------------------------------------------------------10 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img11} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -32% ₹46,980
          <br />
          M.R.P : 
          <del>  ₹69,000
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Acer Aspire Lite 12th Gen Intel Core i5-1235U Premium Laptop (16GB RAM/512GB SSD/Win11 Home&Student/Intel Graphics/MSO) AL15-52, 39.62cm (15.6") Full HD Display, Backlit Keyboard, Steel Gray, 1.59KG          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url10}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image-------------------------------------------------------------------------------------------11 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={imag12} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -25% ₹97,590
          <br />
          M.R.P : 
          <del>  ₹1,29,682
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dell New Inspiron 14 Plus Laptop with AI Enabled Intel Evo Powered Core Ultra 7 155H Processor, 16GB LPDDR5X, 1TB SSD, 14" (35.56cm) 2.2K 300nits, Win 11 + MSO'21, Backlit KB + FPR, Ice Blue, 1.24kg          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url11}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image-------------------------------------------------------------------------------------------12 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img13} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -33% ₹21,990
          <br />
          M.R.P : 
          <del>  ₹32,999
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/512 GB SSD/Win11 Home/38 Whr/HD Webcam) A324-45 with 35.56 cm (14") HD Display, Pure Silver, 1.3 KG            </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url12}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        <br />
         {/* image-------------------------------------------------------------------------------------------13 */}
         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img14} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -21% ₹66,990
          <br />
          M.R.P : 
          <del>  ₹84,838
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Victus Gaming Laptop, 13th Gen Intel Core i5-13420H, 4GB RTX 2050 GPU, 15.6-inch (39.6 cm), FHD, IPS, 144Hz, 16GB DDR4, 1TB SSD, Backlit KB, B&O, Dual Speakers (MSO, Silver, 2.37 kg), fa1307TX          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url13}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
         {/* image-------------------------------------------------------------------------------------------14 */}
         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img15} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -23% ₹39,990
          <br />
          M.R.P : 
          <del>  ₹52,005
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Laptop 15,12th Gen Intel Core i3-1215U,15.6 inch(39.6 cm),FHD,Anti-Glare,8 GB DDR4,1 TB SSD,Windows 11,MSO,Dual Speakers,1.69 kg,Natural Silver,15s-fq5328TU              </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url14}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
         {/* image-------------------------------------------------------------------------------------------15 */}
         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img16} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -53% ₹18,990
          <br />
          M.R.P : 
          <del>  ₹39,990
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Chuwi HeroBook Plus 15.6" FHD Laptop, Intel Celeron N4020 Dual Core Processor Upto 2.80GHz, 8GB RAM, 256GB SSD, Intel UHD Graphics, Windows 11,WiFi 6,Webcam,BT 5.2,HDMI Port,38Wh, 1.74kg (Iron Gray)          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url15}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
         {/* image-------------------------------------------------------------------------------------------16 */}
         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img17} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -53% ₹18,990
          <br />
          M.R.P : 
          <del>  ₹39,990
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dell Inspiron 3530 Laptop, 13th Generation Intel Core i7-1355U Processor, 16GB, 512GB, 15.6" (39.62cm) FHD 120Hz Display, Backlit KB, Win 11 + MSO'21, 15 Month McAfee, Silver, Thin & Light-1.62kg          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url16}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        <br />
        {/* image--------------------------------------------------------------------------------------------------------------17 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
        <br />
        {/* image------------------------------------------------------------------------------------------18 */}
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
        {/* image----------------------------------------------------------------------------------------------19 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img7} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -24% ₹48,990
          <br />
          M.R.P : 
          <del>  ₹64,175
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Laptop 15s AMD Ryzen 7 5700U, 15.6-inch(39.6 cm) FHD, Anti-Glare Laptop (16 GB/512 GB/AMD Radeon Graphics/Dual Speakers/Backlit KB/Win 11/1.69kg/Natural Silver, 15s-eq2084AU          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url6}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image-----------------------------------------------------------------------------------------------20 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img8} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -23% ₹51,990
          <br />
          M.R.P : 
          <del>  ₹67,457
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dell 15 Thin & Light Laptop, Intel Core i5-1235U Processor/16GB DDR4 + 512GB SSD/Intel UHD Graphics/15 (38cm) FHD Display/Windows 11 + MSO'21/15 Month McAfee/Carbon Black/Spill-Resistant KB/1.69kg          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url7}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        <br />
        {/* image--------------------------------------------------------------------------------------------------------------21 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img9} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -41% ₹45,990
          <br />
          M.R.P : 
          <del>  ₹77,990
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          [Smart Choice] Lenovo IdeaPad Gaming 3 Laptop AMD Ryzen 5 5500H 15.6" (39.62cm) FHD IPS 300nits 144Hz (8GB/512GB SSD/Win 11/NVIDIA RTX 2050 4GB/Alexa/3 Month Game Pass/Shadow Black/2.32Kg), 82K20289IN          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url8}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        <br />
                {/* image--------------------------------------------------------------------------------------------------------------22 */}

        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
        {/* image-----------------------------------------------------------------------------------------------------23 */}
      
    
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
   
      {/* image-------------------------------------------------------------------------------------------------24 */}
      
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
      <br />
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
      
    
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
      
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
        <br />
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
        {/* image----------------------------------------------------------------------------------------------6 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img7} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -24% ₹48,990
          <br />
          M.R.P : 
          <del>  ₹64,175
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Laptop 15s AMD Ryzen 7 5700U, 15.6-inch(39.6 cm) FHD, Anti-Glare Laptop (16 GB/512 GB/AMD Radeon Graphics/Dual Speakers/Backlit KB/Win 11/1.69kg/Natural Silver, 15s-eq2084AU          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url6}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image-----------------------------------------------------------------------------------------------7 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img8} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -23% ₹51,990
          <br />
          M.R.P : 
          <del>  ₹67,457
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dell 15 Thin & Light Laptop, Intel Core i5-1235U Processor/16GB DDR4 + 512GB SSD/Intel UHD Graphics/15 (38cm) FHD Display/Windows 11 + MSO'21/15 Month McAfee/Carbon Black/Spill-Resistant KB/1.69kg          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url7}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image--------------------------------------------------------------------------------------------------------------8 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img9} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -41% ₹45,990
          <br />
          M.R.P : 
          <del>  ₹77,990
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          [Smart Choice] Lenovo IdeaPad Gaming 3 Laptop AMD Ryzen 5 5500H 15.6" (39.62cm) FHD IPS 300nits 144Hz (8GB/512GB SSD/Win 11/NVIDIA RTX 2050 4GB/Alexa/3 Month Game Pass/Shadow Black/2.32Kg), 82K20289IN          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url8}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        <br />
        {/* image -------------------------------------------------------------------------------------------------9 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img10} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -15% ₹88,490
          <br />
          M.R.P : 
          <del>  ₹1,04,048
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Pavilion 16, Enhanced by AI, Intel Core Ultra 7 155U, 16-inch (40.6 cm), WUXGA, 16GB LPDDR5x, 512GB SSD, Intel Graphics, 1080p FHD IR Camera, Copilot, Backlit KB (Win 11, Silver, 1.77 kg),af0028TU            </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url9}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image--------------------------------------------------------------------------------------------10 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img11} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -32% ₹46,980
          <br />
          M.R.P : 
          <del>  ₹69,000
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Acer Aspire Lite 12th Gen Intel Core i5-1235U Premium Laptop (16GB RAM/512GB SSD/Win11 Home&Student/Intel Graphics/MSO) AL15-52, 39.62cm (15.6") Full HD Display, Backlit Keyboard, Steel Gray, 1.59KG          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url10}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image-------------------------------------------------------------------------------------------11 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={imag12} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -25% ₹97,590
          <br />
          M.R.P : 
          <del>  ₹1,29,682
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dell New Inspiron 14 Plus Laptop with AI Enabled Intel Evo Powered Core Ultra 7 155H Processor, 16GB LPDDR5X, 1TB SSD, 14" (35.56cm) 2.2K 300nits, Win 11 + MSO'21, Backlit KB + FPR, Ice Blue, 1.24kg          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url11}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image-------------------------------------------------------------------------------------------12 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img13} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -33% ₹21,990
          <br />
          M.R.P : 
          <del>  ₹32,999
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/512 GB SSD/Win11 Home/38 Whr/HD Webcam) A324-45 with 35.56 cm (14") HD Display, Pure Silver, 1.3 KG            </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url12}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        <br />
         {/* image-------------------------------------------------------------------------------------------13 */}
         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img14} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -21% ₹66,990
          <br />
          M.R.P : 
          <del>  ₹84,838
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Victus Gaming Laptop, 13th Gen Intel Core i5-13420H, 4GB RTX 2050 GPU, 15.6-inch (39.6 cm), FHD, IPS, 144Hz, 16GB DDR4, 1TB SSD, Backlit KB, B&O, Dual Speakers (MSO, Silver, 2.37 kg), fa1307TX          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url13}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
         {/* image-------------------------------------------------------------------------------------------14 */}
         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img15} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -23% ₹39,990
          <br />
          M.R.P : 
          <del>  ₹52,005
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Laptop 15,12th Gen Intel Core i3-1215U,15.6 inch(39.6 cm),FHD,Anti-Glare,8 GB DDR4,1 TB SSD,Windows 11,MSO,Dual Speakers,1.69 kg,Natural Silver,15s-fq5328TU              </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url14}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
         {/* image-------------------------------------------------------------------------------------------15 */}
         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img16} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -53% ₹18,990
          <br />
          M.R.P : 
          <del>  ₹39,990
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Chuwi HeroBook Plus 15.6" FHD Laptop, Intel Celeron N4020 Dual Core Processor Upto 2.80GHz, 8GB RAM, 256GB SSD, Intel UHD Graphics, Windows 11,WiFi 6,Webcam,BT 5.2,HDMI Port,38Wh, 1.74kg (Iron Gray)          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url15}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
         {/* image-------------------------------------------------------------------------------------------16 */}
         <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img17} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -53% ₹18,990
          <br />
          M.R.P : 
          <del>  ₹39,990
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dell Inspiron 3530 Laptop, 13th Generation Intel Core i7-1355U Processor, 16GB, 512GB, 15.6" (39.62cm) FHD 120Hz Display, Backlit KB, Win 11 + MSO'21, 15 Month McAfee, Silver, Thin & Light-1.62kg          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url16}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        <br />
        {/* image--------------------------------------------------------------------------------------------------------------17 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
        <br />
        {/* image------------------------------------------------------------------------------------------18 */}
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
        {/* image----------------------------------------------------------------------------------------------19 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img7} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -24% ₹48,990
          <br />
          M.R.P : 
          <del>  ₹64,175
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HP Laptop 15s AMD Ryzen 7 5700U, 15.6-inch(39.6 cm) FHD, Anti-Glare Laptop (16 GB/512 GB/AMD Radeon Graphics/Dual Speakers/Backlit KB/Win 11/1.69kg/Natural Silver, 15s-eq2084AU          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url6}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        {/* image-----------------------------------------------------------------------------------------------20 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img8} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -23% ₹51,990
          <br />
          M.R.P : 
          <del>  ₹67,457
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dell 15 Thin & Light Laptop, Intel Core i5-1235U Processor/16GB DDR4 + 512GB SSD/Intel UHD Graphics/15 (38cm) FHD Display/Windows 11 + MSO'21/15 Month McAfee/Carbon Black/Spill-Resistant KB/1.69kg          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url7}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        <br />
        {/* image--------------------------------------------------------------------------------------------------------------21 */}
        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px',marginTop:'20px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          
          image={img9} // Use imported image reference
       
        />  
        <CardContent>
          <Typography gutterBottom  component="div">
          -41% ₹45,990
          <br />
          M.R.P : 
          <del>  ₹77,990
          </del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          [Smart Choice] Lenovo IdeaPad Gaming 3 Laptop AMD Ryzen 5 5500H 15.6" (39.62cm) FHD IPS 300nits 144Hz (8GB/512GB SSD/Win 11/NVIDIA RTX 2050 4GB/Alexa/3 Month Game Pass/Shadow Black/2.32Kg), 82K20289IN          </Typography>
        </CardContent>
        <CardActions>
            <Link to ={url}>
          <Button size="small" style={{marginTop:'-20px',color:'blue'}}>Share</Button></Link>
          <Link to ='/Mycart'>
          <Button size="small" style={{marginTop:'-20px'}}>Add to Cart</Button></Link>
          <Link to ={url8}>
          <Button size="small" style={{marginTop:'-20px'}}>More</Button></Link>
          
        </CardActions>
        </Card>
        <br />
                {/* image--------------------------------------------------------------------------------------------------------------22 */}

        <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
        {/* image-----------------------------------------------------------------------------------------------------23 */}
      
    
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
   
      {/* image-------------------------------------------------------------------------------------------------24 */}
      
      <Card sx={{ maxWidth: 345,backgroundColor:'orange',borderRadius:'30px' }}>
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
      <br />
      </Grid>
    </>
  );
};

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const url1 = 'https://oasis.opstatics.com/content/dam/oasis/page/2024/product/nord-ce4-lite/highlight/two-column/orange-pc.jpg.thumb.webp';
const url2 = 'https://i02.appmifile.com/794_operator_sg/18/03/2024/7f001946aad3dd8d8f0bb86bf3e4a7c8.jpg?f=webp';

export const Carosal = () => {
  return (
    
    <Carousel style={{ height: '500px',marginTop:'10px' }}>

      <Carousel.Item>
        <img
          height="600px" // Match the height of the Carousel
          width="100%"
          src={url1}
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="600px" // Match the height of the Carousel
          width="100%"
          src={url2}
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          height="600px"
          
          width="100%" // Set to 100% to fit within Carousel container
          src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/165087957/in-feature-galaxy-a35-5g-sm-a356-540789527?$FB_TYPE_A_JPG$"
          alt=""
     
        >
          
        </img>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  


        



  );
};

import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carrousel = (props) => {
   const img1=props.img1;
   const img2=props.img2;
   const img3=props.img3;
    return ( 
        <div className="row col-12 mx-auto">
          <Carousel className='container-fluid CarrouselPosicion'>
             <Carousel.Item interval={4000}>
                <img className="d-block w-100 rounded" src={img1} alt="First slide"/>
             </Carousel.Item>
             <Carousel.Item interval={4000}>
                <img className="d-block w-100 rounded" src={img2} alt="Second slide"/>
             </Carousel.Item>
             <Carousel.Item interval={4000}>
                <img className="d-block w-100 rounded" src={img3} alt="Third slide"/>
             </Carousel.Item>
           </Carousel>
        </div>
     );
}
 
export default Carrousel;
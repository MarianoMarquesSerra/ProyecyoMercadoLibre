import { Carousel } from 'react-bootstrap';

const CarouselProddeInteres = ({productos}) => {
   
    return ( 
        <>
          <div className="row col-12 mx-auto">
          <Carousel>
          <Carousel.Item interval={4000} key={30}>
                <div class="container m-0">
                <div class="row d-flex justify-content-between">
                {productos.map((producto,i)=>{
                    if(i>=0 && i<=4){
                        return(
                        
                               <div class="card p-0" style={{width:'13rem'}} key={i}>
                                 <div class="cardCarouselHeight border-bottom">
                                   <img className='ImgCarousel' src={producto.img} alt="Card image cap"/>
                                 </div>
                                 <div class="card-body">
                                   <h5 class="card-title">$ {producto.precio}</h5>
                                   <p class="card-text">{producto.desc}</p>        
                                 </div>
                               </div>                           
                        )
                    }
                })}
                </div>
                </div>
             </Carousel.Item>

             <Carousel.Item interval={4000} key={31}>
                <div class="container m-0">
                <div class="row d-flex justify-content-between">
                {productos.map((producto,i)=>{
                    if(i>=5 && i<=9){
                        return(
                        
                               <div class="card p-0" style={{width:'13rem'}} key={i}>
                                 <div class="cardCarouselHeight border-bottom">
                                   <img className='ImgCarousel' src={producto.img} alt="Card image cap"/>
                                 </div>
                                 <div class="card-body">
                                   <h5 class="card-title">$ {producto.precio}</h5>
                                   <p class="card-text">{producto.desc}</p>        
                                 </div>
                               </div>                           
                        )
                    }
                })}
                </div>
                </div>
             </Carousel.Item>
             
             <Carousel.Item interval={4000} key={32}>
                <div class="container m-0">
                <div class="row d-flex justify-content-between">
                {productos.map((producto,i)=>{
                    if(i>=10 && i<=14){
                        return(
                        
                               <div class="card p-0" style={{width:'13rem'}} key={i}>
                                 <div class="cardCarouselHeight border-bottom">
                                   <img className='ImgCarousel' src={producto.img} alt="Card image cap"/>
                                 </div>
                                 <div class="card-body">
                                   <h5 class="card-title">$ {producto.precio}</h5>
                                   <p class="card-text">{producto.desc}</p>        
                                 </div>
                               </div>                           
                        )
                    }
                })}
                </div>
                </div>
             </Carousel.Item>

             <Carousel.Item interval={4000} key={33}>
                <div class="container m-0">
                <div class="row d-flex justify-content-between">
                {productos.map((producto,i)=>{
                    if(i>=15 && i<=19){
                        return(
                        
                               <div class="card p-0" style={{width:'13rem'}} key={i}>
                                 <div class="cardCarouselHeight border-bottom">
                                   <img className='ImgCarousel' src={producto.img} alt="Card image cap"/>
                                 </div>
                                 <div class="card-body">
                                   <h5 class="card-title">$ {producto.precio}</h5>
                                   <p class="card-text">{producto.desc}</p>        
                                 </div>
                               </div>                           
                        )
                    }
                })}
                </div>
                </div>
             </Carousel.Item>
          </Carousel>
          </div>
        </>
     );
}
 
export default CarouselProddeInteres;
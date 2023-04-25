import { Carousel } from 'react-bootstrap';

const CarouselProductos = ({productos}) => {

    return ( 
        <>
          <div className="row col-12 mx-auto">
          <Carousel className='container-fluid CarrouselPosicion'>

             <Carousel.Item interval={4000}>
                <div class="container m-0">
                <div class="row d-flex justify-content-between">
                {productos.map((producto,i)=>{
                    if(i>=0 && i<=2){
                        return(
                        
                               <div class="col-md-3 col-sm-4 card p-0">
                                 <div class="cardCarouselHeight border-bottom">
                                   <img className='img-fluid' src={producto.img} alt="Card image cap"/>
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

             <Carousel.Item interval={4000}>
                <div class="container m-0">
                <div class="row d-flex justify-content-between">
                {productos.map((producto,i)=>{
                    if(i>=3 && i<=5){
                        return(
                        
                               <div class="col-md-3 col-sm-4 card p-0">
                                 <div class="cardCarouselHeight border-bottom">
                                   <img className='img-fluid' src={producto.img} alt="Card image cap"/>
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
             
             <Carousel.Item interval={4000}>
                <div class="container m-0">
                <div class="row d-flex justify-content-between">
                {productos.map((producto,i)=>{
                    if(i>=6 && i<=8){
                        return(
                        
                               <div class="col-md-3 col-sm-4 card p-0">
                                 <div class="cardCarouselHeight border-bottom">
                                   <img className='img-fluid' src={producto.img} alt="Card image cap"/>
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
 
export default CarouselProductos;
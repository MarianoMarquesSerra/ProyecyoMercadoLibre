import { Carousel } from 'react-bootstrap';

const CarouselProductos = () => {
    return ( 
        <>
          <div className="row col-12 mx-auto">
          <Carousel className='container-fluid CarrouselPosicion'>
             <Carousel.Item interval={4000}>
             <div class="container m-0">
                <div class="row d-flex justify-content-between">
                    <div class="card p-0" style={{width:'14rem'}}>
                      <div class="cardHeight border-bottom">
                        <img src={require('../images/EpiphoneLesPaul.jpg')} alt="Card image cap"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">$ 122.465</h5>
                        <p class="card-text">Guitarra eléctrica Epiphone Slash “AFD” Les Paul Special II...</p>

                      </div>
                    </div>
                    <div class="card p-0" style={{width:'14rem'}}>
                      <div class="cardHeight border-bottom">
                        <img src={require('../images/TelecasterPartcaster.jpg')} alt="Card image cap"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">$ 165.000</h5>
                        <p class="card-text">Telecaster Partcaster Tremenda Relic</p>
  
                      </div>
                    </div>
                    <div class="card p-0" style={{width:'14rem'}}>
                      <div class="cardHeight border-bottom">
                        <img src={require('../images/FenderStratoJapon.jpg')} alt="Card image cap"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">$ 175.000</h5>
                        <p class="card-text">Fender Stratocaster Japon 1995</p>
  
                      </div>
                    </div>
                </div>
              </div>
             </Carousel.Item>
             <Carousel.Item interval={4000}>
             <div class="container m-0">
                <div class="row d-flex justify-content-between">
                    <div class="card p-0" style={{width:'14rem'}}>
                      <div class="cardHeight border-bottom">
                        <img src={require('../images/FenderStratoSt67.jpg')} alt="Card image cap"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">$ 572.900</h5>
                        <p class="card-text">Fender Stratocaster St67 Reissue Japan | 1967 - 1997 Hendrix</p>
  
                      </div>
                    </div>
                    <div class="card p-0" style={{width:'14rem'}}>
                      <div class="cardHeight border-bottom">
                        <img src={require('../images/YamahaErg121.jpg')} alt="Card image cap"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">$ 97.760</h5>
                        <p class="card-text">Guitarra eléctrica Yamaha ERG121 de tilo black brillante con diapasón de palo de rosa</p>
  
                      </div>
                    </div>
                    <div class="card p-0" style={{width:'14rem'}}>
                      <div class="cardHeight border-bottom">
                        <img src={require('../images/TelecasterHondo.jpg')} alt="Card image cap"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">$ 200.000</h5>
                        <p class="card-text">Hondo Telecaster Custom Japon Fame 757 Del 86 Mango 1 Pieza</p>
  
                      </div>
                    </div>
                </div>
              </div>
             </Carousel.Item>
             <Carousel.Item interval={4000}>
             <div class="container m-0">
                <div class="row d-flex justify-content-between">
                    <div class="card p-0" style={{width:'14rem'}}>
                      <div class="cardHeight border-bottom">
                        <img src={require('../images/SquierPartcaster.jpg')} alt="Card image cap"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">$ 110.000</h5>
                        <p class="card-text">Guitarra Squier Stratocaster Partcaster No Fender No Gibson</p>
  
                      </div>
                    </div>
                    <div class="card p-0" style={{width:'14rem'}}>
                      <div class="cardHeight border-bottom">
                        <img src={require('../images/StratoTomAnderson.jpg')} alt="Card image cap"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">1.200.000</h5>
                        <p class="card-text">Tom Anderson Stratocaster Classic Suhr Gibson Fender Prs </p>
  
                      </div>
                    </div>
                    <div class="card p-0" style={{width:'14rem'}}>
                      <div class="cardHeight border-bottom">
                        <img src={require('../images/SquierAffinity.jpg')} alt="Card image cap"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">$100.000</h5>
                        <p class="card-text">Guitarra Squier Stratocaster Affinity Series</p>
  
                      </div>
                    </div>
                </div>
              </div>
             </Carousel.Item>
           </Carousel>
          </div>
        </>
     );
}
 
export default CarouselProductos;
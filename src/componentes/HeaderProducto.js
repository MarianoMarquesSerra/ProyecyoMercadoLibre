import { HiOutlineTruck } from "react-icons/hi";
import { BiBeenHere, BiStoreAlt } from "react-icons/bi";
import { TbLetterI } from "react-icons/tb";
import { IoShieldCheckmarkOutline, IoTrophyOutline, IoRibbonOutline } from "react-icons/io5";
import Img1 from '../images/img1LargeFenderStr.jpg';


const HeaderProducto = ({producto}) => {
    return ( 
            <div class="container bg-white" style={{fontSize:'14px'}}>
                <div class="container card mt-3 p-2 border">
                    <div class="row text-success">
                        <div class="col-1"><HiOutlineTruck size={25}/></div>
                        <div class="col-10">
                            <p>Llega gratis el martes <span><a class="text-primary d-block" style={{textDecoration:'none'}}><BiBeenHere/> Enviar a Amenabar 2031</a></span></p>
                        </div>
                    </div>
                    <div class="row text-success">
                        <div class="col-1"><BiStoreAlt size={25}/></div>
                        <div class="col-10">
                            <p>Resgistrá gratis <pan style={{fontWeight:'bold'}}>entre el viernes y el miércoles 30 de noviembre</pan> en correo y otros puntos <span><a class="text-primary d-block" style={{textDecoration:'none'}}>ver en mapa</a></span></p>
                        </div>
                    </div>
                    <div>
                        <p>Vendido por <span class="text-primary">{producto.vendedor}</span>
                            <span class="d-block">MercadoLíder <span class="text-secondary"><TbLetterI/></span> 1.461 ventas</span>
                        </p>
                        <p style={{fontWeight:'bold', fontSize:'17px'}}>¡Última disponible!</p>
                    </div>
                    <button type="button" class="btn btn-primary btn-lg" style={{fontSize:'14px', fontWeight:'bold', height:'50px'}}>Comprar ahora</button>
                    <button type="button" class="btn btn-sky btn-lg mt-2 text-primary" style={{fontSize:'14px', fontWeight:'bold', height:'50px'}}>Agregar al carrito</button>
                    <div class="row mt-4">
                        <div class="col-1"><IoShieldCheckmarkOutline size={16}/></div>
                        <div class="col-10"><span class="text-primary">Compra portegida</span>, recibí el producto que esperabas o te devolvemos tu dinero.</div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-1"><IoTrophyOutline size={16}/></div>
                        <div class="col-10"><span class="text-primary">Mercado puntos</span>. sumás 10022 puntos.</div>
                    </div>
                    <div class="row my-4">
                        <div class="col-1"><IoRibbonOutline size={16}/></div>
                        <div class="col-10">6 meses de garantía de fábrica.</div>
                    </div>
                </div>
                <div class="container card mt-3 p-2 border">
                    <p class="p-3" style={{fontSize:'18px'}}>Información sobre el vendedor</p>
                    <div class="row">
                        <div class="col-1"><BiBeenHere size={20}/></div>
                        <div class="col-10">
                            <p>Ubicación <span><a class="text-secondary d-block" style={{textDecoration:'none'}}>Belgrano. Capital Federal</a></span></p>
                        </div>
                    </div>
                    <div class="row text-success">
                        <div class="col-1"><IoRibbonOutline size={20}/></div>
                        <div class="col-10">
                            <p><span class="text-success" style={{fontWeight:'bold'}}>MercadoLídes Platinium</span><span><a class="text-secondary d-block" style={{textDecoration:'none'}}>¡Es uno de los mejores del sitio!</a></span></p>
                        </div>
                    </div>
                    <ul class="m-0 p-0">
                        <li id="ListHorizontal"></li>
                        <li id="ListHorizontal"></li>
                        <li class="atumBlock" id="ListHorizontal"></li>
                        <li class="grlghBlock" id="ListHorizontal"></li>
                        <li class="greenBlock" id="ListHorizontal"></li>
                    </ul>
                    <div class="container mt-3" style={{fontSize:'12px'}}>
                        <div class="row">
                            <div class="col-4 text-center">
                                <h4>1461</h4>
                                <p>Ventas en los últimos 60 días.</p>
                            </div>
                            <div class="col-4 text-center borderVH">
                                <h4><img src={require('../images/bubbleOk.jpg')}/></h4>
                                <p>Brinda buena atención</p>
                            </div>
                            <div class="col-4 text-center">
                                <h4><img src={require('../images/clockOk.jpg')}/></h4>
                                <p>Despacha sus productos a tiempo</p>
                            </div>
                            <p class="text-primary" style={{fontSize:'14px'}}>Vermás datos de este vendedor</p>
                        </div>
                    </div>                   
                </div>
                <div class="container card mt-3 p-2 border">
                    <div class="container">
                        <p class="pt-3" style={{fontSize:'18px'}}>Medios de Pago</p>
                        <p>Hasta 12 cuotas sin tarjeta</p> 
                        <img src={require('../images/mercadoCredito.jpg')}/>          
                        <p class="pt-3">Tarjetas de crédito</p>
                        <div class="row">
                            <div class="col-3"><img src={require('../images/visa.jpg')}/></div>
                            <div class="col-3"><img src={require('../images/americanexpress.jpg')}/></div>
                            <div class="col-3"><img src={require('../images/tarjetanaranja.jpg')}/></div>
                            <div class="col-3"><img src={require('../images/mastercard.jpg')}/></div>
                        </div>
                        <p class="pt-3">Tarjetas de débito</p>
                        <div class="row">
                            <div class="col-3"><img src={require('../images/visadebito.jpg')}/></div>
                            <div class="col-3"><img src={require('../images/maestro.jpg')}/></div>
                            <div class="col-3"><img src={require('../images/mastercarddebito.jpg')}/></div>
                            <div class="col-3"><img src={require('../images/cabal.jpg')}/></div>
                        </div>
                        <p class="pt-3 text-primary">Conocé otros medios de pago</p>
                    </div>
                </div>
                <div class="container card mt-3 p-2 border">
                    <div class="container">
                        <p style={{fontSize:'18px'}}>Productos promocionados<span class="text-primary d-block" style={{fontSize:'14px'}}>Anuncia acá</span></p>
                        <div class="row">
                            <div class="col-4"><div class="my-2" style={{width:'50px', height:'50px'}}><img class="ImgMD" src={require('../images/img1FenderStr.jpg')} id="smallImg1"/></div></div>
                            <div class="col-8">
                                <p>$299.999<span class="text-success d-block">Envío gratis</span>
                                <span class="d-block">Guitarra eléctrica Squier by Fender Clasic Vibe '50s...</span>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4"><div class="my-2" style={{width:'50px', height:'50px'}}><img class="ImgMD" src={require('../images/NewenTelecaster.jpg')} id="smallImg1"/></div></div>
                            <div class="col-8">
                                <p>$57.419<span class="text-success d-block">Envío gratis</span>
                                <span class="d-block">Guitarra eléctrica Onas TL telecaster de lenga blue...</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
     );
}
 
export default HeaderProducto;
import Img1 from '../images/img1LargeFenderStr.jpg';
import Img2 from '../images/img2LargeFenderStr.jpg';
import Img3 from '../images/img3LargeFenderStr.jpg';
import { TbLetterI } from "react-icons/tb";
import { IoIosHeartEmpty } from "react-icons/io";
import CarouselProductos from './CarouselProductos';
import TablaCaracteristicas from './TablaCaracteristicas';
import CaracteristicasAdicionales from './CaracteristicasAdicionales';


const DescripcionProducto = () => {

    function asignImage(imagen){
        var fullImg = document.getElementById("imageBox");
        fullImg.src = imagen;
    }

    return ( 
        <>
            <div class="row bg-white">
                <div class="col-6">
                    <div class="row">
                        <div class="col-2">
                            <div class="my-2" style={{width:'50px', height:'50px'}}><img class="ImgSmall" src={require('../images/img1FenderStr.jpg')} id="smallImg1" onMouseEnter={() =>asignImage(Img1)}/></div>
                            <div class="my-2" style={{width:'50px', height:'50px'}}><img class="ImgSmall" src={require('../images/img2FenderStr.jpg')} id="smallImg2" onMouseEnter={() =>asignImage(Img2)}/></div>
                            <div class="my-2" style={{width:'50px', height:'50px'}}><img class="ImgSmall" src={require('../images/img3FenderStr.jpg')} id="smallImg3" onMouseEnter={() =>asignImage(Img3)}/></div>
                        </div>
                        <div class="col-10">
                            <div class="container my-4" style={{width:'400px', height:'600px'}}>
                                <img id="imageBox" class="ImgLarge" src={require('../images/img1LargeFenderStr.jpg')}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 p-3">
                    <div class="container">
                        <div class="row ">
                            <div class="col-10">
                                <a>Nuevo <TbLetterI/> </a>
                                <a>1 vendido</a>
                            </div>
                            <div class="col-2 text-primary">
                                <a><IoIosHeartEmpty size={26}/></a>
                            </div>
                        </div>
                            <div>
                                <h5>Guitarra eléctrica Fender American Vintage '56 Stratocaster de aliso/fresno black laca con diapasón de arce</h5>
                            </div>
                            <div class="pt-4">
                                <h5 style={{font:'cah5tion', fontSize:'33px'}}>$ 1.403.105</h5>
                                <h5 style={{font:'caption', fontSize:'16px'}}>Pagá en cuotas</h5>
                                <p class="text-primary">Ver los medios de pago</p>
                            </div>
                            <div>
                                <h5 style={{font:'caption', fontSize:'14px'}}>Orientación de la mano: <span style={{fontWeight:'bold'}}>Diestro</span></h5>
                                <h5 style={{font:'caption', fontSize:'14px'}}>Color: <span style={{fontWeight:'bold'}}>Black</span></h5>
                            </div>
                            <div>
                                <ul class="liTypeStyle text-secondary" style={{lineHeight: '1px'}}>
                                    <li>Fabricada en aliso/fresno con acabado de laca.</li>
                                    <li >Con 6 cuerdas y 21 trastes.</li>
                                    <li >El largo de escala es de 25.5 ".</li>
                                    <li >El puente es tremolo.</li>
                                    <li >Incluye 3 micrófonos simples.</li>
                                    <li >Controles de selector de micrófonos, tono y volumen.</li>
                                    <li >Palanca incluida.</li>
                                    <li >Sonidos fuertes y firmes con un estilo propio.</li>
                                </ul>
                            </div>
                    </div>
                </div>
                <hr style={{width:'95%'}}></hr>
                <h4>Quienes vieron este producto también compraron</h4>
                <div class="container-fluid">
                    <CarouselProductos/>
                </div>
                <hr class="mt-5" style={{width:'95%'}}></hr>
                <div class="mt-4">
                    <h4>Características principales</h4>
                    <TablaCaracteristicas/>
                </div>
                <div class="mt-4 text-dark">
                    <h5>Otros</h5>
                    <CaracteristicasAdicionales/>
                </div>
                <hr class="mt-5" style={{width:'95%'}}></hr>
                <div>
                    <h4>Descripción</h4>
                    <p>Hablar de Fender es entender la música en todo el mundo y en muchos géneros. Es una de las marcas líderes en definir los sonidos que escuchamos. A su vez, satisface las necesidades de guitarristas al crear productos de calidad y respaldarlos con servicio y estabilidad..</p>
                    <br></br>
                    <p>Una forma brara cada estilo musical</p>
                    <p>Esta Stratocaster es el máximo referente de las guitarras a lo largo de su historia. Cuenta con pastillas que incluyen selectores, tonos y volumen máster. Tiene un sonido cálido, cristalino, percusivo y con mucha textura. Su forma hace que sea el modelo que más se adapta al cuerpo humano, lo que otorga mayor versatilidad en su uso. Eric Clapton es el representante de este instrumento, por lo que es ideal para estilos como el rock y el blues.</p>
                </div>
            </div>
        </>
     );
}
 
export default DescripcionProducto;
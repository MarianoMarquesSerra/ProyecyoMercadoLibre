import { TbLetterI } from "react-icons/tb";
import { IoIosHeartEmpty } from "react-icons/io";
import CarouselProductos from './CarouselProductos';
import TablaCaracteristicas from './TablaCaracteristicas';
import CaracteristicasAdicionales from './CaracteristicasAdicionales';
import ListProdOtrosComp from "../apis/ListProdOtrosComp";


const DescripcionProducto = ({producto}) => {
    const ListProdComprados = [];

    function asignImage(imagen){
        var fullImg = document.getElementById("imageBox");
        fullImg.src = imagen;
    }

    return ( 
        <>
            <div class="row bg-white">
                <div class="col-md-6 col-sm-12">
                    <div class="row">
                        <div class="col-2">
                            <div class="my-2" style={{width:'50px', height:'50px'}}><img class="ImgSmall" src={producto.imgsm1} id="smallImg1" onMouseEnter={() =>asignImage(producto.img)}/></div>
                            <div class="my-2" style={{width:'50px', height:'50px'}}><img class="ImgSmall" src={producto.imgsm2} id="smallImg2" onMouseEnter={() =>asignImage(producto.img2)}/></div>
                            <div class="my-2" style={{width:'50px', height:'50px'}}><img class="ImgSmall" src={producto.imgsm3} id="smallImg3" onMouseEnter={() =>asignImage(producto.img3)}/></div>
                        </div>
                        <div class="col-10">
                            <div class="container my-4 imgProducto">
                                <img id="imageBox" class="ImgLarge" src={producto.img}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 p-3">
                    <div class="container">
                        <div class="row ">
                            <div class="col-10">
                                <a>{producto.condicion} <TbLetterI/> </a>
                                <a>{producto.cantvend} vendido</a>
                            </div>
                            <div class="col-2 text-primary">
                                <a><IoIosHeartEmpty size={26}/></a>
                            </div>
                        </div>
                            <div>
                                <h5>{producto.titulo}</h5>
                            </div>
                            <div class="pt-4">
                                <h5 style={{font:'cah5tion', fontSize:'33px'}}>$ {producto.precio}</h5>
                                <h5 style={{font:'caption', fontSize:'16px'}}>Pagá en cuotas</h5>
                                <p class="text-primary">Ver los medios de pago</p>
                            </div>
                            <div>
                                <h5 style={{font:'caption', fontSize:'14px'}}>Orientación de la mano: <span style={{fontWeight:'bold'}}>{producto.orientdelamano}</span></h5>
                                <h5 style={{font:'caption', fontSize:'14px'}}>Color: <span style={{fontWeight:'bold'}}>{producto.color}</span></h5>
                            </div>
                            <div>
                                <ul class="liTypeStyle text-secondary" style={{lineHeight: '1px'}}>
                                    {
                                        producto.detalles?.map((det,i)=>{
                                            return (
                                                <li key={i}>{det}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                    </div>
                </div>
                <hr style={{width:'95%'}}></hr>
                <h4>Quienes vieron este producto también compraron</h4>
                <div class="container-fluid">
                    {
                            ListProdOtrosComp.map((prod)=>{
                                if(producto.categoria == prod.categoria){
                                    ListProdComprados.push(prod)
                                }
                            
                            })
                               
                        }
                        <CarouselProductos productos={ListProdComprados}/>
                </div>
                <hr class="mt-5" style={{width:'95%'}}></hr>
                <div class="mt-4">
                    <h4>Características principales</h4>
                    <TablaCaracteristicas tabla={producto.tablacaracteristicas}/>
                </div>
                <div class="mt-4 text-dark">
                    <h5>Otros</h5>
                    <CaracteristicasAdicionales caracteristicas={producto.caracteristicas}/>
                </div>
                <hr class="mt-5" style={{width:'95%'}}></hr>
                <div>
                    <h4>Descripción</h4>
                    <p>{producto.descripcion1}</p>
                    <br></br>
                    <p>{producto.descripcion2}</p>
                    <p>{producto.descripcion3}</p>
                </div>
            </div>
        </>
     );
}
 
export default DescripcionProducto;
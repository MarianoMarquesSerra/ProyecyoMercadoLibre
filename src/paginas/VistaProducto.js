import { BiChevronRight } from "react-icons/bi";
import { TbLetterI } from "react-icons/tb";
import CarouselProddeInteres from "../componentes/CarouselProddeInteres";
import DescripcionProducto from "../componentes/DescripcionProducto";
import Navbar from "../componentes/Navbar";
import PreguntasyRespuestas from "../componentes/PreguntasyRespuestas";
import ProductosSimilares from "../componentes/ProductosSimilares";
import productos from "../apis/ListProductos";
import ListProddeInteres from "../apis/ListProddeInteres";
import ListPreguntas from "../apis/ListPreguntas";
import FooterProductos from "../componentes/FooterProductos";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const VistaProducto = () => {
    const {id} = useParams();
    let [prodselected,setProdselected] = useState({});
    let ProddeInteres = [];
    let pregunta = "";
    let respuesta = "";


    useEffect(()=>{
        productos.map((producto)=>{
            if(producto.id == id){
                setProdselected(producto);
            }
        });
        cargarPreguntas();
    },[]);


    function cargarPreguntas(){
        console.log("Lo ejecutó");
        ListPreguntas.map((preg)=>{
            console.log("Ingresó al ciclo");
            if(preg.id == prodselected.id && preg.categoria == prodselected.categoria){
                console.log("Lo encontró");
                pregunta=preg.pregunta;
                respuesta=preg.respuesta;
            }
            console.log(pregunta);
            console.log(respuesta);
        });
        return <PreguntasyRespuestas preg={pregunta} resp={respuesta}/>
    }


    return ( 
        <div className="bg-page">
            <div id="cabecera">
                <Navbar/>
            </div>
            <div class="bg-page">
            <div class="container hideItem">               
                <div class="row mb-2">
                <p class="pt-3" style={{fontSize:'15px'}}><span style={{fontWeight:'bold'}}>También puede interesarte: </span>guitarra eléctrica - prs sky</p>
                    <div class="col-8">
                        <a>Volver al listado <TbLetterI/> </a>
                        <a><span class="text-primary">{prodselected.subcategoria2} </span><span style={{fontSize:'19px'}}><BiChevronRight/></span> </a>
                        <a><span class="text-primary">{prodselected.subcategoria3} </span> <span style={{fontSize:'19px'}}><BiChevronRight/></span> </a>
                        <a><span class="text-primary">{prodselected.subcategoria4} </span> <span style={{fontSize:'19px'}}><BiChevronRight/></span> </a>
                        <a><span class="text-primary">{prodselected.subcategoria5} </span></a>
                    </div>
                    <div class="col-2 offset-md-2">
                        <a><span class="text-primary">Compartir <span style={{color:'black'}}><TbLetterI/></span> </span></a>
                        <a><span class="text-primary">Vender </span></a>
                    </div>
                </div>
            </div>

            <div class="container bg-white">
                    <DescripcionProducto producto={prodselected}/>
                <hr></hr>
                <div class="mt-5 mb-5">
                    <ProductosSimilares producto={prodselected}/>
                </div>
                <hr></hr>
                <div class="mt-5 mb-5">
                    {cargarPreguntas()}
                </div>
                <hr></hr>
                &nbsp;&nbsp;
            </div>
            </div>
            <div className="container mt-4">
                <h4>También te puede interesar</h4>
            </div>
            <div className="container mt-5 mb-5">
            {ListProddeInteres.map((prod)=>{
            if(prod.subcategoria == prodselected.subcategoria){
                ProddeInteres.push(prod);
            }
            })}
            <CarouselProddeInteres productos={ProddeInteres}/>
            </div>
            <div className="container mt-5 mb-5">
                <img src={require('../images/BanerSamsung.jpg')} style={{width:'100%', borderRadius:'5px'}}/>
            </div>
            <div>
                <FooterProductos/>
            </div>
        </div>
     );
}
 
export default VistaProducto;
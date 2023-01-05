import React,{useEffect, useState} from "react";
import MostrarSimilares from "./MostrarSimilares";
import ListProdSimilares from "../apis/ListProdSimilares";
import ListProdVisitados from "../apis/ListProdVisitados";
import TablaDescSimilares from "./TablaDescSimilares";

const ProductosSimilares = ({producto}) => {
    var [ListProductos, setLisProductos] = useState([]);

    function toggleSwitch(selector){
        var similares = document.getElementById("ProdSimil");
        var visitados = document.getElementById("VisitRec");
        var contenedor1 = document.getElementById("MuetraProdSimil");
        var contenedor2 = document.getElementById("MuetraProdVisit");


            if (selector=="ProdSimil"){
                if (visitados.classList.contains('ItemSelected')){
                    visitados.classList.remove('ItemSelected');
                    contenedor2.classList.remove('Mostrar');
                }
                similares.classList.add('ItemSelected');
                contenedor1.classList.add('Mostrar');
                setLisProductos(ListProdSimilares);
            }else if(selector=="VisitRec"){
                if (similares.classList.contains('ItemSelected')){
                    similares.classList.remove('ItemSelected');
                    contenedor1.classList.remove('Mostrar');
                }
                visitados.classList.add('ItemSelected');
                contenedor2.classList.add('Mostrar');
                setLisProductos(ListProdVisitados);
                }
            
    }

    useEffect(()=>{
        toggleSwitch("ProdSimil");
    },[]);

    return ( 
        <div class="container">
            <h4>Compará con otros productos similares</h4>
            <div class="row mt-5 mb-4">
                <div class="col-6 text-center border-bottom fw-bold hoverLink" id="ProdSimil" onClick={()=>toggleSwitch("ProdSimil")}>Productos Similares</div>
                <div class="col-6 text-center border-bottom fw-bold hoverLink" id="VisitRec" onClick={()=>toggleSwitch("VisitRec")}>Visitados Recientemente</div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-3">
                    <div class="card border-0" style={{width: '15rem'}}>
                    <img class="card-img-top d-flex m-auto ImageMD" src={producto.img} alt="Card image producto"/>
                        <div class="card-body text-center">
                            <h5 class="card-title p-0" style={{fontSize:'14px'}}>{producto.titulosm}</h5>
                            <p class="text-secondary">(Este producto)</p>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="Ocultar" id="MuetraProdSimil">
                        <MostrarSimilares productos={ListProdSimilares} categoria={producto.categoria}/>
                    </div>
                    <div class="Ocultar" id="MuetraProdVisit">
                        <MostrarSimilares productos={ListProdVisitados} categoria={producto.categoria}/>
                    </div>
                </div>
                <div>
                    <TablaDescSimilares productos={ListProductos} categoria={producto.categoria}/>
                </div>
            </div>
        </div>
     );
}
 
export default ProductosSimilares;
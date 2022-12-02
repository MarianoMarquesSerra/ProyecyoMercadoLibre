import { BiChevronRight } from "react-icons/bi";
import { TbLetterI } from "react-icons/tb";
import DescripcionProducto from "../componentes/DescripcionProducto";
import HeaderProducto from "../componentes/HeaderProducto";
import Navbar from "../componentes/Navbar";
import PreguntasyRespuestas from "../componentes/PreguntasyRespuestas";
import ProductosSimilares from "../componentes/ProductosSimilares";
import TablaDescSimilares from "../componentes/TablaDescSimilares";


const VistaProducto = () => {
    return ( 
        <div className="bg-page">
            <div id="cabecera">
                <Navbar/>
            </div>
            <div class="bg-page">
            <div class="container">               
                <div class="row mb-2">
                <p class="pt-3" style={{fontSize:'15px'}}><span style={{fontWeight:'bold'}}>También puede interesarte: </span>guitarra eléctrica - prs sky</p>
                    <div class="col-8">
                        <a>Volver al listado <TbLetterI/> </a>
                        <a><span class="text-primary">Instrumentos Musicales </span><span style={{fontSize:'19px'}}><BiChevronRight/></span> </a>
                        <a><span class="text-primary">Instrumentos de Cuerdas </span> <span style={{fontSize:'19px'}}><BiChevronRight/></span> </a>
                        <a><span class="text-primary">Guitarras </span> <span style={{fontSize:'19px'}}><BiChevronRight/></span> </a>
                        <a><span class="text-primary">Eléctricas </span></a>
                    </div>
                    <div class="col-2 offset-md-2">
                        <a><span class="text-primary">Compartir <span style={{color:'black'}}><TbLetterI/></span> </span></a>
                        <a><span class="text-primary">Vender </span></a>
                    </div>
                </div>
            </div>

            <div class="container bg-white">
                <div class="row">
                    <div class="col-8">
                        <DescripcionProducto/>
                    </div>
                    <div class="col-4">
                        <HeaderProducto/>
                    </div>
                </div>
                <hr></hr>
                <div class="mt-5 mb-5">
                    <ProductosSimilares/>
                </div>
                <hr></hr>
                <div class="mt-5 mb-5">
                    <PreguntasyRespuestas/>
                </div>
                <hr></hr>
                &nbsp;&nbsp;
            </div>
            </div>
            <div className="container mt-4">
                <h4>También te puede interesar</h4>
            </div>
            <div className="container mt-4">

            </div>
        </div>
     );
}
 
export default VistaProducto;
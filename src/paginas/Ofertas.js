import { AiOutlineArrowLeft,AiOutlineDown } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Inspiradoenloultimo from "../componentes/MostrarProductos";
import Slider from "../componentes/Slider";
import ListOfertas from "../apis/ListOfertas";
import ListProductos from "../apis/ListProductos";
import Navbar from "../componentes/Navbar";


const Ofertas = () => {
    return ( 
        <>  
            <div className="d-none d-md-block">
                <Navbar/>
            </div>
            <div class="w-100 colorMenu fixed-top d-md-none d-sm-block">
                <NavLink style={{ textDecoration: 'none', color:"black" }} to="/"><h4><AiOutlineArrowLeft/>&nbsp;&nbsp;Ofertas</h4></NavLink>
            </div>
            <div class="row w-100 mt-5 border-bottom">
                <div class="col-5 mx-2">
                    <p>10.000 productos</p>
                </div>
                <div class="col-6 text-end">
                    <p style={{color:'blue'}}>Filtrar&nbsp;<AiOutlineDown/></p>
                </div>
            </div>

            <Slider productos={ListOfertas}
                    typeImg={false}
                    topDerecho={-370}/> 
            <div class="mt-5">
            <Inspiradoenloultimo productosVisitados={ListProductos} titulo="Inspirado en lo último que viste"/>
            </div>
        </>
     );
}
 
export default Ofertas;
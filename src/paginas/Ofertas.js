import { AiOutlineArrowLeft,AiOutlineDown } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Inspiradoenloultimo from "../componentes/Inspiradoenloultimo";
import Slider from "../componentes/Slider";

const Ofertas = () => {
    return ( 
        <>
            <div class="w-100 colorMenu fixed-top">
                <NavLink style={{ textDecoration: 'none', color:"black" }} to="/"><h4><AiOutlineArrowLeft/>&nbsp;&nbsp;Ofertas</h4></NavLink>
            </div>
            <div class="row w-100 border-bottom">
                <div class="col-5 mx-2">
                    <p>100 productos</p>
                </div>
                <div class="col-6 text-end">
                    <p>Filtrar&nbsp;<AiOutlineDown/></p>
                </div>
            </div>

            <Slider img1={require('../images/TodaslasOfertas.jpg')} 
                    img2={require('../images/OfertasRelampago.jpg')} 
                    img3={require('../images/Electrohogar.jpg')} 
                    img4={require('../images/Celulares.jpg')} 
                    img5={require('../images/Notebooks.jpg')}
                    txt1="Todas las ofertas"
                    txt2="Ofertas relampago"
                    txt3="¡Especial Eletohogar!"
                    txt4="Celulares"
                    txt5="Notebooks"
                    topDerecho={-370}/> 
            <div class="mt-5">
            <Inspiradoenloultimo/>
            </div>
        </>
     );
}
 
export default Ofertas;
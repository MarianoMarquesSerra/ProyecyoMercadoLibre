import { AiOutlineArrowLeft,AiOutlineDown } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Inspiradoenloultimo from "../componentes/MostrarProductos";
import Carrousel from "../componentes/Carrousel";
import Ofertassuper from "../componentes/Ofertassuper";
import BuscaporDep from "../componentes/BuscaporDep";
import SliderSuper from "../componentes/SliderSuper";
import ListArticulosSuper from "../apis/ListArticulosSuper"
import ListProductos from "../apis/ListProductos";

const Super = () => {
    return ( 
        <>
            <div class="w-100 colorMenu fixed-top">
                <NavLink style={{ textDecoration: 'none', color:"black" }} to="/"><h4><AiOutlineArrowLeft/>&nbsp;&nbsp;Supermercado</h4></NavLink>
            </div>
            <div class="MarginTop">
                <Carrousel img1={require('../images/Captura4.jpg')} img2={require('../images/Captura5.jpg')} img3={require('../images/Captura6.jpg')}/>
            </div>

            <Ofertassuper/> 
            <div class="p-4 fondo">
                <img src={require('../images/Super1.jpg')} class="img-fluid rounded" alt="Responsive image"/>
            </div>
            <div class="p-4 fondo">
                <img src={require('../images/Super2.jpg')} class="img-fluid rounded" alt="Responsive image"/>
            </div>
            <BuscaporDep/>
            <Inspiradoenloultimo productosVisitados={ListProductos} titulo="Inspirado en lo último que viste"/>
            <SliderSuper productos = {ListArticulosSuper} Topedesplazamiento={-470}/>
            <div class="card-body p-2 fondo">
                <p>"Promoción válida en Argentina. Descuentos de hasta 50% del precio de compra (excluido el envío) para productos seleccionados de consumo inmediato con fecha de vencimiento dentro de los 30 días posteriores. Ofertas a cargo de cada usuario vendedor, sujetas a disponibilidad de los productos ofertados y a las condiciones establecidas por éste en cada anuncio." (1) Las promociones publicadas son meramente ejemplificativas de una o más ofertas realizadas en forma directa por los usuarios vendedores dentro de la categoría de Supermercado del sitio. La disponibilidad, vigencia y el monto de tales ofertas son definidas exclusivamente por los usuarios vendedores a través de sus respectivas publicaciones. (2) BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS. (3) Envios gratis en productos seleccionados sujeto al peso, precio y la distancia del envío. Imágenes de referencia.</p>
            </div>
        </>
     );
}
 
export default Super;
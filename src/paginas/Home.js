import Navbar from "../componentes/Navbar";
import Carrousel from "../componentes/Carrousel";
import Botones from "../componentes/Botones";
import Oferta from "../componentes/Oferta";
import VistoReciente from "../componentes/MostrarProductos";
import Ofertadeldia from "../componentes/MostrarProductos";
import Beneficios from "../componentes/Beneficios";
import BeneficioMercadoPuntos from "../componentes/BeneficioMercadoPuntos";
import Inspiradoenloultimo from "../componentes/MostrarProductos";
import Categorias from "../componentes/Categorias";
import ListMenu from '../apis/ListMenuPrincipal';
import "../App.css";
import ListProductos from "../apis/ListProductos";
import ListOfertasHome from "../apis/ListOfertasHome";
import ListInspiradoUltimo from "../apis/ListInspiradoUltimo";

const Home = () => {
    return ( 
        <>
        <div id="cabecera">
            <Navbar/>
        </div>
          <div id="cuerpo">
            <Carrousel img1={require('../images/Captura1.jpg')} img2={require('../images/Captura2.jpg')} img3={require('../images/Captura3.jpg')}/>
            <Botones items={ListMenu} fondo={'rgba(192, 192, 192, 0.281)'}/>
            <Oferta/>
            <VistoReciente productosVisitados={ListProductos} titulo="Visto Recientemente"/>
            <Ofertadeldia productosVisitados={ListOfertasHome} titulo="Oferta del día"/>
            <Beneficios/>
            <BeneficioMercadoPuntos/>
            <Inspiradoenloultimo productosVisitados={ListInspiradoUltimo} titulo="Inspirado en le último que viste"/>
            <Categorias/>
          </div>
        </>
     );
}
 
export default Home;
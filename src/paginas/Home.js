import Navbar from "../componentes/Navbar";
import Carrousel from "../componentes/Carrousel";
import Botones from "../componentes/Botones";
import Oferta from "../componentes/Oferta";
import VistoReciente from "../componentes/VistoReciente";
import Ofertadeldia from "../componentes/Ofertadeldia";
import Beneficios from "../componentes/Beneficios";
import BeneficioMercadoPuntos from "../componentes/BeneficioMercadoPuntos";
import Inspiradoenloultimo from "../componentes/Inspiradoenloultimo";
import Categorias from "../componentes/Categorias";
import "../App.css";

const Home = () => {
    return ( 
        <>
        <div id="cabecera">
            <Navbar/>
        </div>
          <div id="cuerpo">
            <Carrousel img1={require('../images/Captura1.jpg')} img2={require('../images/Captura2.jpg')} img3={require('../images/Captura3.jpg')}/>
            <Botones/>
            <Oferta/>
            <VistoReciente/>
            <Ofertadeldia/>
            <Beneficios/>
            <BeneficioMercadoPuntos/>
            <Inspiradoenloultimo/>
            <Categorias/>
          </div>
        </>
     );
}
 
export default Home;
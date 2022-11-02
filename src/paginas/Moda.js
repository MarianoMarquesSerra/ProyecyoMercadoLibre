import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import SlideModa from "../componentes/SlideModa";
import ListLogosModa from "../apis/ListLogosModa";
import Carrousel from "../componentes/Carrousel";
import OfertasModa from "../componentes/OfertasModa";
import MejoresOfertasModa from "../componentes/MejoresOfertasModa";
import PromocionesModa from "../componentes/PromocionesModa";

const Moda = () => {
    return ( 
        <>
            <div class="w-100 colorMenu fixed-top">
               <NavLink style={{ textDecoration: 'none', color:"black" }} to="/"><h4><AiOutlineArrowLeft/>&nbsp;&nbsp;Ropa y Accesorios</h4></NavLink>
            </div>
            <div>
                <SlideModa productos = {ListLogosModa} Topedesplazamiento={-10}/>
            </div>
            <Carrousel img1="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1666709327580-home-sliderdesktopcolores.jpg" 
            img2="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1666017971718-home-sliderdesktopzapatillas.jpg" 
            img3="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1665759703141-homesliderdesktop47.jpg"/>

            <OfertasModa
            img1={require('../images/PrimeraCompra.jpg')}
            img2={require('../images/Adicional1.jpg')}
            img3={require('../images/Adicional2.jpg')}
            titulo="¡APROVECHÁ ESTOS DESCUENTOS!"/>

            <MejoresOfertasModa
            img1={require('../images/Zapatillas.jpg')}
            img2={require('../images/RemerasyChombas.jpg')}
            img3={require('../images/Anteojos.jpg')}
            titulo="DESCUBRÍ LAS MEJORES OFERTAS"/>

            <div class="row col-12 ContenedorOferta mb-3">
                <img class="col-12 p-2 img-fluid ImgOferta" src={require('../images/SandaliasyOjotas.jpg')} alt="AutosSanJorge.jpg"/>
            </div>

            <PromocionesModa
            img1={require('../images/PantalonesyShorts.jpg')}
            img2={require('../images/MochilasyValijas.jpg')}/>

            <div className="container-fluid pt-3">
                <button type="button" class="btn btn-primary d-flex m-auto">Ver todo en indumentaria y calzado</button>
            </div>

            <div class="row col-12 ContenedorOferta mb-3">
                <img class="col-12 p-2 img-fluid ImgOferta" src={require('../images/ArticulosSeleccionados.jpg')} alt="AutosSanJorge.jpg"/>
            </div>

            <div className="text-center">
                <h5>TUS MARCAS PREFERIDAS</h5>
                <div class="row col-12 ContenedorOferta mb-3">
                    <img class="col-12 p-2 img-fluid ImgOferta" src={require('../images/ilove47.jpg')} alt="AutosSanJorge.jpg"/>
                </div>
            </div>

            <OfertasModa
            img1={require('../images/Infinity.jpg')}
            img2={require('../images/Briganti.jpg')}
            img3={require('../images/Portsaid.jpg')}/>

            <OfertasModa
            img1={require('../images/Havaianas.jpg')}
            img2={require('../images/Atomik.jpg')}
            img3={require('../images/RayBan.jpg')}/>

            <div class="row col-12 ContenedorOferta mb-3">
                <img class="col-12 p-2 img-fluid ImgOferta" src={require('../images/Equus.jpg')} alt="AutosSanJorge.jpg"/>
            </div>

        </>
     );
}
 
export default Moda;
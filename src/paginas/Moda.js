import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import SlideModa from "../componentes/SlideModa";
import ListLogosModa from "../apis/ListLogosModa";
import Carrousel from "../componentes/Carrousel";
import OfertasModa from "../componentes/OfertasModa";
import MejoresOfertasModa from "../componentes/MejoresOfertasModa";
import PromocionesModa from "../componentes/PromocionesModa";
import Slider from "../componentes/Slider";
import LisIconosModa from "../apis/ListIconosModa";
import MenuModa from "../componentes/MenuModa";

const Moda = () => {
    return ( 
        <>
            <div class="w-100 colorMenu fixed-top">
               <NavLink style={{ textDecoration: 'none', color:"black" }} to="/"><h4><AiOutlineArrowLeft/>&nbsp;&nbsp;Ropa y Accesorios</h4></NavLink>
            </div>
            <div>
                <SlideModa productos = {ListLogosModa} Topedesplazamiento={-270}/>
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

            <div class="row col-11 ContenedorOferta mb-3">
                <img class="col-12 p-2 img-fluid ImgOferta" src={require('../images/SandaliasyOjotas.jpg')} alt="AutosSanJorge.jpg"/>
            </div>

            <PromocionesModa
            img1={require('../images/PantalonesyShorts.jpg')}
            img2={require('../images/MochilasyValijas.jpg')}/>

            <div className="container-fluid col-11 pt-3">
                <button type="button" class="btn btn-primary d-flex m-auto p-2">Ver todo en indumentaria y calzado</button>
            </div>

            <div class="row col-11 ContenedorOferta mb-3">
                <img class="col-12 p-2 img-fluid ImgOferta" src={require('../images/ArticulosSeleccionados.jpg')} alt="AutosSanJorge.jpg"/>
            </div>

            <div className="text-center">
                <h5>TUS MARCAS PREFERIDAS</h5>
                <div class="row col-11 ContenedorOferta mb-3">
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

            <div class="row col-11 ContenedorOferta mb-3">
                <img class="col-12 p-2 img-fluid ImgOferta" src={require('../images/Equus.jpg')} alt="AutosSanJorge.jpg"/>
            </div>

            <Slider 
              productos={LisIconosModa}
              typeImg={true}
              topDerecho={-1650}/>

            <div className="container-fluid pt-3">
                <button type="button" class="btn btn-primary d-flex m-auto p-2">Ver todas las tiendas oficiales</button>
            </div>

            <div class="container-fluid col-11 d-flex mt-4">
                <div class="row">
                    <div class="col-12 col-md-6 p-2">
                        <img class="img-fluid rounded" src={require('../images/Línea de Crédito.jpg')} alt="Foto línea de crédito"></img>
                    </div>
                    <div class="col-12 col-md-6 p-2">
                        <img class="img-fluid rounded" src={require('../images/Impacto Positivo.jpg')} alt="Foto Impacto Positivo"></img>
                    </div>
                </div>
            </div>
            <div class="container-fluid col-11 mt-3">
                <div class="row">
                    <p style={{fontSize:'12px'}}>CYBER MONDAY. Válido del 31/10/22 al 02/11/22 en productos seleccionados sujeto a Términos y Condiciones. Para más información consulte en www.mercadolibre.com.ar</p>
                </div>
                <div class="row mt-4">
                    <p style={{fontSize:'12px'}}>MERCADO CRÉDITO. Beneficio válido en Argentina (i) desde el 18/07/2022 hasta el 31/12/2022, ambas fechas inclusive; o (ii) hasta agotar stock de 999999998 cupones; o (iii) hasta alcanzar la suma de $ 2000000 en concepto de descuentos otorgados a los Usuarios, lo que ocurra primero, para pagos realizados a través del servicio de gestión de pagos de Mercado Pago operado por MercadoLibre S.R.L. (“Mercado Pago”) a través del - con las apps de Mercado Libre o Mercado Pago. El beneficio consiste en un 20% en tu primera compra pagando exclusivamente con Mercado Crédito. El tope de descuento del Beneficio es de $ 850 por Usuario de Mercado Pago. Descuento no acumulable con otras promociones y/o beneficios vigentes en los comercios. Mercado Pago no es una entidad financiera. Los fondos en cuentas de pago no son depósitos garantizados. MercadoLibre S.R.L. CUIT 30-70308853-4, Caseros 3039, Piso 2º, CABA.</p>
                </div>
                <div class="row mt-4">
                    <p style={{fontSize:'12px'}}>MACRO. Cartera de consumo. TNA (tasa Nominal Anual) 0.00%, CFT (costo ﬁnanciero total Nominal Anual) 0.00%. Promoción válida en la República Argentina para compras realizadas entre las 00.00 horas del 31/10/22 hasta las 23.59 horas del 7/11/22. El beneﬁcio consiste en hasta 9 cuotas sin interés, para compras de productos seleccionados realizadas a través de la plataforma de Mercado Libre S.R.L. (disponible en mercadolibre.com.ar/sin-intereses) abonadas con las Tarjetas de Crédito emitidas por Banco Macro SA, exclusivamente a través del servicio de gestión de pagos de Mercado Pago operado por Mercado Libre S.R.L. Mercado Pago no es una entidad financiera. Los fondos en cuentas de pago no son depósitos garantizados. MercadoLibre S.R.L. CUIT 30-70308853-4, Caseros 3039, Piso 2º, CABA. Para más información consulta en http://www.mercadolibre.com.ar/l/sin-intereses.</p>
                </div>
                <div class="row">
                    <p style={{fontSize:'12px'}}>HSBC. Válido del 31/10/2022 al 07/11/2022 en productos seleccionados sujeto a Términos y Condiciones. Para más información consulte en Sección Promociones.</p>
                </div>
            </div>
            <div class="container-fluid col-11 mt-5">
                <h4>Ropa y Accesorios</h4>
            </div>
            <MenuModa/>
        </>
     );
}
 
export default Moda;
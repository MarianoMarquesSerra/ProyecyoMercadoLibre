import { AiOutlineUp } from "react-icons/ai";

const FooterProductos = () => {
    var valor=false;

    function mostrarOcultar(mostrar){
        var contenedor = document.getElementById('listadoFooter');
        var Icono = document.getElementById("iconoFlecha");

        if(mostrar){
            if(contenedor.classList.contains('Ocultar')){
                Icono.classList.remove("iconArrowRotarAbajo");
                contenedor.classList.remove('Ocultar');
            }
            Icono.classList.add("iconArrowRotarArriba");
            contenedor.classList.add('Mostrar');
            valor=true;
        }else {
            if(contenedor.classList.contains('Mostrar')){
                Icono.classList.remove("iconArrowRotarArriba");
                contenedor.classList.remove('Mostrar');
            }
            Icono.classList.add("iconArrowRotarAbajo");
            contenedor.classList.add('Ocultar');
            valor=false;
        }
    }

    return ( 
        <div>
            <div className="container">
                <div className="bg-light mx-auto mb-0 d-flex justify-content-center px-2" style={{width:'160px', height:'30px',borderRadius:'5px'}} onClick={()=>mostrarOcultar(!valor)}>
                    <p style={{fontSize:'13px'}}>Más información <AiOutlineUp id="iconoFlecha"/></p>
                </div>
            </div>
            <div className="bg-light contenedorFooter Ocultar" id="listadoFooter">
                <div className="row d-flex justify-content-center">
                    <div className="col-2" style={{width:'12rem'}}>
                        <ul style={{fontSize:'13px'}}>
                            <li className="fw-bold">Acerca de</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Mercado Libre</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Investor Relations</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Tendencias</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Sustentabilidad</li>
                        </ul>
                    </div>
                    <div className="col-2" style={{width:'11rem'}}>
                        <ul style={{fontSize:'13px'}}>
                            <li className="fw-bold">Otros sitios</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Developers</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Mercado Pago</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Mercado Shops</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Mercado Envíos</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Mercado Ads</li>
                        </ul>
                    </div>
                    <div className="col-2" style={{width:'14rem'}}>
                        <ul style={{fontSize:'13px'}}>
                            <li className="fw-bold">Ayuda</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Comprar</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Vender</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Resolución de problemas</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Centro de seguridad</li>
                        </ul>
                    </div>
                    <div className="col-2" style={{width:'11rem'}}>
                        <ul style={{fontSize:'13px'}}>
                            <li className="fw-bold">Redes sociales</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Twitter</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Facebook</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Instagram</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>YouTube</li>
                        </ul>
                    </div>
                    <div className="col-2" style={{width:'10rem'}}>
                        <ul style={{fontSize:'13px'}}>
                            <li className="fw-bold">Mi cuenta</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Resumen</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Favoritos</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Vender</li>
                        </ul>
                    </div>
                    <div className="col-2" style={{width:'12rem'}}>
                        <ul style={{fontSize:'13px'}}>
                            <li className="fw-bold">Mercado Puntos</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Nivel 6</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Disney+</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Star+</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>HBO MAX</li>
                            <li className="text-secondary" style={{lineHeight:'0px'}}>Paramount+</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-light text-center d-flex justify-content-center t-1 p-0 m-0">
                <ul id="listaFooter" style={{fontSize:'13px',lineHeight:'0px',marginTop:'0px'}}>
                    <li style={{lineHeight:'0px'}}><a>Trabajá con nosotros</a></li>
                    <li style={{lineHeight:'0px'}}><a>Términos y condiciones</a></li>
                    <li style={{lineHeight:'0px'}}><a>Cómo cuidamos tu privacidad</a></li>
                    <li style={{lineHeight:'0px'}}><a>Accesibilidad</a></li>
                    <li style={{lineHeight:'0px'}}><a>Información al usuario financiero</a></li>
                    <li style={{lineHeight:'0px'}}><a>Ayuda</a></li>
                    <li style={{lineHeight:'0px'}}><a>Defensa del Consumidor</a></li>
                    <li style={{lineHeight:'0px'}}><a>Información sobre seguros</a></li>
                </ul>
            </div>
            <div className="bg-light text-secondary" style={{paddingLeft:'110px'}}>
                <p style={{fontSize:'12px',lineHeight:'0px'}}>Copyright © 1999-2022 MercadoLibre S.R.L.</p>
                <p style={{fontSize:'12px',lineHeight:'0px'}}>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
            </div>
        </div>
     );
}
 
export default FooterProductos;
const FooterProductos = () => {
    var valor=false;

    function mostrarOcultar(mostrar){
        var contenedor = document.getElementById('listadoFooter');

        if(mostrar){
            if(contenedor.classList.contains('Ocultar')){
                contenedor.classList.remove('Ocultar');
            }
            contenedor.classList.add('Mostrar');
            valor=true;
        }else {
            if(contenedor.classList.contains('Mostrar')){
                contenedor.classList.remove('Mostrar');
            }
            contenedor.classList.add('Ocultar');
            valor=false;
        }
    }

    return ( 
        <div>
            <div className="text-center bg-light" onClick={()=>mostrarOcultar(!valor)}>
                <p className="text-center bg-light" style={{lineHeight:'0px'}}>Más información</p>
            </div>
            <div className="container bg-light Ocultar" id="listadoFooter">
                <div className="row">
                    <div className="col-2">
                        <ul style={{fontSize:'14px'}}>
                            <li className="fw-bold">Acerca de</li>
                            <li style={{lineHeight:'0px'}}>Mercado Libre</li>
                            <li style={{lineHeight:'0px'}}>Investor Relations</li>
                            <li style={{lineHeight:'0px'}}>Tendencias</li>
                            <li style={{lineHeight:'0px'}}>Sustentabilidad</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul style={{fontSize:'14px'}}>
                            <li className="fw-bold">Otros sitios</li>
                            <li style={{lineHeight:'0px'}}>Developers</li>
                            <li style={{lineHeight:'0px'}}>Mercado Pago</li>
                            <li style={{lineHeight:'0px'}}>Mercado Shops</li>
                            <li style={{lineHeight:'0px'}}>Mercado Envíos</li>
                            <li style={{lineHeight:'0px'}}>Mercado Ads</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul style={{fontSize:'14px'}}>
                            <li className="fw-bold">Ayuda</li>
                            <li style={{lineHeight:'0px'}}>Comprar</li>
                            <li style={{lineHeight:'0px'}}>Vender</li>
                            <li style={{lineHeight:'0px'}}>Resolución de problemas</li>
                            <li style={{lineHeight:'0px'}}>Centro de seguridad</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul style={{fontSize:'14px'}}>
                            <li className="fw-bold">Redes sociales</li>
                            <li style={{lineHeight:'0px'}}>Twitter</li>
                            <li style={{lineHeight:'0px'}}>Facebook</li>
                            <li style={{lineHeight:'0px'}}>Instagram</li>
                            <li style={{lineHeight:'0px'}}>YouTube</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul style={{fontSize:'14px'}}>
                            <li className="fw-bold">Mi cuenta</li>
                            <li style={{lineHeight:'0px'}}>Resumen</li>
                            <li style={{lineHeight:'0px'}}>Favoritos</li>
                            <li style={{lineHeight:'0px'}}>Vender</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul style={{fontSize:'14px'}}>
                            <li className="fw-bold">Mercado Puntos</li>
                            <li style={{lineHeight:'0px'}}>Nivel 6</li>
                            <li style={{lineHeight:'0px'}}>Disney+</li>
                            <li style={{lineHeight:'0px'}}>Star+</li>
                            <li style={{lineHeight:'0px'}}>HBO MAX</li>
                            <li style={{lineHeight:'0px'}}>Paramount+</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FooterProductos;
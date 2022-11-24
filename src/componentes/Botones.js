import React from "react";
import Qr from '../images/QR.jpg';
import Etiqueta from '../images/Etiqueta.jpg';
import Super from '../images/Super.jpg';
import Auto from '../images/Auto.jpg';
import Remera from '../images/Remera.jpg';
import Mas from '../images/Mas.jpg';
import { NavLink } from "react-router-dom";


const Botones = () => {
    return (      

        <div class="row col-12 d-block d-md-none p-4 mx-auto fondo">
            <div class="contenedorBotones">
                <nav>
                <div class="contenedorBoton">
                   <div class="col-2  BotonRedondo me-2">
                    <NavLink style={{ textDecoration: 'none', color:"black" }} to="/qr">
                        <img class="Icono" src={Qr}/>                    
                        <div className="TituloBoton"><p>Pago QR</p></div>
                    </NavLink>
                    </div>
                </div>
                <div class="contenedorBoton">
                   <div class="col-2  BotonRedondo me-2">
                    <NavLink style={{ textDecoration: 'none', color:"black" }} to="/ofertas">                        
                       <img class="Icono" src={Etiqueta}/>                   
                       <div className="TituloBoton"><p>Ofertas</p></div>
                    </NavLink>
                    </div>
                </div>
                <div class="contenedorBoton">
                   <div class="col-2  BotonRedondo me-2">
                    <NavLink style={{ textDecoration: 'none', color:"black" }} to="/super">                        
                        <img class="Icono" src={Super}/>                   
                        <div className="TituloBoton"><p>Super</p></div>
                    </NavLink>
                    </div>
                </div>
                <div class="contenedorBoton">
                   <div class="col-2  BotonRedondo me-2">
                    <NavLink style={{ textDecoration: 'none', color:"black" }} to="/vehiculos">                        
                        <img class="Icono" src={Auto}/>                   
                        <div className="TituloBoton"><p>Vehículos</p></div>
                    </NavLink>
                    </div>
                </div>
                <div class="contenedorBoton">
                   <div class="col-2  BotonRedondo me-2">
                    <NavLink style={{ textDecoration: 'none', color:"black" }} to="/moda">                        
                        <img class="Icono" src={Remera}/>                  
                        <div className="TituloBoton"><p>Moda</p></div>           
                    </NavLink>
                 </div>
                </div>
                <div class="contenedorBoton">
                   <div class="col-2  BotonRedondo me-2">
                    <NavLink style={{ textDecoration: 'none', color:"black" }} to="/vermas">                        
                        <img class="Icono" src={Mas}/>                    
                        <div className="TituloBoton"><p>Ver más</p></div>
                    </NavLink>
                    </div>
                </div>
                </nav>
            </div>
        </div>
     );
}
 
export default Botones;
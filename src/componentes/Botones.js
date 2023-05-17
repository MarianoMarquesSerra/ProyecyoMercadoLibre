import React from "react";
import { NavLink } from "react-router-dom";



const Botones = ({items,fondo}) => {
    return (      

        <div class="row col-12 d-block d-md-none p-4 mx-auto" style={{backgroundColor:fondo}}>
            <div class="contenedorBotones">
                <nav>
                    <div class="row">
                    {
                            items.map((item,i)=>{
                                if(i<5){
                                    return(
                                        <div class="contenedorBoton m-2 mb-5">
                                           <div class="col-2  BotonRedondo me-2">
                                            <NavLink style={{ textDecoration: 'none', color:"black" }} to={item.link}>
                                                <img class="Icono" src={item.img}/>                    
                                                <div className="TituloBoton"><p>{item.txt}</p></div>
                                            </NavLink>
                                            </div>
                                        </div>
                                    )
                                }
                                else{
                                    return(
                                        <div class="contenedorBoton m-2 mb-5" key={i}>
                                            <div class="col-2  BotonRedondo me-2">
                                             <NavLink style={{ textDecoration: 'none', color:"black" }} to={items[i].link}>
                                                 <img class="Icono" src={items[i].img}/>                    
                                                 <div className="TituloBoton"><p>{items[i].txt}</p></div>
                                             </NavLink>
                                             </div>
                                        </div>
                                    )
                                }
                        })
                    }
                    </div>
                </nav>
            </div>
        </div>
     );
}
 
export default Botones;
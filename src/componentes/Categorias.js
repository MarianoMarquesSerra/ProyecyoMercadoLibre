import React from 'react';
import { BiChevronRight } from "react-icons/bi";
import {IoCarOutline, IoPhonePortraitSharp, IoShirtOutline, IoBedOutline, IoTvOutline, IoMicOutline} from "react-icons/io5";

const Categorias = () => {
    return ( 
        <div className='col-12 p-4 fondo'>
            <div class="card mb-3" >
                <div class="row g-0">
                  <div class="card-header">
                      <h6 class="text-left">Categorías</h6>
                  </div>
                  <div class="col-12">
                  <ul>
                    <li><IoCarOutline size={30} color={"blue"}/>&nbsp;&nbsp;Autos, Motos y Otros</li>
                    <hr/>
                    <li><IoPhonePortraitSharp size={30} color={"blue"}/>&nbsp;&nbsp;Celulares y Teléfonos</li>
                    <hr/>
                    <li><IoShirtOutline size={30} color={"blue"}/>&nbsp;&nbsp;Ropa y Accesorios</li>
                    <hr/>
                    <li><IoBedOutline size={30} color={"blue"}/>&nbsp;&nbsp;Hogar, muebles y Jardín</li>
                    <hr/>
                    <li><IoTvOutline size={30} color={"blue"}/>&nbsp;&nbsp;Electrodomésticos y Aires Ac.</li>
                    <hr/>
                    <li><IoMicOutline size={30} color={"blue"}/>&nbsp;&nbsp;Electrónica, Audio y Video</li>
                  </ul>
                  </div>
                  <div class="card-footer text-primary ContenedorCategoria">
                      <div class="ItemCategoria">
                        <a>Ver todas las categorías</a>
                      </div>
                      <div class="ItemFlecha">
                        <a><BiChevronRight/></a>
                      </div>
                  </div>
                </div>
            </div>
        </div>
     );
}
 
export default Categorias;
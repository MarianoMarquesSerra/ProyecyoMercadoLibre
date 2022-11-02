import React from 'react';
import Guitarra from '../images/Guitarra.jpg';
import { BiChevronRight } from "react-icons/bi";

const VistoReciente = () => {
    return ( 
        <div className='col-12  col-xl-6 d-inline-block px-4 py-2 fondo'>
            <div class="card mb-3 tamañoCard" >
                <div class="row g-0">
                  <div class="card-header">
                      <h6 class="text-left">Visto recientemente</h6>
                  </div>
                  <div class="col-4 col-xl-10">
                    <img src={Guitarra} id="ImgVisto" alt="Imagen Guitarra"/>
                  </div>
                  <div class="col-8">
                    <div class="card-body tamañoBody" id="Visibilidad">
                      <p class="card-text">Guitarra Fender Am Standard Stratocaster Hss Limited Edition</p>
                      <p><b>$ 650.000</b></p>
                      <p class="text-success">6x 108.333 sin interés</p>
                    </div>
                  </div>
                  <div class="card-footer text-primary">
                    <div class="row col-12">
                      <div class="col-11">
                        <a>Ver historial de navegación</a>
                      </div>
                      <div class="col-1">
                        <a><BiChevronRight/></a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
     );
}
 
export default VistoReciente;
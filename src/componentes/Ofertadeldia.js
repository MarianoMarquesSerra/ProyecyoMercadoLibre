import React from 'react';
import Bicicleta from '../images/Bicicleta.jpg';
import { BiChevronRight } from "react-icons/bi";

const Ofertadeldia = () => {
    return ( 
        <div className='col-12 col-xl-6 d-inline-block px-4 py-2 fondo'>
            <div class="card mb-3" >
                <div class="row g-0">
                  <div class="card-header">
                      <h6 class="text-left">Oferta del día</h6>
                  </div>
                  <div class="d-flex justify-content-center p-4">
                    <img src={Bicicleta} class="ImgOfertadeldia img-fluid" alt="Imagen Guitarra"/>
                  </div>
                  <div class="row">
                    <div class="card-body">
                      <p class="card-text">Bicicleta Rodado 26 Mountain Bike Color Azul 10283 - Siambreta</p>
                      <p><b>$ 51.891</b><span class="text-success"><small>13% OFF</small></span></p>
                      <p class="text-success"><b>Envío gratis</b></p>
                    </div>
                  </div>
                  <div class="card-footer text-primary">
                    <div class="row col-12">
                      <div class="col-11">
                        <a>Ver todas las ofertas</a>
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
 
export default Ofertadeldia;
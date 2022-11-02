import React from 'react';
import { BiChevronRight } from "react-icons/bi";
import Disney from "../images/Disney.jpg";
import Star from "../images/Star.jpg";
import Envio from "../images/Envio.jpg";

const Beneficios = () => {
    const style = {
        marginTop: 10,
        color: 'white',
        fontSize: 12
      };

    return ( 
        <div className='col-12 px-4 py-2 fondo'>
            <div class="card mb-3" >
                <div class="row g-0">
                  <div class="card-header ColorGradiente">
                      <div class="row col-12">
                         <div class="col-6 col-xl-8">
                           <h5 class="text-left text-white">Suscribite</h5>
                           <h5 class="text-left text-white">al nivel 6</h5>
                         </div>
                         <div class="col-1 fuenteBarra">|</div>
                         <div class="col-5 col-xl-3">
                           <h6 style={style} class="text-left text-white"><del>$ 1.439</del></h6>
                           <h6 class="text-left text-white">$ 499 /mes</h6>
                         </div>
                      </div>
                  </div>
                  <div class="px-4 py-2">
                    <h6>Conseguí los mejores beneficios en</h6>
                    <h6>Mercado Libre y Mercado Pago</h6>
                  </div>
                  <div class="row col-12 d-xl-inline-block">
                    <div class="card-body">
                      <div class="row col-12">
                        <div class="col-2">
                          <img class="Icono" src={Disney}/>
                        </div>
                        <div class="col-8 col-xl-4">
                          <p>Disney+ sin cargo</p>
                        </div>
                      </div>
                      <div class="row col-12">
                        <div class="col-2">
                          <img class="Icono" src={Star}/>
                        </div>
                        <div class="col-8 col-xl-4">
                          <p>Star+ sin cargo</p>
                        </div>
                      </div>
                      <div class="row col-12">
                        <div class="col-2">
                          <img class="Icono" src={Envio}/>
                        </div>
                        <div class="col-10  col-xl-4">
                          <p class="card-text">Envíos gratis y rápidos desde $5500 y 45% OFF en envíos de menos de $5.500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-primary">
                    <div class="row col-12">
                      <div class="col-11">
                        <a>Subscribite</a>
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
 
export default Beneficios;
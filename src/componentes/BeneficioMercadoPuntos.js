import React from 'react';
import { BiChevronRight } from "react-icons/bi";
import Espn from "../images/espn.jpg";
import Hbo from "../images/hbo.jpg";
import Paramount from "../images/paramount.jpg";

const BeneficioMercadoPuntos = () => {
    return ( 
        <div className='col-12 px-4 py-2 fondo'>
            <div class="card mb-3" >
                <div class="row g-0">
                  <div class="card-header">
                      <h6 class="text-left">Beneficios de Mercado Puntos</h6>
                  </div>
                  
                  <div class="row">
                    <div class="contenedorBeneficios">
                    <div class="card-body">
                      <div class="row col-12 gap-0">
                        <div class="col-xl-4"><img class="imgBeneficio sizeImage" src={Espn}/></div>
                        <div class="col-xl-4"><img  class="imgBeneficio sizeImage" src={Hbo}/></div>
                        <div class="col-xl-4"><img  class="imgBeneficio sizeImage" src={Paramount}/></div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="card-footer text-primary">
                    <div class="row col-12">
                      <div class="col-11">
                        <a>Ver todos los beneficios</a>
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
 
export default BeneficioMercadoPuntos;
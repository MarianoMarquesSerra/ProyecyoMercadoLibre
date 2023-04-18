import React from 'react';
import { BiChevronRight } from "react-icons/bi";
import ListAutosCamionetas from "../apis/ListAutosCamionetas.js";

const NoticiasAutosCamionetas = () => {
    return ( 
        <div className='col-12  col-xl-12 d-inline-block px-4 py-2 fondo'>
            <div class="card mb-3" >
                <div class="row col-12 g-0">
                  <div class="card-header">
                      <h6 class="text-center">NOTICIAS DE AUTOS, CAMIONETAS Y OTROS</h6>
                  </div>
                  <div class="row col-12 contenedorNoticias">
                    <div class="row contenedorNoticias">
                        {ListAutosCamionetas.map((producto, i) => {
                          return (
                          <div class="card-deck col-4 col-xl-4 col-xl-3 border" key={i}>
                          <img src={producto.img} class="card-img-top imgSizeAutos"/>
                          <div class="col-12">
                              <div class="card-body">
                                  <h6 class="card-text text-center fuenteTextos">{producto.desc}</h6>
                              </div>
                          </div>
                          </div>
                          )
                        })}
                    </div>
                    
                  </div>
                  
                  
                </div>
            </div>
        </div>
     );
}
 
export default NoticiasAutosCamionetas;
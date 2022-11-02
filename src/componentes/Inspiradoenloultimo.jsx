import React from 'react';
import { BiChevronRight } from "react-icons/bi";
import ListProductos from "../apis/ListProductos";

const Inspiradoenloultimo = () => {
    return ( 
        <div className='col-12  col-xl-12 d-inline-block px-4 py-2 fondo'>
            <div class="card mb-3" >
                <div class="row col-12 g-0">
                  <div class="card-header">
                      <h6 class="text-left">Inspirado en lo último que viste</h6>
                  </div>
                  <div class="row col-12">
                    {ListProductos.map((producto, i) => {
                      return (
                      <div class="col-6 col-xl-3 border" key={i}>
                      <img src={producto.img} class="ImgVisto"/>
                      <div class="col-12">
                          <div class="card-body">
                              <p class="card-text">{producto.desc}</p>
                              <p><b>$ {producto.precio}</b></p>
                              <p class="text-success">{producto.cuotas}</p>
                          </div>
                      </div>
                      </div>
                      )
                    })}
                    
                  </div>
                  
                  <div class="card-footer text-primary">
                    <div class="row col-12">
                      <div class="col-11">
                        <a>Ver más</a>
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
 
export default Inspiradoenloultimo;
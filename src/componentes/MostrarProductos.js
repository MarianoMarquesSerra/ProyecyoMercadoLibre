import React from 'react';
import { BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';


const MostrarProductos = ({productosVisitados,titulo}) => {
    return ( 
        <div className='col-12  col-xl-12 d-inline-block px-4 py-2 fondo'>
            <div class="card mb-3" >
                <div class="row col-12 g-0">
                  <div class="card-header">
                      <h6 class="text-left">{titulo}</h6>
                  </div>
                  <div class="row col-12">
                    {productosVisitados.map((producto, i) => {
                      return (
                      <div class="col-6 col-xl-3 border" key={i}>
                        <div class="text-center ImageContainer">
                          <NavLink to={`/vistaproducto/${producto.id}`}><img class="img-fluid imgSizeProd" src={producto.img}/></NavLink>
                        </div>
                        <div class="col-12 AlignEnd">
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
 
export default MostrarProductos;
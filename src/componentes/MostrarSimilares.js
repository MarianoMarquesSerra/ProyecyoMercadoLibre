import React from 'react';
import { map } from 'jquery';

const MostrarSimilares = ({productos}) => {
    return ( 
        <div class="container">
            <div class="row">
                {productos.map((producto, i)=>{
                    return(
                        <div class="card border-0" style={{width: '15rem'}}  key={i}>
                            <img class="card-img-top d-flex m-auto ImageMD" src={producto.img} alt="Card image cap"/>
                            <div class="card-body text-center">
                                <h5 class="card-title p-0" style={{fontSize:'14px'}}>{producto.desc}</h5>
                                <a href="#" class="text-decoration-none">Ver producto</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default MostrarSimilares;
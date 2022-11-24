import React from 'react';
import { BiChevronRight } from "react-icons/bi";


const CategoriasAutos = ({arreglo}) => {
    return ( 
        <div className='col-12 p-4'>
            <div class="card mb-3" >                   
                <div class="row g-0">                               
                  <div class="col-12">
                    <table>
                        {arreglo.map((item, i)=>{
                            return (
                                <tr>
                                        <td>
                                            <div class="ContenedorCategoria" key={i}>
                                                <a className="p-2" style={{textDecoration:'none', color:'black'}}>{item}</a>
                                                <a style={{fontSize:'30px'}}><BiChevronRight/></a>
                                            </div>
                                        </td>
                                    </tr>
                            )})
                        }
                    </table>
                    
                  </div>
                </div>
            </div>
        </div>
     );
}
 
export default CategoriasAutos;
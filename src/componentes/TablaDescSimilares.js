import { useState,useEffect } from 'react';

const TablaDescSimilares = ({productos,categoria}) => {
  const [cantVendidas,setcantVendidas] = useState([]);
  const ArrValoresProd = [["Precio","$ 1.473.260","$ 662.057","$ 574.999","$ 1.532475"],
                          ["Forma del cuerpo","Stratocaster","Stratocaster","Les Paul","Les Paul"],
                          ["Orientación de la mano","Diestro","Diestro","Diestro","Diestro"],
                          ["Color","Black","Olympic white","Smokehouse burst","Cobalt burst"],
                          ["Tipo de madera del cuerpo","Aliso/Fresno","Aliso","Arce/Caoba","Arce/Caoba"],
                          ["Material del diapasón","Arce","Arce","Palo de rosa","Palo de rosa"],
                          ["Acabado del cuerpo","Uretano Brillante","Brillante","Brillante","-"],
                          ["Modelo detallado","0111502806","-","LPST00KHCH1","-"],
                          ["Origen","-","Mexico","-","Mexico"]
                         ]
    return (
        <div class="container-fluid">
            <table class="tableStyleSimil">
                <tr class="border">
                  <th class="border fondoStrong">Opiniones</th>
                  <td class="border">
                    <div class="row">
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1" style={{fontSize:'14px', marginTop:'5px', color:'gray'}}>(0)</div>
                    </div>
                  </td>
                  <td class="border">
                    <div class="row">
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1" style={{fontSize:'14px', marginTop:'5px', color:'gray'}}>({productos.map(obj => {
                             if (obj.id === 1){
                               return obj.cantidad;
                             };
                             })})
                        </div>
                    </div>
                  </td>
                  <td class="border">
                    <div class="row">
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1" style={{fontSize:'14px', marginTop:'5px', color:'gray'}}>({productos.map(obj => {
                            if (obj.id === 2){
                             return obj.cantidad;
                            };
                            })})
                        </div>
                    </div>
                  </td>
                  <td class="border">
                    <div class="row">
                        <div class="col-1"><img src={require('../images/StarBlue.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarBlue.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarBlue.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarBlueMid.jpg')}/></div>
                        <div class="col-1" style={{fontSize:'14px', marginTop:'5px', color:'gray'}}>({productos.map(obj => {
                          if (obj.id === 3){
                            return obj.cantidad;
                          };
                          })})
                        </div>
                    </div>
                  </td>
                </tr>
               
                      {
                        ArrValoresProd.map(producto => {
                            return (
                              <tr>
                                {
                                  producto.map((proddetalle,i)=>{
                                       
                                      if(i==0){
                                        return <th class="border fondo" key={i}>{proddetalle}</th>
                                      }
                                      else{
                                        return     <td class="border" key={i}>{proddetalle}</td>
                                      }
                  
                                  })

                                }

                              </tr>
                            )
                        })
                      }
                      
                 
            </table>
        </div>
     );
}
 
export default TablaDescSimilares;
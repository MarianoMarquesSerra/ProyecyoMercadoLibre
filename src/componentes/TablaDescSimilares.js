import { useState,useEffect } from 'react';

const TablaDescSimilares = ({prodsimil,opiniones}) => {
  const [cantVendidas,setcantVendidas] = useState([]);
  console.log("Tiene esto asignado");
  console.log(prodsimil);
  console.log(opiniones);
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
                        <div class="col-1" style={{fontSize:'14px', marginTop:'5px', color:'gray'}}>({opiniones?.map(obj => {
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
                        <div class="col-1" style={{fontSize:'14px', marginTop:'5px', color:'gray'}}>({opiniones?.map(obj => {
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
                        <div class="col-1" style={{fontSize:'14px', marginTop:'5px', color:'gray'}}>({opiniones?.map(obj => {
                          if (obj.id === 3){
                            return obj.cantidad;
                          };
                          })})
                        </div>
                    </div>
                  </td>
                </tr>
               
                {
                        prodsimil?.map(producto => {
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
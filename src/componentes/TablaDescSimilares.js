const TablaDescSimilares = ({productos}) => {
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
                        <div class="col-1" style={{fontSize:'14px', marginTop:'5px', color:'gray'}}>(0)</div>
                    </div>
                  </td>
                  <td class="border">
                    <div class="row">
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarGrey.jpg')}/></div>
                        <div class="col-1" style={{fontSize:'14px', marginTop:'5px', color:'gray'}}>(2)</div>
                    </div>
                  </td>
                  <td class="border"><div class="row">
                        <div class="col-1"><img src={require('../images/StarBlue.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarBlue.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarBlue.jpg')}/></div>
                        <div class="col-1"><img src={require('../images/StarBlueMid.jpg')}/></div>
                        <div class="col-1" style={{fontSize:'14px', marginTop:'5px', color:'gray'}}>(38)</div>
                    </div></td>
                </tr>
                <tr class="border">
                  <th class="border fondo">Precio</th>
                  <td class="border">$ 1.473.260</td>
                  {productos.map((producto)=>{
                    return(

                        <td class="border">$ {producto.precio}</td>
                      
                    )})}
                </tr>
                <tr class="border">
                  <th class="border fondoStrong">Forma del cuerpo</th>
                  <td class="border">Stratocaster</td>
                  {productos.map((producto)=>{
                    return(

                        <td class="border">$ {producto.modelo}</td>
                      
                    )})}
                </tr>
                <tr class="border">
                  <th class="border fondo">Orientación de la mano</th>
                  <td class="border">Diestro</td>
                  {productos.map((producto)=>{
                    return(

                        <td class="border">$ {producto.orientacion}</td>
                    )
                  
                    })}
                </tr>
                <tr class="border">
                  <th class="border fondoStrong">Color</th>
                  <td class="border">Black</td>
                  {productos.map((producto)=>{
                    return(

                        <td class="border">$ {producto.color}</td>
                      
                    )})}
                </tr>
                <tr class="border">
                  <th class="border fondo">Tipo de madera del cuerpo</th>
                  <td class="border">Aliso/Fresno</td>
                  {productos.map((producto)=>{
                    return(

                        <td class="border">$ {producto.cuerpo}</td>
                      
                    )})}
                </tr>
                <tr class="border">
                  <th class="border fondoStrong">Material del diapasón</th>
                  <td class="border">Arce</td>
                  {productos.map((producto)=>{
                    return(

                        <td class="border">$ {producto.diapason}</td>
                    )
                  
                    })}
                </tr>
                <tr class="border">
                  <th class="border fondo">Acabado del cuerpo</th>
                  {productos.map((producto)=>{
                    return(

                        <td class="border">$ {producto.acabado}</td>
                    )
                  
                    })}
                </tr>
                <tr class="border">
                  <th class="border fondoStrong">Modelo detallado</th>
                  <td class="border">0111502806</td>
                  {productos.map((producto)=>{
                    return(

                        <td class="border">$ {producto.moddet}</td>
                      
                    )})}
                </tr>
                <tr class="border">
                  <th class="border fondoStrong">Origen</th>
                  <td class="border">-</td>
                  {productos.map((producto)=>{
                    return(

                        <td class="border">$ {producto.origen}</td>
                      
                    )})}
                </tr>
            </table>
        </div>
     );
}
 
export default TablaDescSimilares;
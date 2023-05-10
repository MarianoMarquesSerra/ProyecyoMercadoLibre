const TablaCaracteristicas = ({tabla}) => {
    return ( 
        <>
            <table class="container">
              {
                tabla?.map((item,i)=>{
                  if((i+1)%2 != 0){
                    return(
                      <tr>
                        <th class="fondoStrong">{item.titulo}</th>
                        <td>{item.valor}</td>
                      </tr>
                    )
                  }else {
                    return(
                      <tr>
                        <th class="fondo">{item.titulo}</th>
                        <td>{item.valor}</td>
                      </tr>
                    )
                  }
                })
              }
            </table>
        </>
     );
}
 
export default TablaCaracteristicas;
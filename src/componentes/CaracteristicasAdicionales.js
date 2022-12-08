const CaracteristicasAdicionales = ({caracteristicas}) => {
    return ( 
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <ul class="m-0 p-0" style={{fontSize:'12px'}}>
                        {
                            caracteristicas?.map((item,i)=>{
                                if(i>=0 && i<=9){
                                    return(
                                        <li><span style={{fontWeight:'bold'}}>{item.caracteristica}</span>: {item.valor}</li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
                <div class="col-6">
                    <ul class="m-0 p-0" style={{fontSize:'12px'}}>
                        {
                            caracteristicas?.map((item,i)=>{
                                if(i>=10 && i<=19){
                                    return(
                                        <li><span style={{fontWeight:'bold'}}>{item.caracteristica}</span>: {item.valor}</li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default CaracteristicasAdicionales;
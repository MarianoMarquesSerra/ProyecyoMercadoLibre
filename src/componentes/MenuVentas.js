import imgProductos from "../images/IconoProductos.jpg";
import imgVehiculos from "../images/IconoVehiculos.jpg";
import imgInmuebles from "../images/IconoInmuebles.jpg";
import imgServicios from "../images/IconoServicios.jpg";

const MenuVentas = () => {
    return ( 
        <>
            <div class="container"  style={{position: 'absolute', top: '225px', left: '115px'}}>
                <div class="row justify-content-center align-items-center  gap-4">
                    <div class="col-2 card justify-content-center align-items-center" style={{height: '180px', width: '180px', cursor: 'pointer'}}>
                            <img class="card-img-top w-50" src={imgProductos} style={{position: 'relative', top: '50px'}}  alt="Card image cap"/>
                      <div class="card-body" style={{position: 'relative', top: '50px'}} >
                        <h5 class="card-title">Productos</h5>
                      </div>
                    </div>
                    <div class="col-2 card justify-content-center align-items-center" style={{height: '180px', width: '180px' , cursor: 'pointer'}}>
                      <img class="card-img-top w-50" src={imgVehiculos} style={{position: 'relative', top: '30px'}}  alt="Card image cap"/>
                      <div class="card-body" style={{position: 'relative', top: '20px'}} >
                        <h5 class="card-title">Vehículos</h5>
                      </div>
                    </div>
                    <div class="col-2 card justify-content-center align-items-center" style={{height: '180px', width: '180px' , cursor: 'pointer'}}>
                      <img class="card-img-top w-50" src={imgInmuebles} style={{position: 'relative', top: '10px'}} alt="Card image cap"/>
                      <div class="card-body" >
                        <h5 class="card-title">Inmuebles</h5>
                      </div>
                    </div>
                    <div class="col-2 card justify-content-center align-items-center" style={{height: '180px', width: '180px' , cursor: 'pointer'}}>
                      <img class="card-img-top w-50" src={imgServicios} style={{position: 'relative', top: '30px'}} alt="Card image cap"/>
                      <div class="card-body" style={{position: 'relative', top: '30px'}}>
                        <h5 class="card-title">Servicios</h5>
                      </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default MenuVentas;
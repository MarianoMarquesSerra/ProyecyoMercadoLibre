const ServiciosComplementarios = () => {
    return ( 
        <div class="row">
            <div class="col-6 card p-0">
            <img class="card-img-top" src={require('../images/AcceVehiculos.jpg')} alt="Card image cap"/>
                <div class="card-body">
                    <p class="card-text text-center">ACCESORIOS PARA VEHÍCULOS</p>
                </div>
            </div>
            <div class="col-6 card p-0">
            <img class="card-img-top" src={require('../images/Financiamiento.jpg')} alt="Card image cap"/>
                <div class="card-body">
                    <p class="card-text text-center">FINANCIAMIENTO</p>
                </div>
            </div>
        </div>
     );
}
 
export default ServiciosComplementarios;
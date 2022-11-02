const BuscaporDep = () => {
    return ( 
        <>
        <div class="text-center fondo p-2">
            <h3>BUSCÁ POR DEPARTAMENTO</h3>
        </div>
        <div class="row col-12 m-0 justify-content-center fondo">
            <div class="card col-3 rounded p-0 m-2">
              <img src={require('../images/CuidadoPersonal.jpg')} class="card-img-top" alt="Foto Dep Cuidado Personal"/>
              <div class="card-body">
                <h6 class="card-title text-center">Cuidado Personal</h6>
              </div>
            </div>
            <div class="card col-3 rounded p-0 m-2">
              <img src={require('../images/Bebes.jpg')} class="card-img-top" alt="Foto Dep Bebes"/>
              <div class="card-body">
                <h6 class="card-title text-center">Bebés</h6>
              </div>
            </div>
            <div class="card col-3 rounded p-0 m-2">
              <img src={require('../images/Limpieza.jpg')} class="card-img-top" alt="Foto Dep Limpieza"/>
              <div class="card-body">
                <h6 class="card-title text-center">Limpiéza</h6>
              </div>
            </div>
        </div>
        </>
     );
}
 
export default BuscaporDep;
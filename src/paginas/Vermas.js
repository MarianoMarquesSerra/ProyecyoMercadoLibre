import Botones from "../componentes/Botones";
import ListMercadoPago from '../apis/ListMercadoPago';
import ListDescubri from '../apis/ListDescubri';
import Navbar from "../componentes/Navbar";


const Vermas = () => {
    return (
        <>
                <div className="d-md-none">
                    <hr class="linea"></hr>
                    <h4 style={{marginLeft:'20px'}}>Mercado Pago</h4>
                    <Botones items={ListMercadoPago} fondo={'white'}/>
                    <h4 style={{marginLeft:'20px'}}>Descubrí</h4>
                    <Botones items={ListDescubri} fondo={'white'}/>
                </div>

                <div className="d-none d-md-block fondo pb-5">
                    <div id="cabecera">
                        <Navbar/>
                    </div>
                    <div style={{paddingLeft:'100px',paddingTop:'30px',paddingBottom:'30px'}}>
                        <h4 class="text-secondary">Categorías para comprar y vender</h4>
                    </div>
                    <div class="container bg-white rounded">
                        <h5 style={{paddingLeft:'40px',paddingTop:'30px',paddingBottom:'0px',marginBottom:'0px'}}>Accesorios para vehículos</h5>
                        <div class="row" style={{color:'gray'}}>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Acc. para Motos y Cuatriciclos</li>
                                    <li>Accesorios Náuticos</li>
                                    <li>Accesorios de Auto y Camioneta</li>
                                    <li>Accesorios para Camiones</li>
                                    <li>Audio para Vehículos</li>
                                    <li>GNC</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Herramientas para Vehículos</li>
                                    <li>Limpieza de Vehículos</li>
                                    <li>Llantas y Accesorios</li>
                                    <li>Lubricantes y Fluidoss</li>
                                    <li>Motos</li>
                                    <li>Navegadores GPS</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Neumáticos</li>
                                    <li>Performance</li>
                                    <li>Repuestos Autos y Camionetas</li>
                                    <li>Repuestos Motos y Cuatriciclos</li>
                                    <li>Repuestos Náuticos</li>
                                    <li>Repuestos de Línea Pesada</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Seguridad Vehicular</li>
                                    <li>Servicio Programado</li>
                                    <li>Tags para el Pago de Peajes</li>
                                    <li>Tuning</li>
                                    <li>Otros</li>
                                </ul>
                            </div>
                        </div>
                        <hr style={{background: 'gray',color: 'gray',borderColor: 'gray',height: '1px',}}/>

                        <h5 style={{paddingLeft:'40px',paddingTop:'30px',paddingBottom:'0px',marginBottom:'0px'}}>Agro</h5>
                        <div class="row" style={{color:'gray'}}>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Animales</li>
                                    <li>Generadores de Energía</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Infraestructura Rural</li>
                                    <li>Insumos Agrícolas</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Insumos Ganaderos</li>
                                    <li>Máquinas y Herramientas</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Repuestos Maquinaria Agrícola</li>
                                    <li>Otros</li>
                                </ul>
                            </div>
                        </div>
                        <hr style={{background: 'gray',color: 'gray',borderColor: 'gray',height: '1px'}}/>

                        <h5 style={{paddingLeft:'40px',paddingTop:'30px',paddingBottom:'0px',marginBottom:'0px'}}>Alimentos y Bebidas</h5>
                        <div class="row" style={{color:'gray'}}>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Almacén</li>
                                    <li>Bebidas</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Comida Preparada</li>
                                    <li>Congelados</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Frescos</li>
                                    <li>Kéfir</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Otros</li>
                                </ul>
                            </div>
                        </div>
                        <hr style={{background: 'gray',color: 'gray',borderColor: 'gray',height: '1px'}}/>

                        <h5 style={{paddingLeft:'40px',paddingTop:'30px',paddingBottom:'0px',marginBottom:'0px'}}>Animales y Mascotas</h5>
                        <div class="row" style={{color:'gray'}}>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Aves</li>
                                    <li>Caballos</li>
                                    <li>Conejos</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Gatos</li>
                                    <li>Insectos</li>
                                    <li>Jaulas para Mascotas</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Peces</li>
                                    <li>Perros</li>
                                    <li>Reptiles y Anfibios</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Roedores</li>
                                    <li>Otros</li>
                                </ul>
                            </div>
                        </div>
                        <hr style={{background: 'gray',color: 'gray',borderColor: 'gray',height: '1px'}}/>

                        <h5 style={{paddingLeft:'40px',paddingTop:'30px',paddingBottom:'0px',marginBottom:'0px'}}>Antigüedades y Coleccioness</h5>
                        <div class="row" style={{color:'gray'}}>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Antigüedades</li>
                                    <li>Banderas</li>
                                    <li>Coleccionables de Deportes</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Esculturas</li>
                                    <li>Filatelia</li>
                                    <li>Militaría y Afines</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Monedas y Billetes</li>
                                    <li>Posters</li>
                                    <li>Otros</li>
                                </ul>
                            </div>
                        </div>
                        <hr style={{background: 'gray',color: 'gray',borderColor: 'gray',height: '1px'}}/>

                        <h5 style={{paddingLeft:'40px',paddingTop:'30px',paddingBottom:'0px',marginBottom:'0px'}}>Arte, Librería y Mercería</h5>
                        <div class="row" style={{color:'gray'}}>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Arte y Manualidades</li>
                                    <li>Espejos Venecitas</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Librería</li>
                                    <li>Merceria</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Otros</li>
                                </ul>
                            </div>
                        </div>
                        <hr style={{background: 'gray',color: 'gray',borderColor: 'gray',height: '1px'}}/>

                        <h5 style={{paddingLeft:'40px',paddingTop:'30px',paddingBottom:'0px',marginBottom:'0px'}}>Autos, Motos y Otros</h5>
                        <div class="row" style={{color:'gray'}}>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Autos Chocados y Averiados</li>
                                    <li>Autos de Colección</li>
                                    <li>Autos y Camionetas</li>
                                    <li>Camiones</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Colectivos</li>
                                    <li>Maquinaria Agrícola</li>
                                    <li>Maquinaria Vial</li>
                                    <li>Motorhomes</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Motos</li>
                                    <li>Náutica</li>
                                    <li>Planes de Ahorro</li>
                                    <li>Semirremolques</li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <ul class="mt-3" style={{lineHeight:'7px'}}>
                                    <li>Otros Vehículos</li>
                                </ul>
                            </div>
                        </div>
                        <hr style={{background: 'gray',color: 'gray',borderColor: 'gray',height: '1px'}}/>

                    </div>
                </div>
        </>
     );
}
 
export default Vermas;
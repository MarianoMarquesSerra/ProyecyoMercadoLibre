import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Carrousel from "../componentes/Carrousel.js";
import MenuDesplegable from "../componentes/MenuDesplegable.jsx";
import Switch from "../componentes/Switch.js";
import SliderSuper from "../componentes/SliderSuper.jsx";
import Slider from "../componentes/Slider.jsx";
import {LogosAutos,IconosAutos} from "../apis/ListLogos.js";
import ServiciosComplementarios from "../componentes/ServiciosComplementarios.js";
import NoticiasAutosCamionetas from "../componentes/NoticiasAutosCamionetas.jsx";
import CategoriasAutos from "../componentes/CategoriasAutos.js"; 

const Vehiculos = () => {
    
                    return ( 
                      <>
                          <div class="w-100 colorMenu fixed-top">
                                  <NavLink style={{ textDecoration: 'none', color:"black" }} to="/"><h4><AiOutlineArrowLeft/>&nbsp;&nbsp;Vehículos</h4></NavLink>
                          </div>
                          <div class="MarginTop">
                            <Carrousel img1={require('../images/Captura1.jpg')} img2={require('../images/Captura2.jpg')} img3={require('../images/Captura3.jpg')}/>
                          </div>
                        <div class="contenedorBuscar">
                          <MenuDesplegable lista={["Motos", "Náutica", "Otros Vehículos", "Camiones", "Autos de Colección", "Maquinaria Vial", "Maquinaria Agrícola"]} titulo={"Autos y Camionetas"}/>
                          <MenuDesplegable lista={["Volkswagen", "Ford", "Fiat", "Chevrolet", "Peugeot", "Renault", "Toyota", "Honda", "Citroen", "Mecedes-Benz"]} titulo={"Todas las marcas"}/>
                          <MenuDesplegable lista={["Volkswagen", "Ford", "Fiat", "Chevrolet", "Peugeot", "Renault", "Toyota", "Honda", "Citroen", "Mecedes-Benz"]} titulo={"Modelo"}/>
                          <Switch/>
                          <button className="BotonBuscar">Buscar</button>
                        </div>
                        <SliderSuper productos = {LogosAutos} Topedesplazamiento={-470}/>
                          <div class="card-body p-2 fondo">
                              <div class="col-12 m-2">
                                <div class="row">
                                    <div class="col-4 card px-2 contenedorVehiculos">
                                      <div class="contImgVehiculo">
                                        <img class="imgVehiculo" src={require('../images/Vehiculo1.jpg')} alt="Imagen Vehículo 1"/>
                                      </div>
                                      <a href="#" class="btn btn-primary fuenteXS">Vender mi vehículo</a>
                                    </div>
                                    <div class="col-4 card px-2 contenedorVehiculos">
                                      <div class="contImgVehiculo">
                                        <img class="imgVehiculo" src={require('../images/Vehiculo2.jpg')} alt="Imagen Vehículo 2"/>
                                      </div>
                                      <a href="#" class="btn btn-primary fuenteXS">Vender mi vehículo</a>
                                    </div>
                                    <div class="col-4 card px-2 contenedorVehiculos">
                                      <div class="contImgVehiculo">
                                        <img class="imgVehiculo" src={require('../images/Vehiculo3.jpg')} alt="Imagen Vehículo 3"/>
                                      </div>
                                      <a href="#" class="btn btn-primary fuenteXS">Vender mi vehículo</a>
                                    </div>
                                </div>
                              </div>
                          </div>
                        <div class="m-2 fondo">
                          <h6>AUTOS Y CAMIONETAS PUBLICADOS</h6>
                          <h6>HOY</h6>
                        </div>
                        <div class="col-12 contSlide">
                          <div class="row"> 
                            <Slider img1={require('../images/Vehiculo4.jpg')} 
                                  img2={require('../images/Vehiculo5.jpg')} 
                                  img3={require('../images/Vehiculo6.jpg')} 
                                  img4={require('../images/Vehiculo7.jpg')} 
                                  img5={require('../images/Vehiculo8.jpg')}
                                  txt1="$15.500.000 Volkswagen Amarok 3.0 v6 Extreme"
                                  txt2="$4.400.000 Peugeot 208 1.6 Feline"
                                  txt3="$8.200.000 Toyota Corolla Cross 2.0 Xei Cvt"
                                  txt4="$10.000.000 Toyota Sw4 2.8 Srx 177cv 4x4 7as At"
                                  txt5="$12.900.000 Volkswagen Amarok 3.0 v6 Cd Higline"
                                  typeImg={true}
                                  topDerecho={-370}/> 
                          </div>
                          <div class="row fondo p-2">
                            <h6 class="text-center">TE PUEDE INTERESAR...</h6>
                            <SliderSuper productos = {IconosAutos} Topedesplazamiento={-370}/>
                          </div>
                        </div>
                        <h5 class="text-center">COMPLEMENTARIOS</h5>
                        <div class="m-4">
                          <ServiciosComplementarios/>
                        </div>
                        <div class="row col-12 ContenedorOferta">
                          <img class="col-12 p-2 ImgOfeta" src={require('../images/SanJorge.jpg')} alt="AutosSanJorge.jpg"/>
                        </div>
                        <NoticiasAutosCamionetas/>
                        <div class="row col-12 ContenedorOferta fondo">
                          <h6 class="text-center fondo">AUTODRIVE</h6>
                          <img class="col-12 p-2 ImgOfeta" src={require('../images/AutoDrive.jpg')} alt="AutosSanJorge.jpg"/>
                        </div>
                        <div class="row col-12 ContenedorOferta fondo">
                          <h6 class="text-center">AUTODRIVE</h6>
                          <img class="col-12 p-2 ImgOfeta" src={require('../images/AutodelSol.jpg')} alt="AutosSanJorge.jpg"/>
                        </div>
                        <div class="row col-12 ContenedorOferta fondo">
                          <h6 class="text-center">CONCESIONARIAS OFICIALES EN MERCADO LIBRE</h6>
                          <img class="col-md-6 p-2 ImgOfeta" src={require('../images/Concesionaria1.jpg')} alt="AutosSanJorge.jpg"/>
                          <img class="col-md-6 p-2 ImgOfeta" src={require('../images/Concesionaria2.jpg')} alt="AutosSanJorge.jpg"/>
                        </div>
                        <div class="row col-12 d-flex m-auto fondo">
                          <h6>Autos, Motos y Otros</h6>
                          <CategoriasAutos/>
                        </div>
                      </>
                   );
              }
               
export default Vehiculos;
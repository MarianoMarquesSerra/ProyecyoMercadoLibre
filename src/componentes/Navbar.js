import '../App.css';
import { BiCartAlt, BiUser, BiChevronRight, BiSearchAlt2 } from "react-icons/bi";
import React, {useState} from 'react';
import 'bootstrap/dist/js/bootstrap.js';
import {MdHouse, MdSearch, MdNotificationsNone, MdOutlineLocalMall, 
  MdOutlineFavoriteBorder, MdSell, MdOutlineSavings, 
  MdOutlineImportantDevices, MdOutlineSchedule, MdOutlinePermIdentity, 
  MdOutlineHeadsetMic, MdOutlineViewList, MdFeed} from "react-icons/md";
import {IoLockClosedOutline, IoShirtOutline, IoStarOutline, 
  IoStorefrontOutline, IoReorderFourOutline, 
  IoPricetagOutline} from "react-icons/io5";
import MercadoPago from "../images/Mercado.jpg";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [valor, setCont] = useState(false);
  function agregarClase(valor) {
    var element = document.getElementById("cuerpo");
    console.log(valor);
    if(valor){
      element.classList.add("fijar");
      setCont(true);
      console.log("Agregó la clase");
    }
    else {
      element.classList.remove("fijar");
      console.log("Quitó la clase");
      setCont(false);
    }
  }

    return ( 
        <>
            <div class="collapse" id="navbarToggleExternalContent">
            <div class="contenedorMenu">
              <div class="col-12 bg-white Menu">
                <div class="row col-12 colorMenu m-0">
                  <div class="col-4"><BiUser size={60}/></div>
                  <div class="col-8">
                    <h6>Hola Mariano</h6>
                    <a><b>Nivel 3 - Mercado Puntos</b></a>
                    <a><BiChevronRight/></a>
                    <a class="estiloSubNivel">Subscribite al nivel 6</a>
                  </div>
                  <a class="estiloMercadoPago"><b>Mercado Pago</b>&nbsp;&nbsp;&nbsp;&nbsp;<BiChevronRight/></a>                                               
                </div>
                
                  <ul>
                    <NavLink to="/" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdHouse size={30}/>&nbsp;&nbsp;Inicio</li>
                    </NavLink>
                    <NavLink to="/buscar" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdSearch size={30}/>&nbsp;&nbsp;Buscar</li>
                    </NavLink>
                    <NavLink to="/notificaciones" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdNotificationsNone size={30}/>&nbsp;&nbsp;Notificaciones</li>
                    </NavLink>
                    <NavLink to="/miscompras" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdOutlineLocalMall size={30}/>&nbsp;&nbsp;Mis compras</li>
                    </NavLink>
                    <NavLink to="/favoritos" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdOutlineFavoriteBorder size={30}/>&nbsp;&nbsp;Favoritos</li>
                    </NavLink>
                    <NavLink to="/ofertas" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdSell size={30}/>&nbsp;&nbsp;Ofertas</li>
                    </NavLink>
                    <NavLink to="/mercadocredito" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdOutlineSavings size={30}/>&nbsp;&nbsp;Mercado Crédito</li>
                    </NavLink>
                    <NavLink to="/peliculasyseries" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdOutlineImportantDevices size={30}/>&nbsp;&nbsp;Películas y series</li>
                    </NavLink>
                    <NavLink to="/historial" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdOutlineSchedule size={30}/>&nbsp;&nbsp;Historial</li>
                    </NavLink>
                    <NavLink to="/micuenta" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdOutlinePermIdentity size={30}/>&nbsp;&nbsp;Mi cuenta</li>
                    </NavLink>
                    <NavLink to="/ayuda" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdOutlineHeadsetMic size={30}/>&nbsp;&nbsp;Ayuda</li>
                    </NavLink>
                  </ul>
                  <hr></hr>
                  <ul>
                    <NavLink to="/super" style={{ textDecoration: 'none', color:"black" }}>
                      <li><IoLockClosedOutline size={30}/>&nbsp;&nbsp;Supermercado</li>
                    </NavLink>
                    <NavLink to="/moda" style={{ textDecoration: 'none', color:"black" }}>
                      <li><IoShirtOutline size={30}/>&nbsp;&nbsp;Moda</li>
                    </NavLink>
                    <NavLink to="/masvendidos" style={{ textDecoration: 'none', color:"black" }}>
                      <li><IoStarOutline size={30}/>&nbsp;&nbsp;Más vendidos</li>
                    </NavLink>
                    <NavLink to="/tiendasoficiales" style={{ textDecoration: 'none', color:"black" }}>
                      <li><IoStorefrontOutline size={30}/>&nbsp;&nbsp;Tiendas oficiales</li>
                    </NavLink>
                    <NavLink to="/categorias" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdOutlineViewList size={30}/>&nbsp;&nbsp;Categorías</li>
                    </NavLink>
                  </ul>
                  <hr></hr>
                  <ul>
                    <NavLink to="/resumen" style={{ textDecoration: 'none', color:"black" }}>
                      <li><MdFeed size={30}/>&nbsp;&nbsp;Resumen</li>
                    </NavLink>
                    <NavLink to="/vender" style={{ textDecoration: 'none', color:"black" }}>
                      <li><IoPricetagOutline size={30}/>&nbsp;&nbsp;Vender</li>
                    </NavLink>
                    <NavLink to="/mercadoshops" style={{ textDecoration: 'none', color:"black" }}>
                      <li><IoLockClosedOutline size={30}/>&nbsp;&nbsp;Mercado Shops</li>
                    </NavLink>
                  </ul>
                  <hr></hr>
                    <NavLink to="/acercademercadolibre" style={{ textDecoration: 'none', color:"black" }}>
                      <p style={{padding:20}}>Acerca de Mercado Libre</p>
                    </NavLink>
                </div>
            </div>
            </div>

            <nav class="navbar navbar-default fixed-top navbar-warning colorMenu MenuBarra">
              <div class="container-fluid">
                  <div class="row col-12 mx-auto">
                    <div class="col-2">
                      <button class="navbar-toggler d-flex border-warning" onClick={() => agregarClase(!valor)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                      </button>

                    </div>
                    <div class="col-10">
                    <div class="cantCarrito">1</div>
                     <form class="d-flex mx-auto" role="search">
                        <input class="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success border-warning text-dark" type="submit"><BiCartAlt/></button>
                      </form>
                    </div>
                  </div>
              </div>
            </nav>
        </>
     );
}
 
export default Navbar;
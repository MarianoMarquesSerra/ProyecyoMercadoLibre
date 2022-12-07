import { BrowserRouter, Routes, Route } from "react-router-dom";
import QR from "./paginas/Qr.js";
import OFERTAS from "./paginas/Ofertas.js";
import SUPER from "./paginas/Super.js";
import VEHICULOS from "./paginas/Vehiculos.js";
import MODA from "./paginas/Moda.js";
import VERMAS from "./paginas/Vermas.js";
import HOME from "./paginas/Home.js";
import BUSCAR from "./paginas/menu/Buscar.js";
import NOTIFICACIONES from "./paginas/menu/Notificaciones.js";
import MISCOMPRAS from "./paginas/menu/Miscompras.js";
import FAVORITOS from "./paginas/menu/Favoritos.js";
import MERCADOCREDITO from "./paginas/menu/Mercadocredito.js";
import PELICULASYSERIES from "./paginas/menu/Peliculasyseries.js";
import HISTORIAL from "./paginas/menu/Historial.js";
import MICUENTA from "./paginas/menu/Micuenta.js";
import AYUDA from "./paginas/menu/Ayuda.js";
import MASVENDIDOS from "./paginas/menu/Masvendidos.js";
import TIENDASOFICIALES from "./paginas/menu/Tiendasoficiales.js";
import CATEGORIAS from "./paginas/menu/Categorias.js";
import RESUMEN from "./paginas/menu/Resumen.js";
import VENDER from "./paginas/menu/Vender.js";
import MERCADOSHOPS from "./paginas/menu/Mercadoshops.js";
import ACERCADE from "./paginas/menu/Acercade.js";
import VistaProducto from './paginas/VistaProducto';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>       
        <Route path="/qr" element={<QR/>}/>
        <Route path="/ofertas" element={<OFERTAS/>}/>
        <Route path="/super" element={<SUPER/>}/>
        <Route path="/vehiculos" element={<VEHICULOS/>}/>
        <Route path="/moda" element={<MODA/>}/>
        <Route path="/vermas" element={<VERMAS/>}/>
        <Route path="/buscar" element={<BUSCAR/>}/>
        <Route path="/notificaciones" element={<NOTIFICACIONES/>}/>
        <Route path="/miscompras" element={<MISCOMPRAS/>}/>
        <Route path="/favoritos" element={<FAVORITOS/>}/>
        <Route path="/ofertas" element={<OFERTAS/>}/>
        <Route path="/mercadocredito" element={<MERCADOCREDITO/>}/>
        <Route path="/peliculasyseries" element={<PELICULASYSERIES/>}/>
        <Route path="/historial" element={<HISTORIAL/>}/>
        <Route path="/micuenta" element={<MICUENTA/>}/>
        <Route path="/ayuda" element={<AYUDA/>}/>
        <Route path="/masvendidos" element={<MASVENDIDOS/>}/>
        <Route path="/tiendasoficiales" element={<TIENDASOFICIALES/>}/>
        <Route path="/categorias" element={<CATEGORIAS/>}/>
        <Route path="/resumen" element={<RESUMEN/>}/>
        <Route path="/vender" element={<VENDER/>}/>
        <Route path="/mercadoshops" element={<MERCADOSHOPS/>}/>
        <Route path="/acercademercadolibre" element={<ACERCADE/>}/>
        <Route path="/vistaproducto/:id" element={<VistaProducto/>}/>
        <Route path="/" element={<HOME/>}/> 
      </Routes>
    </BrowserRouter>
   );}
 
export default App;
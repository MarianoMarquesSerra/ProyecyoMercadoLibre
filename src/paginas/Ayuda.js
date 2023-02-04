import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom"; 
import Navbar from "../componentes/Navbar";
import	iconoCompras from "../images/iconoCompras.jpg";
import iconoDevoluciones from "../images/iconoDevoluciones.jpg";
import iconoPreguntas from "../images/iconoPreguntas.jpg";

const Ayuda = () => {
    return ( 
        <>
            <div className="d-none d-md-block">
                <Navbar/>
            </div>
            <div class="w-100 colorMenu fixed-top d-md-none d-sm-block">
                <NavLink style={{ textDecoration: 'none', color:"black" }} to="/"><h4><AiOutlineArrowLeft/>&nbsp;&nbsp;Ayuda</h4></NavLink>
            </div>
            <div  style={{width:'800px',position:'relative',margin:'auto',top:'20px'}}>
            <form class="row g-3">
                <div class="col-auto">
                  <label for="staticEmail2" style={{fontWeight: 'bold', fontSize: '24px'}}>¿Con qué podemos ayudarte?</label>
                  <input type="password" class="form-control  border border-secondary" id="inputPassword2" placeholder="Busca en Ayuda" style={{width:'670px',height:'45px',position:'relative',top:'20px'}}/>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-3 border-0" style={{width:'100px',height:'45px',position:'relative',top:'55px',background:'rgba(201, 192, 192, 0.788)',color:'grey'}}>Buscar</button>
                </div>
            </form>
            </div>
            <div className="row" style={{position:'relative',top:'80px',left:'285px'}}>
                <div className="col-7">
                <label for="staticEmail2" style={{fontWeight: 'bold', fontSize: '20px'}}>Compras</label>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><img src={iconoCompras}/></span>
                        <div>
                            <span class="andes-list__item-primary" style={{fontWeight: 'bold'}}>Administrar y cancelar compras</span><br/>
                            <span class="andes-list__item-secondary">Pagar, seguir envíos, modificar, reclamar o cancelar compras.</span>
                        </div>
                        <span><BiChevronRight/></span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><img src={iconoDevoluciones}/></span>
                        <div>
                            <span class="andes-list__item-primary" style={{fontWeight: 'bold'}}>Devoluciones y reembolsos</span><br/>
                            <span class="andes-list__item-secondary">Devolver un producto o consultar por reintegros de dinero de una compra.</span>
                        </div>
                      <span><BiChevronRight/></span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><img src={iconoPreguntas}/></span>
                        <div>
                            <span class="andes-list__item-primary" style={{fontWeight: 'bold'}}>Preguntas frecuentes sobre compras</span><br/>
                        </div>
                      <span><BiChevronRight/></span>
                    </li>
                </ul>
                </div>
            </div>
        </>
     );
}
 
export default Ayuda;
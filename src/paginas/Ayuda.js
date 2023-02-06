import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom"; 
import FooterProductos from "../componentes/FooterProductos";
import Navbar from "../componentes/Navbar";
import	iconoCompras from "../images/iconoCompras.jpg";
import iconoDevoluciones from "../images/iconoDevoluciones.jpg";
import iconoPreguntas from "../images/iconoPreguntas.jpg";
import iconoVentas from "../images/iconoVentas.jpg";

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
                <div style={{height:'10px'}}>
                    <label for="staticEmail2" style={{fontSize: '20px',color:'grey'}}>Compras</label>
                </div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelectedBorder">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-1" style={{position:'relative',top: '25%'}}>
                                <span><img src={iconoCompras}/></span>
                            </div>
                            <div className="col-10" style={{position: 'relative', top:'10%'}}>
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold'}}>Administrar y cancelar compras</span><br/>
                                <span class="andes-list__item-secondary" style={{fontSize: '14px',color:'gray'}}>Pagar, seguir envíos, modificar, reclamar o cancelar compras.</span>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>        
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelectedBorder">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-1"  style={{position:'relative',top: '25%'}}>
                                <span><img src={iconoDevoluciones}/></span>
                            </div>
                            <div className="col-10" style={{position: 'relative', top:'10%'}}>
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold'}}>Devoluciones y reembolsos</span><br/>
                                <span class="andes-list__item-secondary" style={{fontSize: '14px',color:'gray'}}>Devolver un producto o consultar por reintegros de dinero de una compra.</span>                    
                            </div>
                            <div className="col-1"  style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>
                            </div>
                        </div>     
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelectedBorder">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-1"  style={{position:'relative',top: '25%'}}>
                                <span><img src={iconoPreguntas}/></span>
                            </div>
                            <div className="col-10" style={{position: 'relative', top:'30%'}}>
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold'}}>Preguntas frecuentes sobre compras</span><br/>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>     
                            </div>
                        </div>                
                    </li>
                </ul>
                </div>
            </div>

            <div className="row" style={{position:'relative',top:'140px',left:'285px'}}>
                <div className="col-7">
                <div style={{height:'10px'}}>
                    <label for="staticEmail2" style={{fontSize: '20px',color:'grey',height:'10px'}}>Ventas</label>
                </div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelectedBorder">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-1" style={{position:'relative',top: '25%'}}>
                                <span><img src={iconoVentas}/></span>
                            </div>
                            <div className="col-10" style={{position: 'relative', top:'10%'}}>
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold'}}>Gestionar ventas y publicaciones</span><br/>
                                <span class="andes-list__item-secondary" style={{fontSize: '14px',color:'gray'}}>Ventas, cobros, envios, reclamos, devoluciones, publicaciones y reputación</span>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>        
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelectedBorder">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-1"  style={{position:'relative',top: '25%'}}>
                                <span><img src={iconoPreguntas}/></span>
                            </div>
                            <div className="col-10" style={{position: 'relative', top:'30%'}}>
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold'}}>Preguntas frecuentes sobre ventas</span><br/>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>     
                            </div>
                        </div>                
                    </li>
                </ul>
                </div>
            </div>

            <div className="row" style={{position:'relative',top:'180px',left:'285px'}}>
                <div className="col-7">
                <div style={{height:'10px'}}>
                    <label for="staticEmail2" style={{fontSize: '20px',color:'grey',height:'10px'}}>Ayuda sobre tu cuenta</label>
                </div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelected">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-11">
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold', position: 'relative', top:'30%'}}>Configuración de mi cuenta</span><br/>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>        
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelected">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-11">
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold', position: 'relative', top:'30%'}}>Seguridad</span><br/>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>     
                            </div>
                        </div>                
                    </li>
                </ul>
                </div>
            </div>

            <div className="row" style={{position:'relative',top:'220px',left:'285px'}}>
                <div className="col-7">
                <div style={{height:'10px'}}>
                    <label for="staticEmail2" style={{fontSize: '20px',color:'grey',height:'10px'}}>Estos temas pueden interesarte</label>
                </div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelected">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-11">
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold', position: 'relative', top:'30%'}}>Políticas de devolución de tus compras</span><br/>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>        
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelected">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-11">
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold', position: 'relative', top:'30%'}}>Cómo devuelvo un producto</span><br/>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>     
                            </div>
                        </div>                
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelected">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-11">
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold', position: 'relative', top:'30%'}}>Cómo cancelo una compra</span><br/>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>     
                            </div>
                        </div>                
                    </li>
                </ul>
                </div>
            </div>

            <div className="row" style={{position:'relative',top:'260px',left:'285px'}}>
                <div className="col-7">
                <div style={{height:'10px'}}>
                    <label for="staticEmail2" style={{fontSize: '20px',color:'grey',height:'10px'}}>Tus últimas consultas</label>
                </div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelected">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-11">
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold', position: 'relative', top:'30%'}}>Consultas</span><br/>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>        
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>

            <div className="row" style={{position:'relative',top:'300px',left:'285px'}}>
                <div className="col-7">
                <div style={{height:'10px'}}>
                    <label for="staticEmail2" style={{fontSize: '20px',color:'grey',height:'10px'}}>¿Necesitas más ayuda?</label>
                </div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center itemSelected">
                        <div className="row col-12" style={{height:'60px'}}>
                            <div className="col-11">
                                <span class="andes-list__item-primary" style={{fontWeight: 'bold', position: 'relative', top:'30%'}}>Contactanos</span><br/>
                            </div>
                            <div className="col-1" style={{position:'relative',top: '20%',fontSize:'25px',color:'gray'}}>
                                <span><BiChevronRight/></span>        
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>

            <div style={{position: 'relative', top: '400px'}}>
                <FooterProductos/>
            </div>
        </>
     );
}
 
export default Ayuda;
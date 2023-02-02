import { AiOutlineArrowLeft} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import FooterProductos from "../../componentes/FooterProductos";

const Vender = () => {
    return ( 
        <>
            <div class="w-100 colorMenu fixed-top">
                <NavLink style={{ textDecoration: 'none', color:"black" }} to="/"><h4><AiOutlineArrowLeft/>&nbsp;&nbsp;Vender</h4></NavLink>
            </div>
            <FooterProductos/>
        </>
     );
}
 
export default Vender;
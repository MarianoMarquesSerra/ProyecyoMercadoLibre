import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom"; 


const Ayuda = () => {
    return ( 
        <>
            <div class="w-100 colorMenu fixed-top d-md-none d-sm-block">
                <NavLink style={{ textDecoration: 'none', color:"black" }} to="/"><h4><AiOutlineArrowLeft/>&nbsp;&nbsp;Ayuda</h4></NavLink>
            </div>
        </>
     );
}
 
export default Ayuda;
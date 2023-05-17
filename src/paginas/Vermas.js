import Botones from "../componentes/Botones";
import ListMercadoPago from '../apis/ListMercadoPago';
import ListDescubri from '../apis/ListDescubri';

const Vermas = () => {
    return (
        <>
            <div>
            <div>
                <hr class="linea"></hr>
                <h4 style={{marginLeft:'20px'}}>Mercado Pago</h4>
                <Botones items={ListMercadoPago} fondo={'white'}/>
                <h4 style={{marginLeft:'20px'}}>Descubrí</h4>
                <Botones items={ListDescubri} fondo={'white'}/>
            </div>
        </div>
        </>
     );
}
 
export default Vermas;
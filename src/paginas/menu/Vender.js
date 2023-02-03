import FooterProductos from "../../componentes/FooterProductos";
import MenuVentas from "../../componentes/MenuVentas";

const Vender = () => {
    return ( 
        <>
            <div className="contenedorTituloVentas colorMenu">
                <div className="tituloVentas">
                ¡Hola! Antes que nada contanos,
                ¿qué vas a publicar?
                </div>
            </div>
            <MenuVentas/>
            <div style={{position: 'relative', top: '250px'}}>
                <FooterProductos/>
            </div>
        </>
     );
}
 
export default Vender;
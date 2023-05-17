import { map } from "jquery";
import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const MenuOpciones = (props) => {

  console.log(props.listado);
  return ( 
    <div class="OpcionesMenuDesp" id={props.opciones}>
                <hr class="linea"></hr>
                  <ul>
                    {props.listado.map((articulo, i) => {
                    return (
                      <li key={i}>{articulo}</li>
                    )
                    })
                   }
                  </ul>
    </div>
   );
}
 


const MenuDesplegable = (props) => {
    let [valor, setValor] = useState(false);
    let [titulo, setTitulo] = useState(props.titulo); 

    
    function agregarClase(valor) {
      var Opciones = document.getElementById(props.idOpciones);
      var Contenedor = document.getElementById(props.idMenu);
      var Icono = document.getElementById(props.idIconoFlecha);
      
      console.log(valor);
      if(valor){
        Icono.classList.add("iconArrowRotarArriba");
        Icono.classList.remove("iconArrowRotarAbajo");
        Contenedor.classList.add("visible");
        Opciones.classList.add("visible");
        Opciones.classList.add("fijar");
        setValor(true);
        console.log("Agregó la clase");
      }
      else {
        Icono.classList.remove("iconArrowRotarArriba");
        Icono.classList.add("iconArrowRotarAbajo");
        Contenedor.classList.remove("visible");
        Opciones.classList.remove("visible");
        Opciones.classList.remove("fijar");
        console.log("Quitó la clase");
        setValor(false);
      }
    }

   
    return ( 
        <>
            <div class="MenuDesplegable" id="MenuDesplegable" onClick={() => agregarClase(!valor)}>{titulo} <AiOutlineDown class="iconArrow" id={props.idIconoFlecha}/></div>
            <div class="contenedorOpciones"  id={props.idMenu} onClick={() => agregarClase(!valor)}>
              <MenuOpciones listado={props.lista} opciones={props.idOpciones}/>
            </div>
        </>
     );
}
 
export default MenuDesplegable;
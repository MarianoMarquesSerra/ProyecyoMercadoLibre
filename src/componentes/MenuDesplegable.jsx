import { map } from "jquery";
import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const MenuOpciones = ({listado}) => {
  return ( 
    <div class="OpcionesMenuDesp" id="Opciones">
                <hr class="linea"></hr>
                  <ul>
                    {listado.map((articulo, i) => {
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
    let [listado, setListado] = useState(props.lista);
    let [titulo, setTitulo] = useState(props.titulo);
    var Menu = document.getElementById("MenuDesp");

    

    console.log(listado);
    function agregarClase(valor) {
      var Opciones = document.getElementById("Opciones");
      var Contenedor = document.getElementById("conteOpciones");
      var Icono = document.getElementById("iconoFlecha");
      setListado(listado);
      
      console.log(valor);
      if(valor){
        Icono.classList.add("iconArrowRotarArriba");
        Icono.classList.remove("iconArrowRotarAbajo");
        Contenedor.classList.add("visible");
        Opciones.classList.add("fijar");
        Opciones.classList.add("visible");
        setValor(true);
        console.log("Agregó la clase");
      }
      else {
        Icono.classList.remove("iconArrowRotarArriba");
        Icono.classList.add("iconArrowRotarAbajo");
        Contenedor.classList.remove("visible");
        Opciones.classList.remove("fijar");
        Opciones.classList.remove("visible");
        console.log("Quitó la clase");
        setValor(false);
      }
    }

   
    return ( 
        <>
            <div class="MenuDesplegable" id="MenuDesp" onClick={() => agregarClase(!valor)}>{titulo} <AiOutlineDown class="iconArrow" id="iconoFlecha"/></div>
            <div class="contenedorOpciones" id="conteOpciones" onClick={() => agregarClase(!valor)}>
              <MenuOpciones listado={listado}/>
            </div>
        </>
     );
}
 
export default MenuDesplegable;
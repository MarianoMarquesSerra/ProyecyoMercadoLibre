import React, {useState} from "react";

const Switch = () => {
    const [valor, setValor] = useState(false);
    var contenedorSwitch = document.getElementById("contenedorSwitch");
    var Switch = document.getElementById("Switch");


    function selectorSwitch(valor){
        if(valor){
            contenedorSwitch.classList.add("backgroundBlue");
            Switch.classList.add("moverSwitchDerecha");
            setValor(true);     
        }
        else{
            contenedorSwitch.classList.remove("backgroundBlue");
            Switch.classList.remove("moverSwitchDerecha");
            setValor(false);
        }
    }

    return ( 
        <a class="contenedorSwitch" id="contenedorSwitch" onClick={() => selectorSwitch(!valor)}>
            <div class="Switch" id="Switch"></div>
        </a>
     );
}
 
export default Switch;
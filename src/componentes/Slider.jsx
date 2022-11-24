import React from "react";
import '../styles/slider.css';
import { motion } from "framer-motion";
import { map } from "jquery";

const Slider = ({productos,typeImg,topDerecho}) => {
    
    return ( 
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{right: 0, left: topDerecho}}>
                {productos.map((producto,id) => {
                    console.log(id);
                    return (
                        <motion.div className="itemSlider" key={id}>
                            <div class={`card pointerEventSlider ${id==0 ? 'bordeInferior': ''}  ${typeImg ? 'tamañoSlideFoto' : 'tamañoSlideIcono'}`}>
                                <div class="card-body text-center">
                                    <div class="text-center">
                                        <img src={producto.img} class={` ${typeImg ? 'imgFoto' : 'imgIcono'}`} id="idImg"/>
                                    </div>
                                    <a href="#" class="btn">{producto.txt}</a>
                                </div>    
                            </div>
                        </motion.div>
                    )
                })}
                
            </motion.div>

        </motion.div>
     );
}
 
export default Slider;
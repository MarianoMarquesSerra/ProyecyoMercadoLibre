import React from "react";
import '../styles/slider.css';
import { motion } from "framer-motion";

const SliderSuper = ({productos,Topedesplazamiento}) => {

    return ( 
        <motion.div className="slider-container p-2">
            <motion.div className="slider" drag='x' dragConstraints={{right: 0, left: Topedesplazamiento}}>
                    {productos.map((producto)=>{
                        return (
                            <motion.div className="itemSlider text-center">
                            <div class="card pointerEvent borde-redondo">
                            <div class="card-body">
                                <div class="text-center centrado">
                                    <img src={producto.img} class="imgSlider p-2 centrado"/>
                                </div>
                            </div>    
                            </div>
                            <a href="#" class="btn">{producto.txt}</a>
                            </motion.div>
                    )
                    })}
                
            </motion.div>

        </motion.div>
     );
}
 
export default SliderSuper;
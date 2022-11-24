import React from "react";
import '../styles/slider.css';
import { motion } from "framer-motion";

const SlideModa = ({productos,Topedesplazamiento}) => {

    return ( 
        <motion.div className="container-fluid p-2">
            <motion.div className="slider" drag='x' dragConstraints={{right: 0, left: Topedesplazamiento}}>
                    {productos.map((producto)=>{
                        return (
                            <motion.div className="container-fluid text-center d-flex mx-auto mt-5">
                            <div class="pointerEvent d-flex mx-auto mb-4">
                            <div class="card-body">
                                <div class="text-center centrado">
                                    <img src={producto.img} class="img imgSlider p-2 centrado"/>
                                </div>
                            </div>    
                            </div>
                            </motion.div>
                    )
                    })}
                
            </motion.div>

        </motion.div>
     );
}
 
export default SlideModa;
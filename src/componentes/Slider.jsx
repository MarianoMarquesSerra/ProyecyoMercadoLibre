import React from "react";
import '../styles/slider.css';
import { motion } from "framer-motion";

const Slider = ({img1,img2,img3,img4,img5,txt1,txt2,txt3,txt4,txt5,typeImg,topDerecho}) => {
    
    return ( 
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{right: 0, left: topDerecho}}>
                <motion.div className="itemSlider">
                    <div class={`card pointerEventSlider bordeInferior ${typeImg ? 'tamañoSlideFoto' : 'tamañoSlideIcono'}`}>
                        <div class="card-body">
                            <div class="text-center">
                                <img src={img1} class={`p-2 ${typeImg ? 'imgFoto' : 'imgIcono'}`} id="idImg"/>
                            </div>
                            <a href="#" class="btn">{txt1}</a>
                        </div>    
                    </div>
                </motion.div>
                <motion.div className="itemSlider">
                    <div class={`card pointerEventSlider ${typeImg ? 'tamañoSlideFoto' : 'tamañoSlideIcono'}`}>
                        <div class="card-body">
                            <div class="text-center">
                                <img src={img2} class={`p-2 ${typeImg ? 'imgFoto' : 'imgIcono'}`} id="idImg"/>
                            </div>
                            <a href="#" class="btn">{txt2}</a>
                        </div>    
                    </div>
                </motion.div>
                <motion.div className="itemSlider">
                    <div class={`card pointerEventSlider ${typeImg ? 'tamañoSlideFoto' : 'tamañoSlideIcono'}`}>
                        <div class="card-body">
                            <div class="text-center">
                                <img src={img3} class={`p-2 ${typeImg ? 'imgFoto' : 'imgIcono'}`} id="idImg"/>
                            </div>
                            <a href="#" class="btn">{txt3}</a>
                        </div>    
                    </div>
                </motion.div>
                <motion.div className="itemSlider">
                    <div class={`card pointerEventSlider ${typeImg ? 'tamañoSlideFoto' : 'tamañoSlideIcono'}`}>
                        <div class="card-body">
                            <div class="text-center">
                                <img src={img4} class={`p-2 ${typeImg ? 'imgFoto' : 'imgIcono'}`} id="idImg"/>
                            </div>
                            <a href="#" class="btn">{txt4}</a>
                        </div>    
                    </div>
                </motion.div>
                <motion.div className="itemSlider">
                    <div class={`card pointerEventSlider ${typeImg ? 'tamañoSlideFoto' : 'tamañoSlideIcono'}`}>
                        <div class="card-body">
                            <div class="text-center">
                                <img src={img5} class={`p-2 ${typeImg ? 'imgFoto' : 'imgIcono'}`} id="idImg"/>
                            </div>
                            <a href="#" class="btn">{txt5}</a>
                        </div>    
                    </div>
                </motion.div>
            </motion.div>

        </motion.div>
     );
}
 
export default Slider;
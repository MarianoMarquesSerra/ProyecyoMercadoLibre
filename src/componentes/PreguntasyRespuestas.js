import React, { useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import L from "../images/L.jpg";
import { AiOutlineDown, AiOutlineQuestionCircle } from "react-icons/ai";



const PreguntasyRespuestas = ({preg,resp}) => {

    return ( 
        <div className="container">
            <h5>Preguntas y respuestas</h5>
            &nbsp;
            <h6>¿Qué querés saber?</h6>
            <div className="col-6 mt-4">
                <div className="row">
                    <div style={{width:'195px'}}>
                        <a className="text-primary fw-bold text-decoration-none fondoSky p-1" style={{fontSize:'14px',borderRadius:'5px'}}>Costo y tiempo de envío</a>
                    </div>
                    <div  style={{width:'240px'}}>
                        <a className="text-primary fw-bold text-decoration-none fondoSky p-1" style={{fontSize:'14px',borderRadius:'5px'}}>Medios de pago y promociones</a>
                    </div>
                    <div style={{width:'75px'}}>
                        <a className="text-primary fw-bold text-decoration-none fondoSky p-1" style={{fontSize:'14px',borderRadius:'5px'}}>Garantía</a>
                    </div>
                </div>
            </div>
            <div class="mt-4 mb-4 contBarra" style={{width:'715px', height:'50px'}}>
                <div class="d-flex">
                    <div id="inputBarra" style={{width:'850px', float:'left'}}>
                        <input class="form-control" id="inputB" type="search" placeholder="Buscar productos, marcas y más..." aria-label="Search"/>
                    </div>
                    <div class="d-flex align-items-center justify-content-center bg-primary rounded-right" id="lupa" style={{width:'50px', height:'50px'}}>
                        <a><BiSearchAlt2 size={25} color="white"/></a>
                    </div>
                </div>
            </div>
            <div className="contChat">
                <h5>Últimas realizadas</h5>
            </div>
            <div className="mt-4">
                <p className="mb-0">{preg}</p>
                <div className="mt-0 mx-2"><img className="floatLeft" src={L}></img>
                </div>
                <div className="mt-3 text-secondary contenedorPreguntas">
                    <p style={{lineHeight:'0px'}}>{resp}</p>
                    <p style={{lineHeight:'0px',marginLeft:'30px',fontSize:'14px'}}>Respondido por Mercado Libre</p>
                    <p style={{lineHeight:'0px',marginLeft:'35px',fontSize:'14px',color:'blue'}}>Denunciar</p>
                </div>
                <div className="mt-5">
                    <h6 className="text-primary">Ver 7 resultados más <AiOutlineDown/></h6>
                </div>
                <div className="mt-5">
                    <a className="text-primary text-decoration-none fw-bold fondoSky rounded d-flex justify-content-center align-items-center px-4" style={{width:'330px', height:'45px'}}><AiOutlineQuestionCircle fontSize={18}/><span style={{marginLeft:'15px'}}>¿Cómo le pregunto al vendedor?</span></a>
                </div>            
            </div>
        </div>
     );
}
 
export default PreguntasyRespuestas;
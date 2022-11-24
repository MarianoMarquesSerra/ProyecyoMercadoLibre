import oferta from '../images/Oferta.jpg';

const Oferta = () => {
    return ( 
        <div className='ContenedorOferta d-block d-md-none fondo'>
            <img className='ImgOferta col-12' src={oferta}/>
        </div>
     );
}
 
export default Oferta;
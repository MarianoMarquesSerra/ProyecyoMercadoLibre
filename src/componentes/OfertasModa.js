const OfertasModa = ({img1,img2,img3,titulo}) => {
    return ( 
        <>
            <div className="text-center mt-4">
                <h5>{titulo}</h5>
            </div>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-4">
                        <img className='img-fluid rounded' src={img1} alt="Imagen Primera Compra"/>
                    </div>
                    <div className="col-4">
                        <img className='img-fluid rounded' src={img2} alt="Imagen Primera Compra"/>
                    </div>
                    <div className="col-4">
                        <img className='img-fluid rounded' src={img3} alt="Imagen Primera Compra"/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default OfertasModa;
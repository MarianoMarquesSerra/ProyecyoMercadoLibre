const PromocionesModa = ({img1,img2}) => {
return ( 
    <>
        <div className="container-fluid col-11">
            <div className='row'>
                <div className="col-6">
                    <img className='img-fluid rounded' src={img1} alt="Imagen Primera Compra"/>
                </div>
                <div className="col-6">
                    <img className='img-fluid rounded' src={img2} alt="Imagen Primera Compra"/>
                </div>
            </div>
        </div>
    </>
 );
}

export default PromocionesModa;
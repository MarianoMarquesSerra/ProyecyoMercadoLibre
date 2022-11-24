import Elvive from '../images/Elvive.jpg';
import Sun from '../images/Sun.jpg';
import Mañanita from '../images/Mañanita.jpg';
import Schneider from '../images/Schneider.jpg';


const Ofertassuper = () => {
    return ( 
      <>
        <div className='col-12  col-xl-6 d-inline-block px-4 py-2 fondo'>
            <div class="card mb-3 tamañoCardSuper" >
                <div class="row g-0">
                  <div class="col-4">
                    <img src={Elvive} class="ImgSuper" alt="Imagen Elvive"/>
                  </div>
                  <div class="col-8">
                    <div class="card-body tamañoBodySuper">
                      <p class="card-text">KIT ELVIVE COCO: SHAMPOO ACONDICONADOR CREMA ÓLEO</p>
                      <h3><b>$2.159</b></h3>
                      <p>ANTES $3.3322</p>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>        
        <div className='col-12  col-xl-6 d-inline-block px-4 py-2 fondo'>
            <div class="card mb-3 tamañoCardSuper" >
                <div class="row g-0">
                  <div class="col-4">
                    <img src={Sun} class="ImgSuper" alt="Imagen Sun"/>
                  </div>
                  <div class="col-8">
                    <div class="card-body tamañoBodySuper">
                      <p class="card-text">Detergente para lavavajillas Sun Progress 1 kg</p>
                      <h3><b>$796</b></h3>
                      <p>Antes $1.008,15</p>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>        
        <div className='col-12  col-xl-6 d-inline-block px-4 py-2 fondo'>
            <div class="card mb-3 tamañoCardSuper" >
                <div class="row g-0">
                  <div class="col-4">
                    <img src={Mañanita} class="ImgSuper" alt="Imagen Mañanita"/>
                  </div>
                  <div class="col-8">
                    <div class="card-body tamañoBodySuper">
                      <p class="card-text">Yerba Mate Mañanita 4 Flex 500 Grs.</p>
                      <h3><b>$337,04</b></h3>
                      <p>Antes $383</p>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>        
        <div className='col-12  col-xl-6 d-inline-block px-4 py-2 fondo'>
            <div class="card mb-3 tamañoCardSuper" >
                <div class="row g-0">
                  <div class="col-4">
                    <img src={Schneider} class="ImgSuper" alt="Imagen Schneider"/>
                  </div>
                  <div class="col-8">
                    <div class="card-body tamañoBodySuper">
                      <p class="card-text">Cerveza Schneider Rubia - Pack x6 Latas de 473cc</p>
                      <h3><b>$743</b></h3>
                      <p>Antes $990</p>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>        
      </>
     );
}
 
export default Ofertassuper;
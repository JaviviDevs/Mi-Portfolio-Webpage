import  { useState, useEffect } from 'react';
import {PropTypes} from 'prop-types';
import './bannerCarousel.css';


export function BannerCarousel({banners,interval=6000}) {

  const [currentIndexBanner, setcurrentIndexBanner] = useState(0);
  const [nextInterval, setIntervalValue] = useState(interval);
  const [classFirstRadioButton, setClassFirstRadioButton] = useState('radiobutton-selected');
  const [classSecondRadioButton, setClassSecondRadioButton] = useState('radiobutton-noselected');
  const [classThirdRadioButton, setClassThirdRadioButton] = useState('radiobutton-noselected');
  const duplicatedBanners=[...banners,banners[0]]
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrentIndexBanner((currentIndexBanner) => (currentIndexBanner + 1) % (duplicatedBanners.length));
    }, nextInterval);
  
    return () => clearInterval(intervalId);
  }, [nextInterval,duplicatedBanners.length]);
  
  useEffect(() => {
    let adjustedValue=interval;
    if(currentIndexBanner==0){
      adjustedValue=interval-700;
    }else if( currentIndexBanner == 3){
      adjustedValue=700; // 0.7s lo que dura la transición
    }

    setIntervalValue(adjustedValue);
    manageStateRadioButtons(currentIndexBanner);
  }, [currentIndexBanner,interval]);
  
  const handleClick = (index) => {
    const dist=2;
    //Si estas en la primera imagen y pulsas para ir a la ultima imagen (la primera), 
    //el index se actualiza a la primera imagen, ya que se supone que son la misma imagen
    if( currentIndexBanner==0 && index ==3){
      setcurrentIndexBanner(0); 
    //En cualquier otro caso
    }else{
      // Si queremos acceder a una imagen a dos de distancia teniendo en cuenta que se supone que 
      //es un carrusel circular y por tanto, si estoy en la ultima foto (posicion 2) y quiero ver la 
      // intermedia (posicion 1) , esta a dos de distancia porque (posicion 2 +1 % longitud = 0, 0+1%longitud=1 )

      //Sin embargo hay un caso que debido a este carrusel da un problema:
      //Si yo estoy en la posicion intermedia (1) y quiero ir a la posicion del principio (0), 
      //el problema es que index es 3 y no 0 (estas imagenes son las mismas, luego hay que tratar esa condicion)

      if(((currentIndexBanner + dist) % banners.length) == index ||
        ((currentIndexBanner + dist) % banners.length) == 0 && index==3){
        setcurrentIndexBanner(currentIndexBanner+1);
        setTimeout(() => {
          setcurrentIndexBanner(index);
        }, 750); // 700 milisegundos = 0.7 segundos
      }else{
        setcurrentIndexBanner(index);
      }
    }    
  };

  const manageStateRadioButtons = (index) => {
    if(index == 0 || index == 3){
      setClassFirstRadioButton('radiobutton-selected');
      setClassSecondRadioButton('radiobutton-noselected');
      setClassThirdRadioButton('radiobutton-noselected');
    }else if(index == 1){
      setClassFirstRadioButton('radiobutton-noselected');
      setClassSecondRadioButton('radiobutton-selected');
      setClassThirdRadioButton('radiobutton-noselected');
    }else if(index == 2){
      setClassFirstRadioButton('radiobutton-noselected');
      setClassSecondRadioButton('radiobutton-noselected');
      setClassThirdRadioButton('radiobutton-selected');
    }
  };

  const style = {
    transform: `translateX(-${currentIndexBanner * 100}%)` ,
    transition:  currentIndexBanner == 0 ? 'none':'transform 0.7s ease-in-out',
  };

    return(
        <article className='banner-carousel'>
          <section className='carousel' style={style}>
          {duplicatedBanners.map((banner, index) => (
            <section key={index} className="banner-carousel-slide" >
              <img src={`./img/${banner.imageUrl}`} alt={`Banner ${index + 1}`}/>
              <a className='banner-links' href={banner.url}>{banner.text}</a>
              <section className='selectBannerContainer'>
                  <span className='radiobutton' onClick={() => handleClick(3)}>
                    <span className={classFirstRadioButton}></span>
                  </span>
                  <span className='radiobutton' onClick={() => handleClick(1)}>
                    <span className={classSecondRadioButton}></span>
                  </span>
                  <span className='radiobutton' onClick={() => handleClick(2)}>
                    <span className={classThirdRadioButton}></span>
                  </span>
              </section>
            </section>
          ))}
          </section>
        </article> 
   )
}


BannerCarousel.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  interval:PropTypes.number,
};
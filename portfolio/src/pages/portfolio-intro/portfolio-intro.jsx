import {PropTypes} from 'prop-types';
import { Link } from 'react-router-dom';
import { BannerCarousel } from '../../components/Banner-Carousel-leftscroll/bannerCarousel';
import './portfolio-intro.css'

export function PortfolioIntro({img,pretitle,subtitle,title,button,banners}) {

  return (
    <article className='intro'>
      <BannerCarousel banners={banners}/>
      <section className='intro-content'>
        <section className='intro-information'>
        <p className='intro-information-p-pretitle'>{pretitle}</p>
          <h1 className='intro-information-h1'>{title}</h1>
          <p className='intro-information-p-subtitle'>{subtitle}</p>
          <Link to={button[0].url}  className='intro-information-button'> {button[0].text} </Link>
        </section>
        
        <section className='intro-containerImg-dark'>
          <section className='intro-containerImg'>
            <img src={`./img/${img}`} className='intro-img'/>
          </section>
        </section>
      </section>
    </article> 
  )
}


PortfolioIntro.propTypes = {
  img: PropTypes.string.isRequired,
  pretitle: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  button: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
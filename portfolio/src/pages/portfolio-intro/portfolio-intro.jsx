import {PropTypes} from 'prop-types';
import { BannerCarousel } from '../../components/Banner-Carousel-leftscroll/bannerCarousel';
import './portfolio-intro.css'

export function PortfolioIntro({img,subtitle,title,buttonContact,banners}) {

  return (
    <article className='intro'>
      <BannerCarousel banners={banners}/>
      <section className='intro-content'>
        <section className='intro-information'>
          <h3 className='intro-information-h3'>{subtitle}</h3>
          <h1 className='intro-information-h1'>{title}</h1>
          <a className='intro-information-button' href={buttonContact[0].url}>{buttonContact[0].text}</a>
        </section>
        
        <section className='intro-containerImg'>
          <img src={`./img/${img}`} className='intro-img'/>
        </section>
      </section>
    </article> 
  )
}


PortfolioIntro.propTypes = {
  img: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  buttonContact: PropTypes.arrayOf(
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
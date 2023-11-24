
import {PropTypes} from 'prop-types';
import { Link } from 'react-router-dom';
import './flipCard.css'

export function FlipCard({link,img,textFunction,style}) {

    return (
        <Link to={link} className="flip-card" style={style}>
            <section className='flip-card-inner'>
                <section className='flip-card-front'>
                    <img src={`./img/${img}`} className='flip-card-img'/>
                </section>
                <section className='flip-card-back'>
                    <p className='flip-card-back-p'>{textFunction}</p>
                </section>
            </section>
        </Link>
    )
}


FlipCard.propTypes = {
    link:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    textFunction:PropTypes.string.isRequired,
    style:
      PropTypes.shape({
        transform: PropTypes.string.isRequired,
        transition: PropTypes.string.isRequired,
      }).isRequired
  };
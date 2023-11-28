import './proyectGridLayout.css'
import {PropTypes} from 'prop-types';

export function ProjectGridLayout({imgs}) {

  return (
    <article className='grid-instagram'>
        {imgs.map((img, index) => (
          <section className='grid-instagram-resizeContainer' key={index}>
              <img src={`../../../img/${img}`} className='grid-instagram-img'/>
          </section>
        ))}
    </article>
  )
}

ProjectGridLayout.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
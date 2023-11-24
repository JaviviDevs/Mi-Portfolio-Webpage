import {PropTypes} from 'prop-types';
import { FlipCard } from '../Flip-Card/flipCard.jsx';
import { useState} from 'react';
import './projectCardCarrousel.css'



export function ProjectCardsCarrousel({cards}) {
    let iter = [];

    for (let i = 0; i < cards.length; i++) {
      iter.push(i);
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
      if (currentIndex < cards.length-1) {//En la ultima iteracion no se ve ningun elemento por eso, ponemos 1 menos
        setCurrentIndex(currentIndex + 1);
      } else {
        // Si estás en el último elemento, vuelve al primero.
        setCurrentIndex(0);
      }
    };
  
    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        // Si estás en el último elemento, vuelve al primero.
        setCurrentIndex(cards.length-1); 
      }
    };
  
    const cardContainerStyle = {
      transform: `translateX(-${currentIndex * 235}px)`, 
      transition: 'transform 0.5s ease',
    };

    return (
      <article className='project-cards-carrousel'>
        <button className='project-cards-carrousel-button' onClick={prevSlide}>&lt;</button>
        <section className='project-cards-carrousel-container' >
            {cards.map((card, indx) => (
                <FlipCard key={indx} 
                          link={card.url} 
                          img={card.urlImage}
                          textFunction={card.name}
                          style={cardContainerStyle}/>
            ))}
        </section>
        <button className='project-cards-carrousel-button' onClick={nextSlide}>&gt;</button>
      </article>
    );
}

ProjectCardsCarrousel.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      urlImage: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
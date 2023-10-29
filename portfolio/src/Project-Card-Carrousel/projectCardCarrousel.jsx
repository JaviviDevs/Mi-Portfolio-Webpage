import './projectCardCarrousel.css'
import { ProjectCard} from '../Project-Card/projectCard.jsx'
import { useState,useEffect} from 'react';


export function ProjectCardsCarrousel({cards}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const iter = windowWidth > 768 ? [0, 1] : [0]; // Vector condicional según el ancho de la ventana

    useEffect(() => {
        // Función para actualizar el ancho de la ventana cuando cambie el tamaño de la ventana
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Agrega un oyente de eventos para el evento 'resize' que se dispara cuando cambia el tamaño de la ventana.
        window.addEventListener('resize', handleResize);

        // Limpia el oyente de eventos cuando el componente se desmonta.
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    const nextSlide = () => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % cards.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((currentIndex) => (currentIndex - 1 + cards.length) % cards.length);
    };

    return (
      <article className='project-cards-carrousel'>
        <button className='project-cards-carrousel-button' onClick={prevSlide}>&lt;</button>
        <section className='project-cards-carrousel-container' >
            {iter.map((iter, indx) => (
                <ProjectCard key={indx} 
                             link={cards[(currentIndex+iter)%cards.length][0][0]} 
                             imgProject={cards[(currentIndex+iter)%cards.length][1][0]} 
                             title={cards[(currentIndex+iter)%cards.length][2][0]} 
                             technologies={cards[(currentIndex+iter)%cards.length][3]}/>
            ))}
        </section>
        <button className='project-cards-carrousel-button' onClick={nextSlide}>&gt;</button>
      </article>
    );
}


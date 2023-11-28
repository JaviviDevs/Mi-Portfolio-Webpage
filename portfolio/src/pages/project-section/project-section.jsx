import {PropTypes} from 'prop-types';
import { ProjectCardsCarrousel } from '../../components/Project-Card-Carrousel/projectCardCarrousel.jsx';
import { ProjectGridLayout } from '../../components/Project-GridLayout/projectGridLayout.jsx';
import  {useParams} from  'react-router-dom';

import './project-section.css'

export function ProjectSection({title,projectsCards}) {
  const {nombreProyecto}=useParams();
  const ProjectsImgs =  {
    TFG :  
    [
      
    ],
    Cards: 
    [
      'CardGameImgs/tablero_greenBar-prototipo1.png',
      'CardGameImgs/tablero_3D-prototipo1.png',
      'CardGameImgs/tablero+jugadores.png',
      'CardGameImgs/steve_ataque-prototipo2.png',
      'CardGameImgs/steve_base-prototipo2.png',
      'CardGameImgs/steve_bloqueo-prototipo2.png',
      'CardGameImgs/jedi_ataque-prototipo2.png',
      'CardGameImgs/jedi_base-prototipo2.png',
      'CardGameImgs/jedi_bloqueo-prototipo2.png',
      'CardGameImgs/funcionamiento1-prototipo2.png',
      'CardGameImgs/funcionamiento2-prototipo2.png',
      'CardGameImgs/funcionamiento3-prototipo2.png',
    ],
  }
  


  return (
    <article className='projects' id='Projects'>
        <h3 className='projects-h3'>{title}</h3>
        <ProjectCardsCarrousel cards={projectsCards}/>
        {ProjectsImgs[nombreProyecto]?.length > 0 ? <ProjectGridLayout imgs={ProjectsImgs[nombreProyecto]}/>:''}
    </article>
  )
}

ProjectSection.propTypes = {
  title:PropTypes.string.isRequired,
  projectsCards: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      urlImage: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
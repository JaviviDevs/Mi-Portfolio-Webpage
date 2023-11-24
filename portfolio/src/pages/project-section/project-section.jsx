import {PropTypes} from 'prop-types';
import { ProjectCardsCarrousel } from '../../components/Project-Card-Carrousel/projectCardCarrousel.jsx'
import './project-section.css'



export function ProjectSection({title,projectsCards}) {
  
  return (
    <article className='projects' id='Projects'>
        <h3 className='projects-h3'>{title}</h3>
        <ProjectCardsCarrousel cards={projectsCards}/>
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
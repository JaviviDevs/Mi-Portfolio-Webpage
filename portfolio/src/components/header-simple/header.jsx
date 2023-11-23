import {PropTypes} from 'prop-types';
import { NavBar } from '../navBar/navBar.jsx';
import './header.css'


export function Header({name}) {

  const listLinks=[
                    {url:'AboutMe',text:'Sobre mi'},
                    {url:'Projects',text:'Proyectos'},
                    {url:'Skills',text:'Skills'},
                    {url:'Education',text:'Formación'},
                    {url:'ContactMe',text:'Contacto'}
                  ];

  return (
    <article className='header'>
      <h2 className='header-h2'>{name}</h2>
      <NavBar links={listLinks} />
    </article> 
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
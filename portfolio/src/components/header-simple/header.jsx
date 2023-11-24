import {PropTypes} from 'prop-types';
import { NavBar } from '../navBar/navBar.jsx';
import './header.css'


export function Header({name,HeaderClass}) {

  const listLinks=[
    {url:'/',text:'Home'},
    {url:'AboutMe',text:'About me'},
    {url:'Projects',text:'Projects'},
    {url:'Skills',text:'Skills'},
    {url:'Education',text:'Education'},
    {url:'ContactMe',text:'Contact'}
  ];

  return (
    <article className={HeaderClass}>
      <section className='bar-header'>
        <h2 className='header-h2'>{name}</h2>
        <NavBar links={listLinks} />
      </section>
    </article> 
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  HeaderClass:PropTypes.string.isRequired,
};
import { NavBar } from '../navBar/navBar.jsx';
import './header.css'


export function Header({name}) {

  const listLinks=[
                    ['#AboutMe','Sobre mi'],
                    ['#Projects','Proyectos'],
                    ['#Skills','Skills'],
                    ['#Education','Formación'],
                    ['#ContactMe','Contacto']
                  ];

  return (
    <article className='header'>
      <h2 className='header-h2'>{name}</h2>
      <NavBar links={listLinks} />
    </article> 
  )
}
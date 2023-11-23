import {PropTypes} from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navBar.css'
export function NavBar({ links }) {

    const [isMenuActive, setMenuActive] = useState(false);
    const navBarIconClass=isMenuActive ? 'navBar-icon-cross' : 'navBar-icon-menu';
    const navBarMenuClass=isMenuActive ? 'navBar-menu' : 'navBar-menu-hidden'

    const openCloseMenu = (e) => {
        if (e.target.className === 'navBar-icon-cross' || e.target.className === 'navBar-menu') { 
            setMenuActive(false);
        }else{
            setMenuActive(true);
        }
    };

    return (
        <article className='navBar'>
            <section className={navBarIconClass} onClick={openCloseMenu}>
            </section>
            <section className={navBarMenuClass} onClick={openCloseMenu}>
                {links.map((link, indx) => (
                    <a to={link.url} key={indx} className='navBar-menu-a'>{link.text}</a>
                ))}
            </section>
        </article>
    )
}


NavBar.propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
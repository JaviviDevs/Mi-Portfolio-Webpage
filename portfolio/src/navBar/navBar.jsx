
import './navBar.css'
import { useState } from 'react';

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
                    <a key={indx} href={link[0]} className='navBar-menu-a'>{link[1]}</a>
                ))}
            </section>
        </article>
    )
}



import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {   //if scroll down - hide navbar
        setShow(true);
      } else {                              //if scroll up - show navbar
        setShow(false);
      }
      setLastScrollY(window.scrollY);       //remember current page location to use in next move
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
    } 
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);


  return (
    <div className={`navbar ${show && 'hidden'}`}>
      <div className='navbar-container'>
        <NavLink className='logo-link' to="/">Irene Wickman Assistanshundar</NavLink>
        <button className='navbar-toggler'>
          <i className='fas fa-bars'></i>
          <ul className='nav-links toggle-navbar'>
            <li><NavLink to={'/dogs'}>Assistans&shy;hundar</NavLink></li>
            <li><NavLink to={'/videos'}>Assistanshund&shy;beteenden</NavLink></li>
            <li><NavLink to={'/training'}>Träning av assistanshundar</NavLink></li>
            <li><NavLink to="/daycare">Hunddagis och hundpensionat</NavLink></li>
            <li><NavLink to="/about">Om mig</NavLink></li>
            <li><NavLink to="/connect">Kontakt</NavLink></li>
          </ul>
        </button>

        <div className='collapse navbar-collapse'>
          <ul className='nav-links navbar-nav'>
            <div>
              <li className='dogs-dropdown'>
                <NavLink to={'/dogs'}>
                  Assistans&shy;hundar
                  <i className='fa fa-caret-down'></i>
                </NavLink>
                <ul className='dogs-dropdown-content'>
                  <li><NavLink to={'/dogs'}>Assistans&shy;hundar</NavLink></li>
                  <li><NavLink to={'/videos'}>Assistanshund&shy;beteenden</NavLink></li>
                  <li><NavLink to={'/training'}>Träning av assistanshundar</NavLink></li>
                </ul>
              </li>
            </div>
            <li><NavLink to="/daycare">Hunddagis och hundpensionat</NavLink></li>
            <li><NavLink to="/about">Om mig</NavLink></li>
            <li><NavLink to="/connect">Kontakt</NavLink></li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
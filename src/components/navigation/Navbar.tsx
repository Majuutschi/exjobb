import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <NavLink className='logo-link' to="/">Irene Wickman Assistanshundar</NavLink>
        <ul className='nav-links'>
          <li><NavLink to="/dogtraining">Assistanshundar</NavLink></li>
          <li><NavHashLink to={'/dogtraining#video'}>Assistanshundbeteenden</NavHashLink></li>
          <li><NavHashLink to={'/dogtraining#training'}>Träning av assistanshundar</NavHashLink></li>
          <li><NavLink to="/daycare">Hunddagis och hundpensionat</NavLink></li>
          <li><NavLink to="/about">Om mig</NavLink></li>
          <li><NavLink to="/connect">Kontakt</NavLink></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
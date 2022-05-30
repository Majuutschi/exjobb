import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h1> Välkommen till Irene Wickman Assistanshundar</h1>
        <div className='home-choice'>
          <div className='choice'>
            <NavLink to='/dogs'>
              <div className='choice-image'>
                <img src={require('../images/herofb2.jpg')} alt="Assistanshund ligger på golvet." />
              </div>
              <div className='choice-title'>
                <h2>Assistanshundar</h2> 
              </div>
            </NavLink>
          </div>
          <div className='choice'>
            <NavLink to='/daycare'>
              <div className='choice-image'>
                <img src={require('../images/hunddagis11.jpg')} alt="Två hundar utanför hunddagiset." />
              </div>
              <div className='choice-title'>
                <h2>Hunddagis och hundpensionat</h2>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
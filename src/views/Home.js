import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h1> Välkommen till Irene Wickman Assistanshundar</h1>
        <div className='home-choice'>
          <div className='choice'>
            <div className='choice-image'>
              <img src={require('../images/herofb2.jpg')} alt="" />
            </div>
            <div className='choice-title'>
              <h4>Assistanshundar</h4> 
            </div>
          </div>
          <div className='choice'>
            <div className='choice-image'>
              <img src={require('../images/hunddagis1.jpg')} alt="" />
            </div>
            <div className='choice-title'>
              <h4>Hunddagis och hundpensionat</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'

const Daycare = () => {
  return (
    <div className='container'>
      <div className='content'>
        <div className='daycare-image'>
          <img className='daycare-big-img' src={require('../images/hunddagis.jpg')} alt="" />
          <img className='daycare-small-img' src={require('../images/hunddagis21.jpg')} alt="" />
          <img className='daycare-both-img' src={require('../images/hunddagis11.jpg')} alt="" />
          <img className='daycare-both-img' src={require('../images/hunddagis22.jpg')} alt="" />
        </div>
        <div className='daycare-content'>
          <h1>Gårdesta hunddagis och hundpensionat</h1>
          <p>
            Ett hunddagis och hundpensionat ute på landet endast 3km från E18! Avfart 124, Munktorp. 
            Perfekt för pendlare mellan Köping och Västerås. Platser finns både på hunddagis och pensionat.
          </p>
          <p>
            Fina rymliga boxar! Två st fina rastgårdar varav en i skogsmiljö. Fina promenadvägar i skog och byvägar.
          </p>
          <p>
            Kloklippning 100 kr, omvårdnad (kollar öron, borstning, tänder) 100 kr, badning 250 kr.
          </p>
          <p>
            Jag är utbildad hundinstruktör, assistanshundsinstruktör och har gått hunddagisutbildning samt naturligtvis godkänd av Länsstyrelsen.
          </p>
          <p>
            För bokning och information: 0704 83 55 53 eller info@iwassistanshundar.se   
          </p>
        </div>
        
        <h2 className='price-title'>Priser</h2>
        <div className='prices'>
          <div>
            <h3>Hunddagis per månad</h3> 

            <h4>Heltid</h4>
            <ul className='price-list'>
              <li className='price-list-item'>1 hund 2950 kr</li>
              <li className='price-list-item'>2 hundar i samma box 5200kr</li>
              <li className='price-list-item'>3 hundar i samma box 6500 kr</li>
            </ul>

            <h4>Halvtid (29 tim och mindre i veckan)</h4>
            <ul className='price-list'>
              <li className='price-list-item'>1 hund 1950kr</li>
              <li className='price-list-item'>2 hundar 3200 kr</li>
              <li className='price-list-item'>3 hundar 4950kr</li>
            </ul>
          </div>

          <div>
            <h3>Hundpensionat - dygn</h3>
            <h4>1 dygn</h4>
            <ul className='price-list'>
              <li className='price-list-item'>1 hund 500 kr</li>
              <li className='price-list-item'>2 hundar 800 kr</li>
              <li className='price-list-item'>3 hundar 1100 kr</li>
            </ul>

            <h4>Helg dygn fre - sön </h4>
            <ul className='price-list'>
              <li className='price-list-item'>1 hund 750 kr</li>
              <li className='price-list-item'>2 hundar 1250 kr</li>
              <li className='price-list-item'>3 hundar 1700 kr</li>
            </ul>

            <h4>Storhelg per dygn</h4>
            <ul className='price-list'>
              <li className='price-list-item'>1 hund 1000 kr</li>
              <li className='price-list-item'>2 hundar 1500 kr</li>
              <li className='price-list-item'>3 hundar 2000 kr</li>
            </ul>
          </div>
            
          <div>
            <h3>Hundpensionat - veckopris</h3>
            <h4>1 vecka</h4>
            <ul className='price-list'>
              <li className='price-list-item'>1 hund 2500 kr</li>
              <li className='price-list-item'>2 hundar 4800kr</li>
              <li className='price-list-item'>3 hundar 6500kr</li>
            </ul>

            <h4>2 veckor</h4>
            <ul className='price-list'>
              <li className='price-list-item'>1 hund 4800kr</li>
              <li className='price-list-item'>2 hundar 7200kr</li>
              <li className='price-list-item'>3 hundar 11500 kr</li>
            </ul>
            
            <h4>3 veckor</h4>
            <ul className='price-list'>
              <li className='price-list-item'>1 hund 6200kr</li>
              <li className='price-list-item'>2 hundar 11000 kr</li>
              <li className='price-list-item'>3 hundar 15000 kr</li>
            </ul>

            <h4>4 veckor</h4>
            <ul className='price-list'>
              <li className='price-list-item'>1 hund 7800 kr</li>
              <li className='price-list-item'>2 hundar 13000 kr</li>
              <li className='price-list-item'>3 hundar 17 000kr </li>
            </ul>
            <ul className='price-list'>
              <li className='price-list-item'>Semesterveckor v. 27-33</li>
              <li className='price-list-item'>200 kr extra per dygn per hund!</li>
            </ul>
          </div>
        </div>
        
        <div className='daycare-social'>
          <a href="https://www.facebook.com/Gårdesta-Hunddagis-och-Hundpensionat-334511567430024/">Följ oss gärna på FaceBook!</a>
        </div>
      </div>
    </div>
  )
}

export default Daycare
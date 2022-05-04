import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h1>Om mig</h1>
        <div className='about-content'>
          <div className='about-img'>
            <img src={require('../images/about1.jpg')} alt="" />
          </div>
          <div className='about-text'>
            <p>
              Jag bor utanför Köping med min sambo och vi har två vuxna barn och två barnbarn. Jag har alltid älskat hundar och funderade länge på vad jag kunde bli för att kunna jobba med hund.
              Assistanshundar var det jag fastnade för och jag är glad att det blev så.
              Jag har oftast en hund i träning hemma och köper sen en ny då den andra börjar bli klar.
              Vi bor på landet och har mycket nära till skogen där vi promenerar.
            </p>
            <p>
              Jag är assistanshundsinstruktör för Svenska Brukshundklubben som har fått uppdrag från Myndigheten för delaktighet, regeringens uppdrag att upphandla en stödfunktion för assistanshundverksamheten i Sverige.
              Jag är utbildad assistanshundsintruktör via Hundens Hus och Beteendeteknolog med inriktning assistanshundar hos Dala Hundservice.
            </p>
            <p>
              Jag får utbilda servicehundar, signalhundar, epilepsihundar och psykisk hälsa hund. Jag utbildar mig nu även till diabeteshundstränare och har just nu endast en hund kvar att utbilda.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
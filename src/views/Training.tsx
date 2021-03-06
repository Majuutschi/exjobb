import React from 'react'

const Training = () => {
  return (
    <div id='training' className='light'>
      <div className='container'>
        <div className='content'>
          <h1>Träning av assistanshundar</h1>
          <div className='one-pic'>
            <img src={require('../images/herofb1.jpg')} alt="Assistanshund ligger på golvet" />
          </div>

          <div className='two-pics'>
            <div className='training-dog'>
              <div className='training-img'>
                <img src={require('../images/hero.jpg')} alt="Assistanshund sitter och tittar upp mot kameran" />
              </div>
            </div>
            <div className='training-dog'>
              <div className='training-img'>
                <img src={require('../images/clarkkent.jpg')} alt="Assistanshund framifrån" />
              </div>
            </div>
          </div>
          <div className='three-pics'>
            <div className='training-dog'>
              <div className='training-img'>
                <img src={require('../images/hero.jpg')} alt="Assistanshund sitter och tittar upp mot kameran" />
              </div>
            </div>
            <div className='training-dog'>
              <div className='training-img'>
                <img src={require('../images/Charlie.jpg')} alt="Assistanshund sitter och tittar snett framåt" />
              </div>
            </div>
            <div className='training-dog'>
              <div className='training-img'>
                <img src={require('../images/clarkkent.jpg')} alt="Assistanshund framifrån" />
              </div>
            </div>
          </div>
          <div className='training-text'>
            <h2>Färdig assistanshund</h2>
            <p>Jag tränar upp färdiga assistanshundar om det är så att man inte klarar av eller inte har varken ork eller tid till att träna sin egen hund.
              Hunden bor inne i familjen hos oss och är en familjemedlem. Träningen tar ca 1 år beroende på hur gammal hunden är. Hunden måste vara minst 15 månader för att kunna certifieras.  Jag köper hunden när den är från 8 veckor och framåt. När hunden fyllt ett år gör man olika tester för att se om den är lämplig för att bli assistanshund och sen börjar den riktiga träningen.
              Jag tränar hunden med positiv förstärkning vilket menas att man förstärker när hunden gör rätt och ignorerar när hunden gör fel i träningen.
            </p>
            <p className='training-price'>Pris: 180 000 kr</p>
            <p className='for-sale'>Jag har ingen hund till salu just nu.</p>

            <h2>Träna sin egen hund</h2>
            <p>Man kanske har en hund redan som man tycker passar för att bli assistanshund. Det man måste tänka på då är att man ska genomgå testerna för att kunna bli assistanshund samt kolla upp vad rasen/raserna har för hälsoprogram om de ska röntgas mm. Man måste även ha en instruktör som man tar privatlektioner av.
              Jag är med som instruktör och stöd vid BPH och lämplighetstest samt examen.
            </p>
            <p className='training-price'>
              Privatlektionerna kostar 850 kr per timme.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Training
import React from 'react'

const Dogs = () => {
  return (
    <div id='dogs' className='light'>
      <div className='container'>
        <div className='content'>
          <h1>Assistanshundar</h1>

          <div className='dogs-text'>
            <p>Assistanshundar är ett ord för flera olika hundar. Det finns:</p>

            <ul className='dogs-list'>
              <div className='dogs-img img-a'>
                <img src={require('../images/dog12.jpg')} alt="" />
              </div>
              <div className='dogs-img img-a-small'>
                <img src={require('../images/dog3.jpg')} alt="" />
              </div>
              <li className='dogs-list-item'>
                <h3>Servicehundar</h3>
                <p>Hjälper funktionsnedsatta med att hämta saker, öppna och stänga dörrar mm.</p> 
              </li>
              <li className='dogs-list-item'>
                <h3>Signalhundar</h3>
                <p>Hjälper de som är hörselskadade med att höra olika ljud. T.ex. om någon ropar, telefonen ringer eller om någon ringer på dörren, brandlarmet mm.</p>
              </li>
              <li className='dogs-list-item long-text-b'>
                <h3>Alarmerande assistanshundar</h3>
                <h4>Diabeteshundar</h4>
                <p>Larmar sin ägare vid antingen för lågt eller för högt blodsocker eller både och. Hunden känner doften från ägarens mun och puttar på ägaren så den kan ta medicin eller något att äta.</p>
                <h4>Epilepsihundar</h4>
                <p>Larmar vid anfall. Ibland även innan ett anfall.</p>
              </li>
              <div className='dogs-img img-b'>
                <img src={require('../images/dog2.jpg')} alt="" />
              </div>
              <li className='dogs-list-item'>
                <h3>Ledarhundar</h3>
                <p>Hjälper de synskadade i att leda dem förbi hinder och hitta olika platser.</p>
              </li>
              <li className='dogs-list-item long-text-c'>
                <h3>Servicehund för personer med synnedsättning</h3>
                <p>Hjälper sin ägare att ta sig fram runt hinder och är även en servicehund samtidigt. För personer som inte är gravt synskadade så de är berättigade till en ledarhund.</p>
              </li>
              <li className='dogs-list-item'>
                <h3>Assistanshund för psykisk hälsa</h3>
                <p>Hjälper och stöttar sin ägare i jobbiga situationer så som för mycket folk, läkarbesök mm.</p>
              </li>
            </ul>

            <p>En assistanshund är oftast välkommen på de flesta platser, men fortfarande behövs mer information om att de ska vara välkomna på vissa platser.
              Jag har haft turen att vara välkomnad av både personal och medmänniskor där jag har varit och tränat. Många frågar och är intresserade och vet inte vad en assistanshund gör och det är bara trevligt.
            </p>
            <p>
              En assistanshund måste ha ett arbetstäcke på sig när den är ute och jobbar och ska gå in i någon affär eller annan offentlig byggnad. Det täcket betyder också att man inte får hälsa på hunden.
              Jag har täcken, som det står assistanshund under utbildning på, på mina hundar och det gäller även där att inte hälsa på hunden.
              Man kan dock inte ta sitt egna hemgjorda täcke och sätta på sin hund och gå in i en affär. Dessa hundar genomgår tester och hälsoundersökningar samt en massa träning innan de får sina träningstäcken.
            </p>

          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Dogs
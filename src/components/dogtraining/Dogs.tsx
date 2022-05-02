import React from 'react'

const Dogs = () => {
  return (
    <div className='light'>
      <div className='container'>
        <div className='content'>
          <h1>Assistanshundar</h1>

          <div className='three-pics'>
            <div className='dogs-img'>
              <img src={require('../../images/dog1.jpg')} alt="" />
            </div>
            <div className='dogs-img'>
              <img src={require('../../images/dog2.jpg')} alt="" />
            </div>
            <div className='dogs-img'>
              <img src={require('../../images/dog3.jpg')} alt="" />
            </div>
          </div>

          <div className='dogs-text'>
            <p>Assistanshundar är ett ord för flera olika hundar.</p>
            <h4>Det finns:</h4>

            <ul className='dogs-list'>
              <li className='dogs-list-item'>
                <span>Servicehundar</span> som hjälper funktionsnedsatta med att hämta saker, öppna och stänga dörrar mm.
              </li>
              <li className='dogs-list-item'>
                <span>Signalhundar</span>  hjälper de som är hörselskadade med att höra olika ljud. Te x om någon ropar, telefonen ringer eller om någon ringer på dörren, brandlarmet mm.
              </li>
              <li className='dogs-list-item'>
                <span>Alarmerande assistanshundar</span> (diabetes och epilepsihundar)
              </li>
              <li className='dogs-list-item'>
                <span>Diabeteshundar</span> larmar sin ägare vid antingen för lågt eller för högt blodsocker eller både och. Hunden känner doften från ägarens mun och puttar på ägaren så den kan ta medicin eller något att äta.
              </li>
              <li className='dogs-list-item'>
                <span>Epilepsihundar</span> Larmar vid anfall. ibland även innan ett anfall.
              </li>
              <li className='dogs-list-item'>
                <span>Ledarhundar</span> hjälper de synskadade i att leda dem förbi hinder och hitta olika platser.
              </li>
              <li className='dogs-list-item'>
                <span>Assistanshund för psykisk hälsa</span> hjälper och stöttar sin ägare i jobbiga situationer så som för mycket folk, läkarbesök mm.
              </li>
              <li className='dogs-list-item'>
                <span>Servicehund för personer med synnedsättning</span> hjälper sin ägare att ta sig fram runt hinder och är även en servicehund samtidigt. För personer som inte är gravt synskadade så de är berättigade till en ledarhund.
              </li>
            </ul>

            <p>En assistanshund är oftast välkommen på de flesta platser, men fortfarande behövs mer informatiion om att de ska vara välkomna på vissa platser.
              Jag har haft turen att vara välkomnad av både personal och medmänniskor där jag har varit och tränat. Många frågar och är intresserade och vet inte vad en assistanshund gör och det är bara trevligt.
            </p>
            <p>
              En assistanshund måste ha ett arbetstäcke på sig när den är ute och jobbar och ska gå in i någon affär eller annan offentlig byggnad. Det täcket betyder också att man inte får hälsa på hunden.
              Jag har täcken på mina som det står assitanshund under utbildning på och det gäller även där att inte hälsa på hunden.
              Man kan dock inte ta sitt egna hemgjorda täcke och sätta på sin hund och gå in i en affär. Dessa hundar genomgår tester och hälsoundersökningar samt en massa träning innan de får sina träningstäcken.
            </p>

          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Dogs
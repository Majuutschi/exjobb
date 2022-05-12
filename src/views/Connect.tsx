import React, { useState } from 'react';
import ConnectForm from '../components/connect/ConnectForm';

const Connect = () => {
  

  return (
    <div className='container'>
      <div className='content'>
        <h1>Kontakta mig</h1>
        <div className='connect-content'>
          <ConnectForm />
          <div className='connect-details'>
            <div className='connect-map-container'>
              <iframe 
                className='connect-map' 
                title='map' 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2019.2121775702024!2d16.091720716191602!3d59.59618059663961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e7fd6a308fc37%3A0xab4117f1cf8472e6!2sIrene%20WickmanAssistanshundar!5e0!3m2!1ssv!2sse!4v1651478901489!5m2!1ssv!2sse" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='connect-items'>
              <div className='connect-item address'>
                <p>Irene Wickman</p>
                <p>Gårdesta 6</p>
                <p>73192 Köping</p>
              </div>
              <div className='connect-item'>
                <p>0704 83 55 53</p>
                <p><a href="mailto:info@iwassistanshundar.se">info@iwassistanshundar.se</a></p>
              </div>
              <div className='connect-item'>
                <p>BG: 623-6186</p>
                <p>Swish: 1230867739</p>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
import React, { useState } from 'react';

const ConnectForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  }

  return (
    <div className='form-container'>
      {
        !submitted &&
        <form 
          action=""
          onSubmit={handleSubmit}
        >
          <div className='form-item'>
            <label htmlFor="name">
              Namn:
            </label>
            <input 
              id='name' 
              type="text" 
              required 
            />
          </div>
          <div className='form-item'>
            <label htmlFor="mail">
              E-post:
            </label>
            <input 
              id='mail' 
              type="text" 
              required 
            />
          </div>
          <div className='form-item'>
            <label htmlFor="message">
              Meddelande:
            </label>
            <textarea 
              name="message" 
              id="message" 
              cols={30} 
              rows={10}
              required
            ></textarea>
          </div>
          <div className='btn-center'>
            <button type='submit' className='btn'>Skicka</button>
          </div>
          
        </form> 
      }
      {
        submitted &&
        <div>
          <h3>Tack för ditt meddelande!</h3>
        </div>
      }
      
    </div>
  )
}

export default ConnectForm
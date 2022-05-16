import React, { ChangeEvent, FormEvent, useState } from 'react';
import { LoadingIndicatorDots } from '../LoadingIndicator';

const ConnectForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$/;

  const handleChange = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      if (e.target.id === 'name') {
        setName(e.target.value);
      }
      if (e.target.id === 'email') {
        setEmail(e.target.value);
      }
    }

    if (e.target instanceof HTMLTextAreaElement) {
      setMessage(e.target.value);
    }
  }


  const handleSubmit = (e: FormEvent) => {
    if(e.target instanceof HTMLFormElement) {
      e.preventDefault();

      if (email !== '' && name !== '' && message !== '') {
        if (regex.test(email)) {
          setLoading(true);
          setError(false)
          setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
          }, 800);
          e.target.reset();
        } else {
          setError(true);
          setErrorMessage('Vänligen fyll i en giltig e-postadress');
        }
        
      } else {
        if (email === '') {
          setError(true);
          setErrorMessage('Vänligen fyll i en giltig e-postadress');
        } else if (name === '') {
          setError(true)
          setErrorMessage('Vänligen fyll ditt namn');
        } else if (message === '') {
          setError(true)
          setErrorMessage('Vänligen skriv ditt meddelande');
        }
      }
      
    }
    
  }

  return (
    <div className='form-container'>
      {
        !submitted && !loading &&
        <form 
          onSubmit={handleSubmit}
        >
          <div className='form-item'>
            <label htmlFor="name">
              Namn:
            </label>
            <input 
              value={name}
              id='name' 
              name='name'
              type="text"  
              onChange={handleChange}
            />
            <small className='connect-error'>{errorMessage}</small>
          </div>
          <div className='form-item'>
            <label htmlFor="email">
              E-post:
            </label>
            <input 
              id='email' 
              type='email' 
              name='email'
              onChange={handleChange}
              value={email}
            />
            <small className='connect-error'>{errorMessage}</small>
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
              value={message}
              onChange={handleChange}
            ></textarea>
            { error &&
              <small className='connect-error'>{errorMessage}</small>
            }
            
          </div>
          <div className='btn-center'>
            <button type='submit' className='btn'>Skicka</button>
          </div>
          
        </form> 
      }
      {
        !submitted && loading &&
        <LoadingIndicatorDots />
      }
      {
        submitted && !loading &&
        <div>
          <div className='heart'></div>
          <h3>Tack för ditt meddelande!</h3>
        </div>
      }
      
    </div>
  )
}

export default ConnectForm
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { LoadingIndicatorDots } from '../LoadingIndicator';

const ConnectForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState<string>('');
  const [mailErrorMessage, setMailErrorMessage] = useState<string>('');
  const [messageErrorMessage, setMessageErrorMessage] = useState<string>('');

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

      if (email.length === 0 && name.length === 0 && message.length === 0) {
        if (email.length === 0) {
          setError(true);
          setMailErrorMessage('Vänligen fyll i en giltig e-postadress');
        } else if (email.length !== 0) {
          if (regex.test(email)) {
            setError(false)
            setNameErrorMessage('');
          } else {
            setError(true);
            setMailErrorMessage('Vänligen fyll i en giltig e-postadress');
          }
        }
        if (name.length === 0) {
          setError(true)
          setNameErrorMessage('Vänligen fyll ditt namn');
        } else if (message.length !== 0) {
          setError(false)
          setNameErrorMessage('');
        }
        if (message.length === 0) {
          setError(true)
          setMessageErrorMessage('Vänligen skriv ditt meddelande');
        } else if (message.length !== 0) {
          setError(false)
          setMessageErrorMessage('');
        }
      } else if (email.length !== 0 && name.length !== 0 && message.length !== 0) {
        setLoading(true);
        setError(false)
        setTimeout(() => {
          setLoading(false);
          setSubmitted(true);
        }, 800);
        e.target.reset();
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
            <small className='connect-error'>{nameErrorMessage}</small>
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
            <small className='connect-error'>{mailErrorMessage}</small>
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
              <small className='connect-error'>{messageErrorMessage}</small>
            }
            {
              !error &&
              <small className='connect-error'>{messageErrorMessage}</small>
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
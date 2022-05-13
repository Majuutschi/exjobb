import React, { ChangeEvent, FormEvent, useState } from 'react';
import { LoadingIndicatorDots } from '../LoadingIndicator';

const ConnectForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      if (e.target.name === name) {
        setName(e.target.value);
        console.log('name')
      }
      // if (e.target.id = email) {
      //   setEmail(e.target.value);
      //   console.log('email')
      // }
      
    }

    if (e.target instanceof HTMLTextAreaElement) {
      setMessage(e.target.value);
      console.log('message')
      console.log(e.target.value)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    if(e.target instanceof HTMLFormElement) {
      e.preventDefault();
      setLoading(true);
      // _values = [
      //   name,
      //   email,
      //   message
      // ]
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 800);
      e.target.reset();
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
              required
            ></textarea>
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
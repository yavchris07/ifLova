import React, { useState } from 'react'
import { baseUrl } from '../types/base-url';

export default function Footer() {
  const [email, setMail] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [er, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      const response = await fetch(`${baseUrl}/Insert-New/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      // console.log('Email', email)
      // console.log(await response.text())

      const data = await response.json();

      if (data) {
        setMail('')
      }

      if (!response.ok) {
        throw new Error(`Erreur lors de tentative de creation de news letters !`);
      }

    } catch (error) {
      setError(`Erreur : ${error}`);
      console.log(er)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='footer'>
      <div className='form'>
        <div className='txt'>
          <p>Vous etes passioné par la lecture ? </p>
          <p>Nous avons plusieurs articles , en sécurités, divertissement, sport et beaucoup d'autres</p>
          <p>Priere de nous laisser votre adresse mail !</p>
        </div>

        <div className='ins'>
          <p>Inscription aux news letters</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder='Entrez votre email ici !'
              value={email}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <button type='submit'>{isLoading ? 'En cours' : 'Valider'}</button>
          </form>
        </div>

      </div>


      <div className='foot'>
        <p>Tout droit réservé | IFlova | 2024 </p>
      </div>
    </div>
  )
}



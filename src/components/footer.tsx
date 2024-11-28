import React, { useState } from 'react'
import { baseUrl } from '../types/base-url';

export default function Footer() {
  const [mail,setMail] = useState<string>('')
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [error,setError] = useState<string>('')

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
   
    try {
      setIsLoading(true)
      const response = await fetch(`${baseUrl}/letters`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({mail}),
      });
      // console.log('Email',mail)
      // console.log(await response.text())
  
      const data = await response.json();
     
      if (data.status === 'Letter created') {
        // navigator('/');
        alert('Adresse mail reussie avec succes !')
      }

      if (!response.ok) {
        throw new Error(`Erreur lors de tentative de creation de news letters !`);
      }
  
    } catch (error) {
      setError(`Erreur : ${error}`);
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
            <form  onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="mail" id="" 
                  placeholder='Entrez votre email ici !'
                  value={mail}
                  onChange={(e)=> setMail(e.target.value)}
                  required
                />
                <button type='submit'>Valider</button>
            </form>
        </div>
        
      </div>
      

      <div className='foot'>
        <p>Tout droit réservé | IFlova | 2024 </p>
      </div>
    </div>
  )
}
 


import React, { useState } from 'react'
import '../styles/login.scss'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../types/base-url'


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [mot, setMot] = useState<string>('')
  const [isLoading,setIsLoading] = useState<Boolean>(false)
  const [isError, setError] = useState<string>('')
  const navigator = useNavigate();

  const isDisabled = email === '' || mot === '' || mot.length <= 5

  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setIsLoading(true)
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email,mot}),
      });
      // console.log('Email',mail)
      // console.log(await response.text())
  
      const data = await response.json();
      console.log(data)
     
      if (data[0] === false) {
        setError('Erreur mauvais identifiants, email ou mot de passe !')
      }else{
        const mail = data[0].email
        localStorage.setItem('email',mail)
        navigator('/admin/main');
        // alert('Login succes !')
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
    <div className="login">
      <div className="first">
        <h4>IF LOVA | 2024</h4>
      </div>

      <div className="second">
        <form onSubmit={handleSubmit} className="form-container">
          <h4>If Lova Admin Space</h4>
          <div className="login-control">
            <input
              type="mail"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-control">
            <input
              type="password"
              placeholder='Mot de passe'
              value={mot}
              onChange={(e) => setMot(e.target.value)}
              required
            />
          </div>
          <div style={{fontSize:'12px',color:'#970404'}}>{isError}</div>
          
          <button type="submit" className={isDisabled ? 'not-allowed' : 'allowed'}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

import React from 'react'
import LitleBanner from '../components/litle-banner';
import '../styles/contact.scss'

export default function Contact() {
  return (
    <>
      <LitleBanner 
      title='Comment nous contacter !'
      summary="Votre Destination Ultime pour l'Actualité"
      />

      <div className='contact'>
        <p>Nous sommmes disponible à tout moment, veillez nous contacter via ces adresses ci-dessous !</p>
        <span>Votre Destination Ultime pour l'Actualité, le Divertissement et la Sécurité.</span>
        <span>Plongez dans un monde d'informations fiables et sécuritaires avec IFlova TV1</span>
      </div>

      <div className='contact'>

      <div className='left-card'>
        <div className='picture'></div>

        <div className='text'>
          <p>Notre adresse physique est :</p>
          <p className='p'>Goma, karisimbi, ......</p>
        </div>

      </div>

      <div className='right-card'>
        <div className='text'>
          <p>Notre adresse téléphonique est :</p>
          <p className='p'>+243 900 000 000</p>
          <p className='p'>+243 800 000 000</p>
          <p className='p'>+243 900 000 000</p>
          
        </div>
        <div className='picture'></div>
      </div>

      <div className='left-card'>
        <div className='picture'></div>

        <div className='text'>
          <p>Notre adresse électronique : </p>
          <p className='p'>infos243@iflova.com</p>
        </div>
        
      </div>
      </div>

    </>
  )
}

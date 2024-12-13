import React from 'react'
import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import art from '../types/items'
import LitleBanner from '../components/litle-banner'
import AllCard from '../components/all-card'

export default function Articles() {
  return (
    <>
      <NavBar />
      <LitleBanner 
      title='Tous nos articles'
      summary="Votre Destination Ultime pour l'Actualité"
      />
      <div className='home'>
        <p>
          Nous vous tenons informés des événements importants, des développements sécuritaires et des mises à jour essentielles pour vous aider à rester au fait de l'actualité régionale et internationale.
          Mais ce n'est pas tout - chez IFlova TV1, nous savons que le divertissement est tout aussi crucial.
        </p>
      
          <AllCard articles={art} />
      </div>
    <Footer />
    </>
  )
}

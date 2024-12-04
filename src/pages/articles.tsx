import React from 'react'
import NavBar from '../components/nav-bar'
import CardList from '../components/card-list'
import Footer from '../components/footer'
import art from '../types/items'
import LitleBanner from '../components/litle-banner'

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
        
          <CardList articles={art} />
      </div>
    <Footer />
    </>
  )
}

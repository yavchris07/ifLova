import React from 'react'
import Banner from '../components/banner';
import '../styles/home.scss';
import CardList from '../components/card-list';

function Home() {
  const art = [
    {
      cover: "",
      title : "string", //55
      date : "string",
      summary : "string", //125
      author : "string",
      author_cover : "string",
      typ : "string"
    },
    {
      cover: "",
      title : "string", //55
      date : "string",
      summary : "string", //125
      author : "string",
      author_cover : "string",
      typ : "string"
    },
    {
      cover: "",
      title : "string", //55
      date : "string",
      summary : "string", //125
      author : "string",
      author_cover : "string",
      typ : "string"
    }

  ]
  
  return (
    <>
      <Banner />
      <div className='home'>
        <p>
          Nous vous tenons informés des événements importants, des développements sécuritaires et des mises à jour essentielles pour vous aider à rester au fait de l'actualité régionale et internationale.
          Mais ce n'est pas tout - chez IFlova TV1, nous savons que le divertissement est tout aussi crucial. <span style={{color:'#970404'}}>C'est pourquoi nous vous proposons une gamme diversifiée de contenus divertissants, 
          des interviews exclusives aux critiques de films, en passant par les dernières tendances musicale</span>.
        </p>

        <div className='list-card'></div>
        <div className='list-card'></div>
          <CardList article={art} />
      </div>
     
    </>
  )
}

export default Home
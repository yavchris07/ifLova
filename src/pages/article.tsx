import React from 'react'
import { useParams } from 'react-router-dom';
// import art from '../types/items';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import author from '../assets/main-cover.jpg';
import useFetchData from '../hooks/use-fetch-articles';
import { decryptId } from '../hooks/decrypt';

export default function Article() {
  // const { id } = useParams<{ id: string }>();
  const { encryptedId } = useParams<{ encryptedId: string }>();
  const {art} = useFetchData()
  let article;

  if (encryptedId) {
    const i = decryptId(encryptedId);
    article = art.find(a => a.id === parseInt(i));
  }


  if (!article) {
    return <div className='not-found'>Chargement en cours, veuillez patienter !</div>
  }
  return (
    <>
      <NavBar />
      <div className='single-article'>
       
        <div>
        <h3>{article.titre.toUpperCase()}</h3>
        </div>
        <div className='picture'>
          <span>{article.type}</span>
          <img src={article.image} alt={article.image} />
        </div>
        <div>{article.resumer}</div>

        <div className='context'>
          <div className="avatar">
            <img src={author} alt={author}/>
            <span>{article.auteur}</span>
          </div>
          <div className="date-of-post">Le {article.date_article}</div>
        </div>

      </div>
      <Footer />
    </>

  )
}


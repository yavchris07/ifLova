import React from 'react'
import { useParams } from 'react-router-dom';
import art from '../types/items';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';

export default function Article() {
  const { id } = useParams<{ id: string }>();
  // const { encryptedId } = useParams<{ encryptedId: string }>();
  // const {arti} = useFetchData()
  let article;

  if (id) {
    // const id = decryptId(encryptedId);
    article = art.find(a => a.id === parseInt(id));
  }

  if (!article) {
    return <div className='not-found'>Chargement en cours, veuillez patienter !</div>
  }
  return (
    <>
      <NavBar />
      <div className='article'>
        {/* <p>{article.summary}</p>
        <p>{article.title}</p>
        {article.cover && <img src={article.cover} alt={article.title} />} */}
      </div>
      <Footer />
    </>

  )
}

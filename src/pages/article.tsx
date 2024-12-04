import React from 'react'
import { useParams } from 'react-router-dom';
import art from '../types/items';

export default function Article() {
  const { id } = useParams<{ id: string }>();
  // const { encryptedId } = useParams<{ encryptedId: string }>();
  // const {skool} = useFetchSkools()
  let article;

  if (id) {
    // const id = decryptId(encryptedId);
    article = art.find(a => a.id === parseInt(id));
  }

  if (!article) {
    return <div className='not-school-found'>Chargement en cours, veuillez patienter !</div>
  }
  return (
    <div className='article'>
      <p>{article.summary}</p>
    </div>
  )
}

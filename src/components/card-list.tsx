import React from 'react'
import Card from './card'
import { Article } from '../types/article'

type cardListProps = {
  article : Article[];
}

const CardList = ({article}:cardListProps) => {

  return (
    <div className='list-card'>
      {
        article.map((art)=>{return <Card articles={art}/>})
      }
    </div>
  )
}

export default CardList

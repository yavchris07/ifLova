import React from 'react'
import Card from './card'
import { Article } from '../types/article'

type cardListProps = {
  articles : Article[];
}

const CardList = ({articles}:cardListProps) => {

  return (
    <div className='list-card'>
      {
        articles.map((art,idx)=>{return <Card article={art} key={idx}/>})
      }
    </div>
  )
}

export default CardList

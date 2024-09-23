import React from 'react'
import un from '../assets/un.jpg';
import f from '../assets/f.webp';
import { Article } from '../types/article';

type cardProps = {
    articles : Article
}

const Card = ({articles}:cardProps) => {
  return (
    <div className="article">
        <div className="cover">
            <span>{articles.typ}</span>
            <img src={articles.cover} />
        </div>
        <div className="descript">
            <h3>{articles.title}</h3>
            <div className="auteur">
                <div className="avatar">
                <img src={articles.author_cover} />
                </div>
                <div className="nom">{articles.author}</div>
                <div className="date_of_post">{articles.date}</div>
            </div>
            <div className="legende">
                {articles.summary}
            </div>
        </div>
    </div>
  )
}

export default Card

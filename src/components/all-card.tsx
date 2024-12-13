import React from 'react'
import { Article } from '../types/article';
import Card from './card';

type cardListProps = {
    articles: Article[];
}

const AllCard = ({articles}:cardListProps) => {
    return (
        <div className='list-card'>
            {
                articles.map((art, idx) => { return <Card article={art} key={idx} /> })
            }
        </div>
    )
}

export default AllCard
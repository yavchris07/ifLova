import React from 'react'
import '../styles/app.scss';

type litleProps = {
    title : string,
    summary :string
}


export default function LitleBanner({title,summary}:litleProps) {
  return (
    <div className='lilte-banner'>
      <div className='cover'>
        <h4>{title}</h4>
        <p>{summary}</p>
      </div>
    </div>
  )
}

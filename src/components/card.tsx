/* eslint-disable jsx-a11y/alt-text */
import { Article } from '../types/article';
import author from '../assets/main-cover.jpg';

type cardProps = {
    article : Article
}

const Card = ({article}:cardProps) => {
  return (
    <div className="article" onClick={()=>{}}>
        <div className="cover">
            <span>{article.type}</span>
            <img src={article.cover} />
        </div>
        <div className="descript">
            <h3>{article.titre.substring(0,50)}...</h3>
            <div className="auteur">
                <div className="avatar">
                <img src={author} />
                </div>
                <div className="nom">{article.author},</div>
                <div className="date_of_post">Le {article.dats}</div>
            </div>
            <div className="legende">{article.resumes.substring(0,100)}...</div>
        </div>
    </div>
  )
}

export default Card

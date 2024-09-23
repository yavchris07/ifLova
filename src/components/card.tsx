import { Article } from '../types/article';
import author from '../assets/main-cover.jpg';

type cardProps = {
    article : Article
}

const Card = ({article}:cardProps) => {
  return (
    <div className="article">
        <div className="cover">
            <span>{article.typ}</span>
            <img src={article.cover} />
        </div>
        <div className="descript">
            <h3>{article.title.substring(0,55)}</h3>
            <div className="auteur">
                <div className="avatar">
                <img src={author} />
                </div>
                <div className="nom">{article.author},</div>
                <div className="date_of_post">Le {article.date}</div>
            </div>
            <div className="legende">{article.summary.substring(0,110)} </div>
        </div>
    </div>
  )
}

export default Card

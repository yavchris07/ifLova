/* eslint-disable jsx-a11y/alt-text */
import { Article } from '../types/article';
import author from '../assets/main-cover.jpg';
import { useNavigate } from 'react-router-dom';
// import art from '../types/items';
import { encryptId } from '../hooks/decrypt';
// import art from '../types/items';

type cardProps = {
    article: Article
}

const Card = ({ article }: cardProps) => {
    const nav = useNavigate()
    const encryptedId = encryptId(article.id)

    return (
        <div className="article" onClick={() => { nav(`article/${encryptedId}`) }}>
            <div className="cover">
                <span>{article.type}</span>
                {article.image && <img src={article.image} alt={article.image} />}
            </div>
            <div className="descript">
                <h3>{article.titre.substring(0, 50)}...</h3>
                <div className="auteur">
                    <div className="avatar">
                        <img src={author} />
                    </div>
                    <div className="nom">{article.auteur},</div>
                    <div className="date_of_post">Le {article.date_article}</div>
                </div>
                <div className="legende">{article.resumer.substring(0, 100)}...</div>
            </div>
        </div>
    )
}

export default Card

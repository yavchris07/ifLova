import Banner from '../components/banner';
import '../styles/home.scss';
import CardList from '../components/card-list';
// import art from '../types/items';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import useFetchData from '../hooks/use-fetch-articles';
import { useNavigate } from 'react-router-dom';

function Home() {

  const { art, isLoading, error } = useFetchData()
  const navigator = useNavigate()

  return (
    <>
      <NavBar />
      <Banner />
      <div className='home'>
        <p>
          Nous vous tenons informés des événements importants, des développements sécuritaires et des mises à jour essentielles pour vous aider à rester au fait de l'actualité régionale et internationale.
          Mais ce n'est pas tout - chez IFlova TV1, nous savons que le divertissement est tout aussi crucial. <span style={{ color: '#970404' }}>C'est pourquoi nous vous proposons une gamme diversifiée de contenus divertissants,
            des interviews exclusives aux critiques de films, en passant par les dernières tendances musicale</span>.
        </p>

        {art && <CardList articles={art} />}
        {isLoading && <div className='more'>Chargement en cours !</div>}
        {art.length === 0 && <div className='more'>Aucun article n'est présent !</div>}
        {error && <div className='more'>Erreur de la connexion vers serveur de IF Lova, Veillez patienter !</div>}
        {art.length >= 8 &&  <div className='more'><p onClick={() => { navigator('/articles') }}>Voir plus</p></div>}
        
      </div>
      <Footer />
    </>
  )
}

export default Home
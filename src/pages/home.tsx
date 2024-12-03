import Banner from '../components/banner';
import '../styles/home.scss';
import CardList from '../components/card-list';
import art from '../types/items';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import useFetchData from '../hooks/use-fetch-articles';

function Home() {

const {arti} = useFetchData()

  return (
    <>
    <NavBar />
      <Banner />
      <div className='home'>
        <p>
          Nous vous tenons informés des événements importants, des développements sécuritaires et des mises à jour essentielles pour vous aider à rester au fait de l'actualité régionale et internationale.
          Mais ce n'est pas tout - chez IFlova TV1, nous savons que le divertissement est tout aussi crucial. <span style={{color:'#970404'}}>C'est pourquoi nous vous proposons une gamme diversifiée de contenus divertissants, 
          des interviews exclusives aux critiques de films, en passant par les dernières tendances musicale</span>.
        </p>
        
          <CardList articles={arti} />
      </div>
    <Footer />
    </>
  )
}

export default Home
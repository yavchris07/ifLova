import LitleBanner from '../components/litle-banner'
import '../styles/about.scss'

export default function About() {
  return (
    <>

      <LitleBanner 
       title='Qui sommes nous !'
        summary="Une chaime d'informations"
      />
       
      <div className='about-text'>
        <span>IFlova TV1</span>
        <p  className='p' style={{color:'gray'}}>
          Bienvenue sur IFlova TV1 : Votre Destination Ultime pour l'Actualité, le Divertissement et la Sécurité
          Plongez dans un monde d'informations fiables et sécuritaires avec IFlova TV1, votre source principale pour les dernières nouvelles de la République Démocratique du Congo et d'autres pays. Nous vous tenons informés des événements importants, des développements sécuritaires et des mises à jour essentielles pour vous aider à rester au fait de l'actualité régionale et internationale.
          Mais ce n'est pas tout - chez IFlova TV1, nous savons que le divertissement est tout aussi crucial. C'est pourquoi nous vous proposons une gamme diversifiée de contenus divertissants, des interviews exclusives aux critiques de films, en passant par les dernières tendances musicale.
        </p>
        <p className='p' style={{color:'gray'}}>
          Quelle que soit votre passion, nous avons de quoi vous divertir.
          Et pour ceux qui recherchent un peu d'action, notre section sportive vous propose les derniers résultats, analyses et commentaires sur les matchs les plus passionnants. Que vous soyez fan de football, de basketball, de tennis ou de toute autre discipline sportive, IFlova TV1 vous garde sur la touche et sur le terrain.
          Enfin, pour ceux qui cherchent à promouvoir leurs produits ou services, notre plateforme offre également des opportunités publicitaires ciblées. Contactez-nous pour discuter de la meilleure façon de promouvoir votre marque auprès de notre public engagé et diversifié.
          Bienvenue sur IFlova TV1 - votre destination ultime pour l'information, le divertissement et la sécurité. Rejoignez-nous dès aujourd'hui et découvrez tout ce que nous avons à vous offrir.
        </p>
        <p className='p' style={{color:'gray'}}>
          NB: Sur notre chaîne YouTube et notre page Facebook professionnelle, vous trouverez une variété de contenus engageants, allant des reportages en direct aux interviews exclusives, en passant par les critiques de films et les analyses sportives. Abonnez-vous à notre chaîne YouTube pour accéder à du contenu vidéo exclusif et interactif, et suivez notre page Facebook pour des mises à jour en temps réel sur les événements les plus importants.
          En plus de notre présence sur les réseaux sociaux, notre site web vous propose un accès facile à toutes nos plateformes, ainsi qu'à des articles approfondis, des analyses pointues et des ressources utiles sur une gamme de sujets, allant de la sécurité à la culture en passant par le divertissement.
          Que vous soyez un passionné d'actualité, un amateur de divertissement ou un entrepreneur cherchant à promouvoir sa marque, IFlova TV1 vous offre une plateforme dynamique et engagée pour vous informer, vous divertir et vous connecter avec un public diversifié et influent.
        </p>
        <p>
          Rejoignez-nous dès aujourd'hui sur YouTube, Facebook et notre site web, et découvrez tout ce que IFlova TV1 a à vous offrir.
        </p>
      </div>
      
    </>
  )
}

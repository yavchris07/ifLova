import Footer from './components/footer';
import NavBar from './components/nav-bar';
import Routing from './routing';
import './styles/app.scss';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;

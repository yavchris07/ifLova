import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import NavBar from './components/nav-bar'
import Footer from './components/footer'


//name, path, element

export default function Routing() {

  const list = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/articles',
      element: <Contact />
    },
    {
      path: '/article',
      element: <Contact />
    }
  ]

  return (
    <Router>
      <NavBar />
      <Routes>
        {list.map((p) => { 
          return <Route path={p.path} element={p.element} key={p.path}/> }
        )}
      </Routes>
      <Footer/>
    </Router>
  )
}

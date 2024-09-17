import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'




//Type or a list of our pages
type Pages = {
  // {
  //   path:'/',
  //   name:'home',
  //   elemenr:'<Home />'
  // }
}

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
    }
  ]

  return (
    <Router>
      <Routes>
        {list.map((p) => { 
          return <Route path={p.path} element={p.element} /> }
        )}
      </Routes>
    </Router>
  )
}

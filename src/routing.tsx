import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { list } from './types/routers'


export default function Routing() {

  return (
    <Router>
      <Routes>
        {list.map((p) => { 
          return <Route path={p.path} element={p.element} key={p.path}/> }
        )}
      </Routes>
    </Router>
  )
}

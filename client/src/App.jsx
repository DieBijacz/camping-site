import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Write from '../src/pages/Write'
import Footer from './components/Footer'
import Navigate from './components/Navigate'
import Location from './pages/Location'
import './styles.css'

function App() {
  return <>
    <Router>
      <Navigate />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/write' element={<Write />} />
        <Route path='/location' element={<Location />} />
      </Routes>
      <Footer />
    </Router>
  </>
}

export default App;

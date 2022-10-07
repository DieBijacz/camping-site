import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Write from '../src/pages/Write'
import Footer from './components/Footer'
import Navigate from './components/Navigate'
import Booking from './pages/Booking'
import Location from './pages/Location'
import Post from './pages/Post'
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
        <Route path='/booking' element={<Booking />} />
        <Route path='/posts/:id' element={<Post />} />
      </Routes>
      <Footer />
    </Router>
  </>
}

export default App;

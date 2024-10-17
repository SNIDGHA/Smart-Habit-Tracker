import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import LandingPage from './Pages/LandingPage/LandingPage';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

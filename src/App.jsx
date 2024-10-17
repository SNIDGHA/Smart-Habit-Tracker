import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import LandingPage from './Pages/LandingPage/LandingPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

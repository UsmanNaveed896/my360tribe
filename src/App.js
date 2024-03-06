import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Homepage from './pages/homepagesections/container'
import MainContainer from '../src/Popups/MainContainer'
import ForgotPassword from '../src/Popups/ForgotPassword'
import SignUp from '../src/Popups/SignUp2'
import OTP from '../src/Popups/OTP'


import Terms from './pages/terms&condtion/terms';
import { Route, Routes } from 'react-router-dom';
import Dummy from './pages/dummypage/dummy';

function App() {
  const handleClick = (a) => {
    setTimeout(() => {
      const targetDiv = document.getElementById(`targetDiv${a}`);
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return (
    <>
      <Header handleClick={handleClick} />
      {/* <OTP /> */}
      <Routes>
        <Route exact path='/' element={< Homepage />} />
        <Route exact path='/dummy' element={< Dummy  handleClick={handleClick} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

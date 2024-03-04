import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Homepage from './pages/homepagesections/container'
import MainContainer from '../src/Popups/MainContainer'
import ForgotPassword from '../src/Popups/ForgotPassword'
import SignUp from '../src/Popups/SignUp2'
import OTP from '../src/Popups/OTP'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Terms from './pages/terms&condtion/terms';

function App() {
  return (
    <>
      <Header />
      <Homepage />

      <Footer /> 

    </>
  )
}

export default App;

import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Homepage from './pages/homepagesections/container'
import MainContainer from '../src/Popups/MainContainer'
import ForgotPassword from '../src/Popups/ForgotPassword'
import SignUp from '../src/Popups/SignUp2'
import OTP from '../src/Popups/OTP'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      {/* <Header />
      <Homepage />
      <Footer /> */}
      <OTP/>
      {/* <Router>
      <Routes>
        <Route exact path="/" component={MainContainer} />
        <Route path="/signup" component={SignUp} />
      </Routes>
    </Router> */}
    </>
  )
}

export default App;

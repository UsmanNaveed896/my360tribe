import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Homepage from './pages/homepagesections/container'
import MainContainer from '../src/Popups/MainContainer'
import Terms from './pages/terms&condtion/terms';

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
      {/* <MainContainer/>
      <Terms/> */}
    </>
  )
}

export default App;

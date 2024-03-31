import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Homepage from "./pages/homepagesections/container";
import { Route, Routes } from "react-router-dom";
import PeerAdvocacy from "./pages/whatwedotabs/peer-advocacy";
import ScrollToTopOnRouteChange from "./components/scroll";
import Transition from "./pages/whatwedotabs/transition";
import Health from "./pages/whatwedotabs/health";
import Employment from "./pages/whatwedotabs/employment";

function App() {
  const handleClick = (a) => {
    setTimeout(() => {
      const targetDiv = document.getElementById(`targetDiv${a}`);
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <>
      <Header handleClick={handleClick} />
      {/* <OTP /> */}
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/peeradvocacy"
          element={<PeerAdvocacy handleClick={handleClick} />}
        />
        <Route exact path="/transition" element={<Transition />} />
        <Route exact path="/Health" element={<Health />} />
        <Route exact path="/employment" element={<Employment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

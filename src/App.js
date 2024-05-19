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
import { useState } from "react";
import InTakeForm from "./Popups/operators/inTakeForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState({
    mod1: false,
    mod2: false,
    mod3: false,
    mod4: false,
    mod5: false,
  });

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
      <Header
        handleClick={handleClick}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      {/* <OTP /> */}
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Homepage
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
            />
          }
        />
        <Route
          exact
          path="/peeradvocacy"
          element={<PeerAdvocacy handleClick={handleClick} />}
        />
        <Route
          exact
          path="/transition"
          element={<Transition handleClick={handleClick} />}
        />
        <Route
          exact
          path="/Health"
          element={<Health handleClick={handleClick} />}
        />
        <Route
          exact
          path="/employment"
          element={<Employment handleClick={handleClick} />}
        />
         <Route
          exact
          path="/intakeform"
          element={<InTakeForm />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

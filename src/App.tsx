import "./App.css";
import PortfolioStore, { PortfolioContext } from "./Context/PortfolioContext";

import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import HeroScreen from "./Components/Hero/HeroScreen";
import DevIcons from "./Components/Icons/DevIcons";
import Projects from "./Components/Projects/MainProject/Projects";
// import Navbar from "./Components/NavBar/Navbar";
import Navbar2 from "./Components/NavBar/Navbar2";
import { useContext } from "react";

// const ContactForm = lazy(() => import("./Components/ContactForm/ContactForm"));

function App() {
  // const { modalRef } = useContext(PortfolioContext);

  return (
    <>
      {/* <div className="player-modal" ref={modalRef}></div> */}

      <Navbar2/>
      <PortfolioStore>
        {/* <Test /> */}
        <HeroScreen />
        <Projects />
        <DevIcons />
        <ContactForm />
        <Footer />
      </PortfolioStore>
    </>
  );
}

export default App;

//  need a main

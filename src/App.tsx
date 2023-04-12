import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import DevIcons from "./Components/Icons/DevIcons";
import Projects from "./Components/Projects/MainProject/Projects";
// import "../src/Components/Hero/HeroTest.css";
import HeroScreenTest from "./Components/Hero/HeroScreenTest";
// import Test from "./Components/Test/Test";
import React from "react";
// import Test from "./Components/Test/Test";
import PortfolioStore from "./Context/PortfolioContext";
// import HeroScreenTest2 from "./Components/Hero/HeroScreenTest2";
// import HeroScreen from "./Components/Hero/HeroScreen";

function App() {
  return (
    <>
      <PortfolioStore>
        {/* <Test /> */}
        {/* <HeroScreen/> */}
        <HeroScreenTest />
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

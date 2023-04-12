import "./App.css";
import Footer from "./Components/Footer/Footer";
import DevIcons from "./Components/Icons/DevIcons";
// import "../src/Components/Hero/HeroTest.css";
import HeroScreenTest from "./Components/Hero/HeroScreenTest";
// import Test from "./Components/Test/Test";
import React, { Suspense, lazy } from "react";
// import Test from "./Components/Test/Test";
import PortfolioStore from "./Context/PortfolioContext";
import HeroScreenTest2 from "./Components/Hero/HeroScreenTest2";
// import HeroScreen from "./Components/Hero/HeroScreen";

import Projects from "./Components/Projects/MainProject/Projects";
import ContactForm from "./Components/ContactForm/ContactForm";

// const ContactForm = lazy(() => import("./Components/ContactForm/ContactForm"));

function App() {
  return (
    <>
      <PortfolioStore>
        {/* <Test /> */}
        {/* <HeroScreen/> */}
        <HeroScreenTest2 />
        <Projects />
        <DevIcons />
        {/* <Suspense> */}
          <ContactForm />
        {/* </Suspense> */}
        <Footer />
      </PortfolioStore>
    </>
  );
}

export default App;

//  need a main

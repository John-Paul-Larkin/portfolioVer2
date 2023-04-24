import PortfolioStore from "./Context/PortfolioContext";

import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import HeroScreen from "./Components/Hero/HeroScreen";
import DevIcons from "./Components/Icons/DevIcons";
import Projects from "./Components/Projects/MainProject/Projects";
// import Navbar from "./Components/NavBar/Navbar";
import Navbar from "./Components/NavBar/Navbar";
// import Test from "./Components/Test/Test";
// import Test2 from "./Components/Test/test2";

// const ContactForm = lazy(() => import("./Components/ContactForm/ContactForm"));

function App() {
  return (
    <>
      <Navbar />
      <PortfolioStore>
        {/* <Test2 /> */}
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

import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import HeroScreen from "./Components/Hero/HeroScreen";
import DevIcons from "./Components/Icons/DevIcons";
import Gridtest from "./Components/Projects/Gridtest";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <HeroScreen />
      <Projects />
      <DevIcons />
      <ContactForm />
      <Footer />
      <Gridtest />
    </>
  );
}

export default App;

//  need a main

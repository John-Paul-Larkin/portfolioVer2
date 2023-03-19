import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import HeroScreen from "./Components/Hero/HeroScreen";
import DevIcons from "./Components/Icons/DevIcons";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <HeroScreen />
      <Projects />
      <DevIcons />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;

//  need a main

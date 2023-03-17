import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import HeroScreen from "./Components/Hero/HeroScreen";
import DevIcons from "./Components/Icons/DevIcons";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div>
      <HeroScreen />
      <Projects />
      <DevIcons />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

//  need a main

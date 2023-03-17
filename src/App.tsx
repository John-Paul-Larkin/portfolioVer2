import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import HeroScreen from "./Components/Hero/HeroScreen";
import Icons from "./Components/Icons/DevIcons";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div>
      <HeroScreen />

      <Projects />
      <Icons />

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

//  need a main

import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import HeroScreen from "./Components/Hero/HeroScreen";
import Projects from "./Components/Projects/Projects";
import Icons from "./Components/SectionHeading/Icons";

function App() {
  return (
    <div>
      <HeroScreen />
      <main>
        <Projects />
      </main>
      <ContactForm />
      <Icons />
      <Footer />
    </div>
  );
}

export default App;

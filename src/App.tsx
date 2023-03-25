import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import HeroScreenTest from "./Components/Hero/HeroScreenTest";
import DevIcons from "./Components/Icons/DevIcons";
import Projects from "./Components/Projects/Projects";
import Test from "./Components/Test/Test";

function App() {
  return (
    <>
      {/* <Test /> */}
      <HeroScreenTest />
      <Projects />
      <DevIcons />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;

//  need a main

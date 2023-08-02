import { motion } from "framer-motion";
import { RiSailboatFill } from "react-icons/ri";
import Clouds from "./Clouds";
import DevIcons from "./DevIcons";
import "./HeroScreen.css";

export default function HeroScreen() {
  return (
    <section className="hero-wrapper">
      <Clouds />
      <div className="hero">
        <div className="name">
          <h1>
            John Paul <br />
            Larkin
          </h1>
          <p>Sailing the full stack.</p>
        </div>
        <div className="blurb-wrapper">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 1, ease: "easeOut" } }}>
            Transforming business processes into working software solutions.
          </motion.div>
        </div>
      </div>

      <div className="sailboat-wrapper">
        <DevIcons />
        <div className="sailboat">
          <RiSailboatFill />
        </div>
      </div>
      <div className="decorative"></div>
    </section>
  );
}

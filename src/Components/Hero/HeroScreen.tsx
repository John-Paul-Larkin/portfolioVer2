import { motion } from "framer-motion";
import { RiSailboatFill } from "react-icons/ri";
import cloud from "../../Assets/Images/cloud.png";
import DevIcons from "./DevIcons";
import "./HeroScreen.css";

export default function HeroScreen() {
  const initial = { x: 0,scale: 0.5 };
  const animate = { x: 1000, transition: { repeat: Infinity, duration: 50 } };

  return (
    <section className="hero-wrapper">
      <div className="name">
        <motion.img width='254' height='141' initial={initial} animate={animate} className="cloud" src={cloud} alt="a fluffy white cloud" />
        <motion.img width='254' height='141' initial={initial} animate={animate} className="cloud2" src={cloud} alt="a fluffy white cloud" />
        <motion.img width='254' height='141' initial={initial} animate={animate} className="cloud3" src={cloud} alt="a fluffy white cloud" />
        <motion.img width='254' height='141' initial={initial} animate={animate} className="cloud4" src={cloud} alt="a fluffy white cloud" />

        <div>
          <h1>John Paul Larkin</h1>

          <p>Sailing on the full stack.</p>
        </div>
        <div className="blurb-wrapper">
          <div>Transforming business processes into working software solutions.</div>
        </div>
      </div>

      <div className="sailboat-wrapper">
        <DevIcons />
        <div className="sailboat">
          <RiSailboatFill />
        </div>
      </div>
    </section>
  );
}

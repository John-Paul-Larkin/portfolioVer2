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
          <div>
            Transforming business processes into working software solutions.
          </div>
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

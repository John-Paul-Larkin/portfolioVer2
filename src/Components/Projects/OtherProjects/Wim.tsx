import { motion } from "framer-motion";
import { animate, initialLeft } from "../../../Assets/AnimateValues";

import wim from "../../../Assets/Images/wim.jpg";
import './Wim.css'

export default function Wim() {
  return (
    <motion.aside initial={initialLeft} whileInView={animate} className="other-projects-container jpmazon">
      <div className="other-projects-description">
        <h3 className="project-heading">WIM</h3>
        <p>
          WIM is an inventory tool, which allows for the tracking of sales, purchases and up to date stock levels for products. The front end is built
          using react, typescript and react-table and is hosted on netlify. The back end uses Node/Express.js and a mySQL relational database.
        </p>
      </div>
      <div className="outer">
        <div className="project-img-wrapper img-btn-container">
          <img width="500" height="406" src={wim} alt="landing page for the wim project" />

          <div className="overlay"></div>
          <div className="overlay-text">
            <h4>WIM</h4>
            <p>A tool for logging and tracking stock levels</p>
          </div>

          <form name="gitWim" target="_blank">
            <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/wim">
              GitHub
            </button>
          </form>
          <form name="liveWim" target="_blank">
            <button className="highlight-btn live-btn" type="submit" formAction="https://wim-front-end.netlify.app/">
              Live
            </button>
          </form>
        </div>
      </div>
    </motion.aside>
  );
}

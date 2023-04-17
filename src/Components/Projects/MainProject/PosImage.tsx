import { motion } from "framer-motion";
import { animate, initialRight } from "../../../Assets/AnimateValues";
import posMove from "../../../Assets/Images/PosMove.webp";

import "./PosImage.css";

export default function PosImage() {
  return (
    <motion.div initial={initialRight} whileInView={animate} className="pos-container">
      <div className="img-btn-container">
        <img width="412" height="912" src={posMove} className="pos-image" alt="animated image of the point of sale app in action" />

        <div className="overlay"></div>
        <div className="overlay-text">
          <h4>POS App</h4>
          <p></p>
        </div>

        <form target="_blank">
          <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/kitchenpos">
            GitHub
          </button>
        </form>
        <form target="_blank">
          <button className="highlight-btn live-btn" type="submit" formAction="https://kitchenpos.netlify.app/">
            Live
          </button>
        </form>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import posMove from "../../Assets/Images/PosMove.webp";
import { animate, initial, initialRight } from "../../Assets/AnimateValues";

import "./PosImage.css";


export default function PosImage() {
  return (
    <motion.div initial={initialRight} whileInView={animate} className="pos-container img-btn-container">
          <img src={posMove} className="pos-image" alt="animated image of the point of sale app in action" />
          <div className="notch n1"></div>
          <div className="notch n2"></div>
          <div className="notch n3"></div>
          <div className="notch n4"></div>

          <div className="overlay"></div>
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
    </motion.div>
  );
}

import { motion } from "framer-motion";
import posMove from "../../Assets/Images/PosMove.webp";
import "./PosImage.css";

const initialRight = {
  opacity: 0.1,
  x: 100,
};

const animate = {
  opacity: 1,
  y: 0,
  x: 0,
  transition: {
    ease: "easeOut",
    duration: 0.5,
    // type:'spring'
    // bounce:1
  },
};

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

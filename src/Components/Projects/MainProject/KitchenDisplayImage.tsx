import { motion } from "framer-motion";
import { animate, initialLeft } from "../../../Assets/AnimateValues";
// import kitchenDisplay from "../../../Assets/Images/KitchenDisplay.jpg";
import kitchenDisplay from "../../../Assets/Images/KitchenDisplayCompressed.webp";

import "./KitchenDisplayImage.css";

export default function KitchenDisplayImage() {
  return (
    <motion.div initial={initialLeft} whileInView={animate} className="kitchen-display-container img-btn-container">
      <div>
        {/* <img width='1915' height='968' src={kitchenDisplay} alt="" /> */}
        <img width="500" height="253" src={kitchenDisplay} alt="kitchen display screenshot, with five orders open" />
        <div className="overlay">
          <div className="overlay-text">
            <h4>Kitchen display</h4>
            <p>Note - requires you run the pos app first</p>
          </div>
        </div>
        <form target="_blank">
          <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/kitchen_back_end">
            GitHub
          </button>
        </form>
        <form target="_blank">
          <button className="highlight-btn live-btn" type="submit" formAction="https://kitchendisplay.netlify.app/">
            Live
          </button>
        </form>
      </div>
    </motion.div>
  );
}

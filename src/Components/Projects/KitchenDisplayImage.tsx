import { motion } from "framer-motion";
import { animate, initialLeft } from "../../Assets/AnimateValues";
import kitchenDisplay from "../../Assets/Images/KitchenDisplay.jpg";
import "./KitchenDisplayImage.css";

export default function KitchenDisplayImage() {
  return (
    <motion.div initial={initialLeft} whileInView={animate} className="kitchen-display-container img-btn-container">
      <img src={kitchenDisplay} alt="" />
      <div className="overlay">
        <div className="overlay-text">
          <h3>Kitchen display</h3>
          <p>Note required pos app</p>
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
    </motion.div>
  );
}

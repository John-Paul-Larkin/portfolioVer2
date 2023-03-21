import { motion } from "framer-motion";
import kitchenDisplay from "../../Assets/Images/KitchenDisplay.jpg";
import PhoneBorder from "../../Assets/Images/PhoneBorder.png";
import posMove from "../../Assets/Images/PosMove.webp";
import "./Projects.css";
import YouTube from "./YouTube";

export default function Projects() {
  const initial = {
    opacity: 0.1,
    y: 30,
  };

  const initialLeft = {
    opacity: 0.1,
    x: -100,
  };

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

  return (
    <section className="projects">
      <div className="container">
        <div className="project1">
          <motion.div initial={initialRight} whileInView={animate} className="description">
            <motion.h3 initial={initial} whileInView={animate}>
              Kitchen management
            </motion.h3>
            <motion.p initial={initialLeft} whileInView={animate}>
              "Restaurant POS" is a point of sale application for restaurants, designed to simplify the process of order taking, while streamlining
              communication between the server in the front of house, and the chefs in the kitchen.
            </motion.p>
            <motion.p initial={initialLeft} whileInView={animate}>
              I built this app to work in conjunction with a kitchen display application, which is an app for orchestrating the various sections of a
              commercial kitchen, such that orders are displayed, timed and prepared in a logical, sequential manner. The app provides a timeline,
              which arranges the orders depending on the station(grill, fry), so that each chef can, at a glance, determine which item they should be
              preparing, if there are any modifications to the ingredients and the remaining time before the order should be sent.
            </motion.p>
          </motion.div>
          <motion.div initial={initialLeft} whileInView={animate} className="pos-wrapper img-btn-container">
            <img src={PhoneBorder} className="phone-outline" alt="phone border outline" />
            <img className="pos-image" src={posMove} alt="animated image of the point of sale app in action" />

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
        </div>
        <div className="kitchen-display-wrapper">
          <motion.div initial={initialLeft} whileInView={animate} className="kitchen-display img-btn-container">
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
        </div>

        <YouTube />
      </div>
    </section>
  );
}

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
    x: 30,
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
          <div className="description">
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
              which arranges the orders depending on the station(grill, fry), so| that each chef can, at a glance, determine which item they should be
              preparing, if there are any modifications to the ingredients and the remaining time before the order should be sent.
            </motion.p>
          </div>
          <motion.div initial={initialLeft} whileInView={animate} className="pos-wrapper">
            <img src={PhoneBorder} className="phone-outline" alt="phone border outline" />
            <img className="pos-image" src={posMove} alt="animated image of the point of sale app in action" />
          </motion.div>
        </div>
        <div className="kitchen-display-wrapper">
          <motion.div initial={initialLeft} whileInView={animate} className="kitchen-display">
            <img src={kitchenDisplay} alt="" />
          </motion.div>
        </div>

        <YouTube/>

     
      </div>
    </section>
  );
}

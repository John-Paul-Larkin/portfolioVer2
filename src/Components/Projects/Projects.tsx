import { motion } from "framer-motion";
import YouTube from "react-youtube";
// import floorPlan from "../../Assets/Images/FloorPlan.jpg";
// import kitchenDisplay from "../../Assets/Images/KitchenDisplay.jpg";
// import posImage from "../../Assets/Images/KitchenPOS.jpg";
import posMove from "../../Assets/Images/PosMove.webp";
import "./Projects.css";

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
          <div className="project1-description">
            <motion.h3 initial={initial} whileInView={animate}>
              Kitchen management
            </motion.h3>
            <motion.p initial={initialLeft} whileInView={animate}>
              "Restaurant POS" is a point of sale application for restaurants, designed to simplify the process of order taking, while streamlining
              communication between the server in the front of house, and the chefs in the kitchen. I built this app to work in conjunction with a
              kitchen display application, which is an app for orchestrating the various sections of a commercial kitchen, such that orders are
              displayed, timed and prepared in a logical, sequential manner. The app provides a timeline, which arranges the orders depending on the
              station(grill, fry), so that each chef can, at a glance, determine which item they should be preparing, if there are any modifications
              to the ingredients and the remaining time before the order should be sent.
            </motion.p>
          </div>
          <motion.img
            initial={initialLeft}
            whileInView={animate}
            className="pos-move"
            src={posMove}
            alt="animated image of the point of sale app in action"
          />
        </div>
        <motion.div className="youtube-container" initial={initialLeft} whileInView={animate}>
          <YouTube
            className="youtube"
            videoId="j1p1O0-Bl50"
            opts={{
              // width: "200",
              playerVars: { autoplay: 0, controls: 1, cc_load_policy: 1, cc_lang_pref: "en", modestbranding: 1, rel: 0 },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

//
//
//

/* <img className="floor-plan" src={FloorPlan} alt="" /> */
/* <img className="pos-image" src={posImage} alt="" /> */
/* <img className="kitchen-display" src={kitchenDisplay} alt="" /> */

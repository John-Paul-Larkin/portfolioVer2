import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

import { motion } from "framer-motion";
import "./PosDescription.css";

import { animate, initial, initialLeft } from "../../Assets/AnimateValues";

export default function PosDescription() {
  return (
    <motion.div initial={initialLeft} whileInView={animate} className="description-container">
      <motion.div initial={initialLeft} whileInView={animate} className="description">
        <motion.h3 className="project-heading" initial={initial} whileInView={animate}>
          Kitchen management
        </motion.h3>
        <p>
          <span>"Restaurant POS" </span>
          is a point of sale application for restaurants, designed to simplify the process of order taking, while streamlining communication between
          the server in the front of house, and the chefs in the kitchen.
        </p>
        <p>
          I built this app to work in conjunction with a <span>"kitchen display"</span> application, which is an app for orchestrating the various sections of a
          commercial kitchen, such that orders are displayed and timed so they can be prepared in a sequential manner. The app provides a timeline, which
          arranges the orders depending on the station(grill, fry), so that each chef can, at a glance, determine which item they should be preparing,
          if there are any modifications to the ingredients and the remaining time before the order should be sent.
        </p>
        {/* <FontAwesomeIcon className="description-icons" title="GitHub" icon={faGithub} /> */}
        {/* <FontAwesomeIcon className="description-icons" icon={faPlayCircle} /> */}
      </motion.div>
    </motion.div>
  );
}

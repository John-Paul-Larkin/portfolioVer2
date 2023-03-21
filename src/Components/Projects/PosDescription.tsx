import { motion } from "framer-motion";
import "./PosDescription.css";

export default function PosDescription() {
  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  };

  const initialLeft = {
    opacity: 0.1,
    x: -100,
  };

  const initial = {
    opacity: 0.1,
    y: 30,
  };

  return (
    <motion.div initial={initialLeft} whileInView={animate} className="description-wrapper">
      <motion.div initial={initialLeft} whileInView={animate} className="description">
        <motion.h3 initial={initial} whileInView={animate}>
          Kitchen management
        </motion.h3>
        <p>
          "Restaurant POS" is a point of sale application for restaurants, designed to simplify the process of order taking, while streamlining
          communication between the server in the front of house, and the chefs in the kitchen.
        </p>
        <p>
          I built this app to work in conjunction with a kitchen display application, which is an app for orchestrating the various sections of a
          commercial kitchen, such that orders are displayed, timed and prepared in a logical, sequential manner. The app provides a timeline, which
          arranges the orders depending on the station(grill, fry), so that each chef can, at a glance, determine which item they should be preparing,
          if there are any modifications to the ingredients and the remaining time before the order should be sent.
        </p>
      </motion.div>
    </motion.div>
  );
}

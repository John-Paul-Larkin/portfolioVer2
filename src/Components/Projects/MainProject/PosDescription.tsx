// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";
import { animate, initial, initialLeft } from "../../../Assets/AnimateValues";
import annoyedCustomer from "./../../../Assets/Images/waiter.jpg";
import "./PosDescription.css";
// import TextScrollHighlight from "./TextScrollHighlight";

export default function PosDescription() {
  return (
    <motion.div initial={initialLeft} whileInView={animate} className="description-container">
      <motion.div initial={initialLeft} whileInView={animate} className="description">
        <div className="waiter-img-wrapper">
          <p className='sml-question'>
            What's taking so long?
          </p>
          <img
            width="640"
            height="427"
            src={annoyedCustomer}
            className="waiter-img"
            alt="waiter standing over annoyed customer, both gesturing towards food"
          />
        </div>

        <div className="img-text-container">
          <p className="lrg-question">
            What's taking so <span>long?</span>
          </p>
          <div className="inner-text">
            {/* <p> Have you ever endured a half-hour wait, only to be served a lukewarm, unappetizing meal?</p> */}
            <p>In a busy restaurant kitchen, speed and efficiency are the key to success.</p>
            <p>
              These apps facilitate communication.
              <br /> Happy customers, happy staff.
            </p>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1, duration: 1.5 } }}>
              LEARN MORE
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

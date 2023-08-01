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
          <img
            width="640"
            height="427"
            src={annoyedCustomer}
            className="waiter-img"
            alt="waiter standing over annoyed customer, both gesturing towards food"
          />
        </div>

        <div className="img-text-container">
          <p>
            What's taking so <span>long?</span>
          </p>
          <div className="inner-text">
            {/* <p> Have you ever endured a half-hour wait, only to be served a lukewarm, unappetizing meal?</p> */}
            <p>In a busy restaurant kitchen, efficiency reigns supreme.</p>
            <p>I built these apps as to facilitate efficiency and communication.</p>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1, duration: 1.5 } }}>
              LEARN MORE
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

{
  /* <p>
  I built these apps as solutions to the issues I observed in my previous career. A web based Point of sale app, allowing for tailoring and
  instant transmismiting of orders to the kitchen. and a kitchen display app, so that each chef can, at a glance, determine which item they
  should be preparing,
</p> */
}

// Have you ever endured a half-hour wait, only to be served a lukewarm, unappetizing meal?
// In a busy restaurant kitchen, efficiency and communication is paramount.

// With that in mind I built these apps, the first is a Point of sale, so a server can communicate an order to the kitchen. The second is a kitchen display app, so the chef can instantly see the order and they have an overview of every item and how it should be prepared.

// While working in the hospitality sector I often imagined the

{
  /* <p className="cta">
Long
<span>wait?</span>
</p> */
}

{
  /* <p className="c
ta-question">Have you ever endured a half-hour wait, only to be served a lukewarm, unappetizing meal?</p> */
}
{
  /* <p>We all have</p> */
}

{
  /* <p className="eff">
In a busy restaurant kitchen,
<span> efficiency </span>
and
<span> communication </span>
are paramount.
</p>

<p className='i-built'>These two apps are my attempt to fix that!
<a href="" className="link">Learn more</a>
</p> */
}

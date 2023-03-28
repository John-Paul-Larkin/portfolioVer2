import { motion } from "framer-motion";
import ReactPlayer from "react-player/youtube";
import { animate, initialLeft } from "../../Assets/AnimateValues";
import "./YouTube.css";

export default function YouTube() {
  return (
 
      <motion.div initial={initialLeft} whileInView={animate} className="player-container">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=D0f20o1ADF0"
            light={true}
            volume={1}
            controls={true}
            muted={true}
            playing={true}
          />
        </div>
      </motion.div>
  );
}

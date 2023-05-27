import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ReactPlayer from "react-player/youtube";
import { animate, initialLeft } from "../../../Assets/AnimateValues";
import "./YouTube.css";

export default function YouTube() {
  const playerRef = useRef<HTMLDivElement>(null);
  const modalBackdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Event listeners which increases the size of the youtube player in the grid.
    // Then adds a backdrop as if the player is a modal

    const player = playerRef.current;
    const modalBackDrop = modalBackdropRef.current;

    const addClassOnClick = () => {
      if (player && modalBackDrop) {
        player.classList.add("player-container-click");
        modalBackDrop.style.display = "block";
      }
    };

    const removeClassOnModalBackdropClick = () => {
      if (player && modalBackDrop) {
        player.classList.remove("player-container-click");
        modalBackDrop.style.display = "none";
      }
    };

    if (player) {
      player.addEventListener("click", addClassOnClick);
    }
    if (modalBackDrop) {
      modalBackDrop.addEventListener("click", removeClassOnModalBackdropClick);
    }

    return () => {
      player?.removeEventListener("click", addClassOnClick);
      modalBackDrop?.removeEventListener("click", removeClassOnModalBackdropClick);
    };
  }, []);

  return (
    <motion.div
      initial={initialLeft}
      whileInView={animate}
      className="player-container"
      ref={playerRef}
    >
      <div className="player-wrapper">
        {createPortal(<div className="player-modal" ref={modalBackdropRef}></div>, document.body)}

        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          url="https://youtu.be/vgQ1oEJDxEU"
          light={true}
          volume={1}
          controls={true}
          // muted={false}
          playing={true}
        />
      </div>
    </motion.div>
  );
}

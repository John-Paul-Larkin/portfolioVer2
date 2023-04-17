import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ReactPlayer from "react-player/youtube";
import { animate, initialLeft } from "../../../Assets/AnimateValues";
import { PortfolioContext } from "../../../Context/PortfolioContext";
import "./YouTube.css";

export default function YouTube() {
  const playerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // const { modalRef } = useContext(PortfolioContext);
  // const { modalRef } = useContext(PortfolioContext);

  // const [modal, setModal] = useState<HTMLDivElement | null>(null);

  // console.log(modal);

  // useEffect(() => {
  //   setModal(modalRef);
  // }, [modalRef]);

  useEffect(() => {
    const player = playerRef.current;

    const addClassOnClick = () => {
      console.log(modalRef.current);
      if (player) {
        player.classList.add("player-container-click");
        // modalRef.current.style.display = "block";
      }
    };

    // const removeClass = () => {
    //   if (player) {
    //     player.classList.remove("player-container-click");
    //   }
    // };

    if (player) {
      player.addEventListener("click", addClassOnClick);
    }

    return () => {
      player?.removeEventListener("click", addClassOnClick);
      // player?.removeEventListener("mouseleave", removeClass);
    };
  }, []);

  return (
    <motion.div initial={initialLeft} whileInView={animate} className="player-container" ref={playerRef}>
      <div className="player-wrapper">
        {createPortal(<div className="player-modal" ref={modalRef}></div>, document.body)}

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

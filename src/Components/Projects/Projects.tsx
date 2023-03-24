import { motion } from "framer-motion";
import KitchenDisplayImage from "./KitchenDisplayImage";
import PosDescription from "./PosDescription";
import PosImage from "./PosImage";
import "./Projects.css";
import YouTube from "./YouTube";
  export default function Projects() {
  // const initial = { y: "20vw" };
  // const animate = { y: 0, transition: { delay: 2, duration: 2, ease: "easeOut" } };

  return (
    <section className="projects">
      <div className="container">
        <div className="project1">
          <PosDescription />
          <PosImage />
          <KitchenDisplayImage />
          <YouTube />
        </div>
      </div>
    </section>
  );  
}

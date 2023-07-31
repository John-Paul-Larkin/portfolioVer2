import { wrapGrid } from "animate-css-grid";
import { useContext, useEffect } from "react";
import OtherProjects from "../OtherProjects/OtherProjects";
import KitchenDisplayImage from "./KitchenDisplayImage";
import PosDescription from "./PosDescription";
import PosImage from "./PosImage";
import TextScrollHighlight from "./TextScrollHighlight";
import YouTube from "./YouTube";
import './km-grid.css'

import { PortfolioContext } from "../../../Context/PortfolioContext";
import "./ImageOverlay.css";
import "./Projects.css";

export default function Projects() {
  //ref for animating hero
  const { project1Ref } = useContext(PortfolioContext);

  useEffect(() => {
    if (project1Ref.current) {
      // wrap grid is used to animate the youtube react-player component
      wrapGrid(project1Ref.current, {
        duration: 350,
        // onStart: () => console.log("started anim")
      });
    }
  }, [project1Ref]);

  return (
    <section className="projects" id="projects">
          {/* <h2>Projects</h2> */}
      <div className="container">
        <div className="project1" ref={project1Ref}>
          <PosDescription />
          <PosImage />
          <KitchenDisplayImage />
          <YouTube />
        </div>
        <hr />
        <OtherProjects />
      </div>
    </section>
  );
}

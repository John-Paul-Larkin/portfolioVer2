import { wrapGrid } from "animate-css-grid";
import { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "../../../Context/PortfolioContext";
import OtherProjects from "../OtherProjects/OtherProjects";
import KitchenDisplayImage from "./KitchenDisplayImage";
import PosDescription from "./PosDescription";
import PosImage from "./PosImage";
import TextScrollHighlight from "./TextScrollHighlight";
import YouTube from "./YouTube";

import "./Projects.css";

export default function Projects() {
  //ref for animating hero
  // const { containerRef } = useContext(PortfolioContext);

  const project1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project1Ref.current) {
      console.log("in wrap grid");
      wrapGrid(project1Ref.current, { duration: 350, onStart: () => console.log("started anim") });
    }

  }, []);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <TextScrollHighlight>
          <h2>Projects</h2>
        </TextScrollHighlight>
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

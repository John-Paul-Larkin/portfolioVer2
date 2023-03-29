import { useContext } from "react";
import { PortfolioContext } from "../../Context/PortfolioContext";
import KitchenDisplayImage from "./KitchenDisplayImage";
import PosDescription from "./PosDescription";
import PosImage from "./PosImage";
import "./Projects.css";
import TextScrollHighlight from "./TextScrollHighlight";
import YouTube from "./YouTube";

export default function Projects() {
  //ref for animating hero
  const portfolioContext = useContext(PortfolioContext);

  return (
    <section className="projects" ref={portfolioContext}>
      <div className="container">
        <TextScrollHighlight>
          <h2>Projects</h2>
        </TextScrollHighlight>
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

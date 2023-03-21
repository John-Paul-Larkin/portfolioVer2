import KitchenDisplayImage from "./KitchenDisplayImage";
import PosDescription from "./PosDescription";
import PosImage from "./PosImage";
import "./Projects.css";
import YouTube from "./YouTube";

export default function Projects() {
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

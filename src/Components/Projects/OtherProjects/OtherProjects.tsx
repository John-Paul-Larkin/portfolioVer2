import { useContext } from "react";
import { PortfolioContext } from "../../../Context/PortfolioContext";
import Jpmazon from "./Jpmazon";
import Jsquestions from "./Jsquestions";
import "./OtherProjects.css";
import Wim from "./Wim";

export default function OtherProjects() {
  const { otherProjectsRef } = useContext(PortfolioContext);

  return (
    <div className="other-projects-wrapper" ref={otherProjectsRef}>
      <Wim/>
      <hr />
      <Jpmazon />
      <hr />
      <Jsquestions />
    </div>
  );
}

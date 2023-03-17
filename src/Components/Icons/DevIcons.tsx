import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import "./DevIcons.css";

export default function DevIcons() {
  const controls = useAnimation();
  const animateRef = useRef(null);
  const isInView = useInView(animateRef);

  const animation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.25, ease: "easeOut" } },
  };

  useEffect(() => {
    if (isInView) {
      controls.start(animation.animate);
    } else {
      controls.start(animation.initial);
    }
  }, [controls, isInView, animation.animate, animation.initial]);

  return (
    <div className="dev-icons" ref={animateRef}>
      <ul className="container">
        <li>
          <i className="devicon-firebase-plain colored"></i>
          <span>Firebase</span>
        </li>
        <li>
          <i className="devicon-react-original colored"></i>
          <span>React</span>
        </li>
        <li>
          <i className="devicon-typescript-plain colored"></i>
          <span>Typescript</span>
        </li>
        <li>
          <i className="devicon-redux-original colored"></i>
          <span>Redux</span>
        </li>
        <li>
          <i className="devicon-html5-plain colored"></i>
          <span>HTML</span>
        </li>
        <li>
          <i className="devicon-vscode-plain colored"></i>
          <span>VSCode</span>
        </li>
        <li>
          <i className="devicon-github-original colored"></i>
          <span>Github</span>
        </li>
        <li>
          <i className="devicon-git-plain colored"></i>
          <span>Git</span>
        </li>
        <li>
          <i className="devicon-javascript-plain colored"></i>
          <span>Javascript</span>
        </li>
      </ul>
    </div>
  );
}

{
  /* <i className="devicon-firebase-plain-wordmark colored"></i>*/
}
{
  /* <i className="devicon-react-original-wordmark"></i> */
}

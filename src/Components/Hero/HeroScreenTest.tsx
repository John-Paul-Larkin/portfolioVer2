import { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { PortfolioContext } from "../../Context/PortfolioContext";
import "./HeroTest.css";

export default function HeroScreen() {
  // animates the projects screen by reducing the size of the hero.
  const heroWrapperRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      // heroWrapperRef.current!.style.height = "70vh";
      // heroWrapperRef.current!.style.backgroundPosition = "bottom"; no effect due to background attachment fixed
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const portfolioContext = useContext(PortfolioContext);

  const [projectRef, setProjectRef] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (portfolioContext !== null) {
      setProjectRef(portfolioContext.current);
    }
  }, [portfolioContext]);

  const { ref, inView, entry } = useInView({
    root: heroWrapperRef.current,
    rootMargin: "0px",
    threshold: 1,

    onChange: () => {
      if (entry !== undefined && inView === true) {
        projectRef!.style.borderTop = "5px solid var(--clr-six)";
        frontEndRef.current!.className = "front-end";
      } else if (entry !== undefined && inView === false) {
        projectRef!.style.borderTop = "5px solid transparent";
        frontEndRef.current!.className = "front-end-before";
      }
    },
  });

  const frontEndRef = useRef<HTMLSpanElement>(null);

  return (
    <section className="hero-wrapper" ref={heroWrapperRef}>
      <h1 className="name">
        <span>John </span> <span>Paul</span> <span>Larkin</span>
        <div className="int-obs-test" ref={ref}></div>
      </h1>
      <span className="front-end-wrapper">
        <span className="front-end-before" ref={frontEndRef}>
          Front end developer
        </span>
      </span>
    </section>
  );
}

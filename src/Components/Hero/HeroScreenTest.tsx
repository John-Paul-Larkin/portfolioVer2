import { motion, useAnimationControls } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// import FullNameTest from "./FullNameTest";
// import kerryBench from "../../Assets/Images/BenchKerryCompressed.webp";
import { PortfolioContext } from "../../Context/PortfolioContext";
// import useOnScreen from "../../Hooks/useOnScreen";
import "./HeroTest.css";

export default function HeroScreen() {
  const heroWrapperRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      heroWrapperRef.current!.style.minHeight = "70vh";
      heroWrapperRef.current!.style.backgroundPosition = "bottom";
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const portfolioContext = useContext(PortfolioContext);

  // const elementRef = useRef<HTMLDivElement>(null);

  const [projectRef, setProjectRef] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (portfolioContext !== null) {
      setProjectRef(portfolioContext.current);
    }
  }, [portfolioContext]);

  // const isOnScreen = useOnScreen({ ref: elementRef, projectRef });

  const { ref, inView, entry } = useInView({
    root: heroWrapperRef.current,
    rootMargin: "0px",
    threshold: 1,

    onChange: () => {
      // console.log(entry);
      if (entry !== undefined) {
        projectRef!.style.borderTop = "5px solid var(--clr-six)";
        frontEndRef.current!.className = "front-end";
        // frontEndRef.current!.
        // controls.start({ y: 0, transition: { duration: 2 } });
      }
    },
  });

  // console.log(inView, "inview", projectRef);

  const frontEndRef = useRef<HTMLSpanElement>(null);

  const controls = useAnimationControls();

  // useEffect(() => {
  //   controls.start({ y: 0, transition: { duration: 2 } });
  // }, [controls]);

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

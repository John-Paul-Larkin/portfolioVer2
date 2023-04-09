import { useContext, useEffect, useRef, useState } from "react";
import { PortfolioContext } from "../../Context/PortfolioContext";
import "./test.css";

export default function Test() {
  const lineRef = useRef<SVGPathElement>(null);

  const [pathLength, setPathLength] = useState(0);

  const { setDrawLength } = useContext(PortfolioContext);

  useEffect(() => {
    if (lineRef.current !== null) {
      setPathLength(lineRef.current.getTotalLength());

      lineRef.current.style.strokeDasharray = pathLength + " " + pathLength;
      lineRef.current.style.strokeDashoffset = pathLength.toString();
    }

    const handleScroll = () => {
      // What % is it?
      const scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      setDrawLength(window.innerHeight * scrollPercentage);

      /// Draw in reverse
      if (lineRef.current !== null) {
        lineRef.current.style.strokeDashoffset = (pathLength - pathLength * scrollPercentage).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathLength, setDrawLength]);

  return (
    <div className="line-container">
      <svg viewBox="0 0 2 2102" fill="none" preserveAspectRatio="xMidYMax meet">
        <path ref={lineRef} d="M1 0V2102" stroke="yellow" strokeWidth={6} />
      </svg>
    </div>
  );
}

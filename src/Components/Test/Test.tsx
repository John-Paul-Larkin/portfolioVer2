import { useContext, useEffect, useRef, useState } from "react";
import { PortfolioContext } from "../../Context/PortfolioContext";
import "./test.css";

export default function Test() {
  const lineRef = useRef<SVGPathElement>(null);

  const [pathLength, setPathLength] = useState(0);

  const { drawLength, setDrawLength } = useContext(PortfolioContext);

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
      console.log("scroll test line");

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
      <svg className="svg-line" viewBox="0 0 2 2102" fill="none">
        <path d="M1 0V2102" stroke="blue" strokeWidth={2} />
        <path ref={lineRef} d="M1 0V2102" stroke="yellow" strokeWidth={2} />
        <circle
          cx="0"
          cy={(drawLength + 0) * 2}
          r="10"
          stroke="pink"
          fill="pink"
          strokeWidth={20}
          onClick={() => {
            document.getElementById(`projects`)?.scrollIntoView();
          }}
        />
      </svg>
    </div>
  );
}

// preserveAspectRatio="xMidYMax meet"

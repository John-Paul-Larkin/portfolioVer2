import { useContext, useEffect, useRef, useState } from "react";
import { PortfolioContext } from "../../Context/PortfolioContext";
import useCalcElementPositionOnScrollbar from "../../Context/useCalcElementPositionOnScrollbar";
import "./test.css";

export default function Test2() {
  const lineRef = useRef<SVGPathElement>(null);

  const [viewPortHeight, setViewPortHeight] = useState(window.innerHeight);
  const { drawLength, setDrawLength, project1Ref, otherProjectsRef } = useContext(PortfolioContext);


  const { top:project1Top, bottom:project1Bottom } = useCalcElementPositionOnScrollbar({ ref: project1Ref, viewPortHeight });
  const { top:otherProjectsTop, bottom:otherProjectsBottom } = useCalcElementPositionOnScrollbar({ ref: otherProjectsRef, viewPortHeight });


  useEffect(() => {
    setViewPortHeight(window.innerHeight);
    if (lineRef.current !== null) {
      // setPathLength(lineRef.current.getTotalLength());
      lineRef.current.style.strokeDasharray = viewPortHeight + " " + viewPortHeight;
      lineRef.current.style.strokeDashoffset = viewPortHeight.toString();
    }
  }, [viewPortHeight]);

  useEffect(() => {
    const handleScroll = () => {
      // What % is it?
      const scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      setDrawLength(viewPortHeight * scrollPercentage);

      /// Draw in reverse
      if (lineRef.current !== null) {
        lineRef.current.style.strokeDashoffset = (viewPortHeight - drawLength).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [drawLength, setDrawLength, viewPortHeight]);

  return (
    <div className="line-container">
      <svg className="svg-line" viewBox={`0 0 2 ${viewPortHeight}`} fill="none">
        <path d={`M1 0V${viewPortHeight}`} stroke="blue" strokeWidth={2} />
        <path ref={lineRef} d={`M1 0V${viewPortHeight}`} stroke="yellow" strokeWidth={2} />
        <circle
          cx="1"
          cy={drawLength}
          r="5"
          stroke="pink"
          fill="pink"
          strokeWidth={5}
          onClick={() => {
            document.getElementById(`projects`)?.scrollIntoView();
          }}
        />
            <circle
          cx="1"
          cy={project1Top}
          r="5"
          stroke="yellow"
          fill="yellow"
          strokeWidth={5}
          onClick={() => {
            document.getElementById(`projects`)?.scrollIntoView();
          }}
          />
              <circle
          cx="1"
          cy={project1Bottom}
          r="5"
          stroke="red"
          fill="red"
          strokeWidth={5}
          onClick={() => {
            document.getElementById(`projects`)?.scrollIntoView();
          }}
          />
          <circle
          cx="1"
          cy={otherProjectsTop}
          r="5"
          stroke="yellow"
          fill="yellow"
          strokeWidth={5}
          onClick={() => {
            document.getElementById(`projects`)?.scrollIntoView();
          }}
          />
              <circle
          cx="1"
          cy={otherProjectsBottom}
          r="5"
          stroke="red"
          fill="red"
          strokeWidth={5}
          onClick={() => {
            document.getElementById(`projects`)?.scrollIntoView();
          }}
          />
      </svg>
    </div>
  );
}

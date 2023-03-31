import { useEffect, useRef, useState } from "react";
import "./test.css";

export default function Test() {
  const lineRef = useRef<SVGPathElement>(null);

  // const [scrollTop, setScrollTop] = useState(0);

  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (lineRef.current !== null) {
      setPathLength(lineRef.current.getTotalLength());

      lineRef.current.style.strokeDasharray = pathLength + " " + pathLength;
      lineRef.current.style.strokeDashoffset = pathLength.toString();
    }

    const handleScroll = () => {
      // setScrollTop(window.scrollY);

      // What % is it?
      const scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      // Length to offset the dashes
      const drawLength = pathLength * scrollPercentage;

      /// Draw in reverse
      if (lineRef.current !== null) {
        lineRef.current.style.strokeDashoffset = (pathLength - drawLength).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathLength]);

  console.log(pathLength, "PATHLENGTH");
  console.log(lineRef.current, "line ref");

  return (
    <div className="line-container">
      <svg viewBox="0 0 504 2089" fill="none" preserveAspectRatio="xMidYMax meet">
        <path
          ref={lineRef}
          d="M252 1C239.2 719.4 269.333 899 286 899M286 899L348 910L438 961.158M286 899H252L148 919L54 994L5 1120L49 1247L133 1323L265 1356L377 1334L443 1288M443 1288L265 1129L443 964L438 961.158M443 1288L186 1810V2089M438 961.158L433 1083L401 1100V1146L438 1179M438 1179L491 1152L485 1100L438 1078L499 1094L491 1157L438 1179Z"
          stroke="#C91F1F"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
}

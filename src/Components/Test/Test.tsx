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

      // console.log(document.documentElement.scrollTop, "dest");
      // console.log(document.body.scrollTop, "bst");
      // console.log(document.documentElement.scrollHeight, "desh");
      // console.log(document.documentElement.clientHeight, "dech");
      // console.log(scrollPercentage,'sp');
      // console.log(pathLength + " " + pathLength);

      // Length to offset the dashes
      const drawLength = pathLength * scrollPercentage;
      // console.log(drawLength, "dl");
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

  // console.log(pathLength, "PATHLENGTH");
  // console.log(typeof pathLength, "type");

  // console.log(lineRef.current?.style.strokeDashoffset, "dashOffset");
  // console.log(lineRef.current?.style.strokeDasharray, "dasharray");

  return (
    <div className="line-container">
      {/* <div className="text-1xl">adasd</div> */}
      {/* <svg viewBox="0 0 504 2089" fill="none" preserveAspectRatio="xMidYMax meet">
        <path
          ref={lineRef}
          d="M252 1C239.2 719.4 269.333 899 286 899M286 899L348 910L438 961.158M286 899H252L148 919L54 994L5 1120L49 1247L133 1323L265 1356L377 1334L443 1288M443 1288L265 1129L443 964L438 961.158M443 1288L186 1810V2089M438 961.158L433 1083L401 1100V1146L438 1179M438 1179L491 1152L485 1100L438 1078L499 1094L491 1157L438 1179Z"
          stroke="#ffff00"
          strokeWidth="5"
        />
      </svg> */}
      {/* 
      <svg width="342" height="2102" viewBox="0 0 342 2102" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
        <path ref={lineRef} d="M325 0V718L65 844L1 964L155 1124L341 1178L325 1560V2102" stroke="black" />
      </svg> */}

      <svg viewBox="0 0 721 2100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
        <path ref={lineRef} d="M416 1L388 867H0H720L388 891V1237L22 1055L406 1247L388 2099" stroke="yellow" strokeWidth={6} />
      </svg>

      {/* <svg viewBox="0 0 772 2057" fill="none" preserveAspectRatio="xMidYMax meet">
        <path ref={lineRef} d="M212 2L4 422L766 846L86 1318C306 1562.67 742.4 2052.4 728 2054" stroke="black" strokeWidth="6" />
      </svg> */}
      {/* 
      <svg viewBox="0 0 168 2096" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
        <path
          ref={lineRef}
          d="M101 0V982M101 982L43 1000L1 1080L67 1154L167 1134L101 1066L155 1000L110 985M101 982L110 985M110 985V2096"
          stroke="black"
          strokeWidth="6"
        />
      </svg> */}
    </div>
  );
}

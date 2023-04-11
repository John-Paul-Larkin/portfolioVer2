import { useEffect, useRef, useState } from "react";
import "./HeroTest2.css";

export default function HeroScreen() {
  const initialsRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (initialsRef.current !== null) {
      setPathLength(initialsRef.current.getTotalLength());

      initialsRef.current.style.strokeDasharray = pathLength + " " + pathLength;
      initialsRef.current.style.strokeDashoffset = pathLength.toString();
    }

    let drawTimer: number;
    let drawInterval: number;

    const handleScroll = () => {
      // console.log(drawLength);
      // console.log(pathLength);
      drawTimer = setTimeout(() => {
        let drawLength = 0;
        drawInterval = setInterval(() => {
          drawLength = drawLength + 5;
          if (drawLength >= pathLength) {
            clearInterval(drawInterval);
          }

          if (initialsRef.current !== null) {
            initialsRef.current.style.strokeDashoffset = (pathLength - drawLength).toString();
          }
        }, 5);
      }, 500);
      //   const drawInterval2 = setInterval(() => {
      //     if (initialsRef.current !== null) {
      //       initialsRef.current.style.fill = "black";
      //     }
      //   }, delay + 200);
    };

    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("load", handleScroll);
      clearTimeout(drawTimer);
      clearInterval(drawInterval);
    };
  }, [pathLength]);

  return (
    <section className="hero-wrapper">
      <div className="jpl-svg">
        <svg width="258" height="779" viewBox="0 0 258 779" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={initialsRef}
            d="M207 0V391M207 391L161 407L135 440H117L15 314L1 401L64 494V506L1 669V745L8 778L24 698L64 631L161 587L213 494L257 470C257 455.333 256 425.2 252 422C248 418.8 220.333 400 207 391Z"
            // d="M1 1L36 490L575 701L774 403"
            stroke="black"
            strokeWidth={6}
          />
        </svg>

        {/* <svg width="775" height="702" viewBox="0 0 775 702" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L36 490L575 701L774 403" stroke="black"/>
</svg> */}


      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";

export default function LettersAnimation({ pathDetails, delay }: { pathDetails: string; delay: number }) {
  const initialsRef = useRef<SVGPathElement>(null);

  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (initialsRef.current !== null) {
      setPathLength(initialsRef.current.getTotalLength());

      initialsRef.current.style.strokeDasharray = pathLength + " " + pathLength;
      initialsRef.current.style.strokeDashoffset = pathLength.toString();
    }

    let drawTimer:number;

    const handleScroll = () => {
      // console.log(drawLength);
      // console.log(pathLength);
       drawTimer = setTimeout(() => {
        let drawLength = 0;
        const drawInterval = setInterval(() => {
          drawLength = drawLength + 5;
          if (drawLength >= pathLength) {
            clearInterval(drawInterval);
          }

          if (initialsRef.current !== null) {
            initialsRef.current.style.strokeDashoffset = (pathLength - drawLength).toString();
          }
        }, 5);
      }, delay);
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
    };
  }, [pathLength, delay]);

  return (
    <>
      <path ref={initialsRef} d={pathDetails} fill="none" stroke="black" strokeWidth={6} />
    </>
  );
}

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

    const handleScroll = () => {
      const scrollPercentage =
        // (document.documentElement.scrollTop + document.body.scrollTop) /
        // (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        
        document.documentElement.scrollTop  /
        document.documentElement.clientHeight;


      console.log(document.documentElement.scrollTop, "dest");
      console.log(document.body.scrollTop, "bst");
      console.log(document.documentElement.scrollHeight, "desh");
      console.log(document.documentElement.clientHeight, "dech");
      console.log(scrollPercentage,'sp');


      const drawLength = pathLength * scrollPercentage * 710;

      if (initialsRef.current !== null) {
        initialsRef.current.style.strokeDashoffset = (pathLength - drawLength).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathLength]);

  return (
    <section className="hero-wrapper">
      <div className="jpl-svg">
        <svg viewBox="0 0 517 185" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={initialsRef}
            d="M42 14.5V5.5H45.75C45.5833 5.5 54.8333 5.66667 73.5 6.00001C89.5 6.16667 103.333 6.16667 115 6.00001L135 5.5H137.75V14.5V23.5H127.75H117.5V84.5V145.25L116.5 148.25C115 154.083 112 159.25 107.5 163.75C99.3333 171.917 87.5 176.917 72 178.75C62.3333 179.917 53.0833 180.083 44.25 179.25C28.4167 177.25 17.25 172.333 10.75 164.5C8.41667 161.667 6.83333 158.333 6 154.5C5 150.667 5 146.583 6 142.25C8 134.583 13 129.5 21 127C22.3333 126.667 24.5 126.5 27.5 126.5C30.5 126.5 32.75 126.667 34.25 127C42.0833 129.667 47 134.75 49 142.25C50 146.083 50 150.167 49 154.5C48 158 46.8333 160.5 45.5 162C44.8333 163 44.5833 163.5 44.75 163.5C45.75 163.833 48.75 164.167 53.75 164.5C56.75 164.5 58.8333 164.417 60 164.25C69 162.75 74.5 157.333 76.5 148C76.8333 146.5 77.0833 125.333 77.25 84.5V23.5H59.75H42V14.5Z"
            stroke="black"
            strokeWidth="4"
            mask="url(#path-1-outside-1_1_6)"
          />
          <path
            d="M164.188 14.5V5.5H217.688C254.354 5.5 273.437 5.58333 274.938 5.75C295.604 7.25 311.187 13.5 321.688 24.5C328.187 31.5 332.271 39.75 333.938 49.25C334.271 50.75 334.438 53.3333 334.438 57C334.438 61.6667 334.021 65.5 333.188 68.5C331.187 77.5 326.521 85.25 319.188 91.75C309.854 99.75 298.021 104.75 283.688 106.75C279.187 107.417 269.021 107.75 253.188 107.75H232.938V133.25V159H246.438H259.938V168V177H256.688C256.854 177 248.854 176.833 232.688 176.5C218.854 176.333 205.021 176.333 191.188 176.5L167.438 177H164.188V168V159H177.688H191.188V91.25V23.5H177.688H164.188V14.5ZM268.938 24C267.937 23.8333 261.271 23.6667 248.938 23.5H231.438V57.25V91.25H246.438C261.104 91.25 270.604 90.5833 274.938 89.25C280.604 87.5833 284.521 85 286.688 81.5C289.187 77.1667 290.354 68.1667 290.188 54.5C290.021 46.6667 289.521 41.1667 288.688 38C288.021 35.1667 286.854 32.9167 285.188 31.25C282.187 27.75 276.771 25.3333 268.938 24Z"
            stroke="black"
            strokeWidth="4"
            mask="url(#path-1-outside-1_1_6)"
          />
          <path
            d="M360.721 14.5V5.5H363.971C363.804 5.5 371.804 5.66667 387.971 6.00001C401.804 6.16667 416.637 6.16667 432.471 6.00001L459.721 5.5H463.221V14.5V23.5H446.471H429.471V91.25V159H440.221C447.887 159 452.471 158.833 453.971 158.5C460.804 157.667 466.971 155.417 472.471 151.75C482.637 144.75 489.054 133.083 491.721 116.75C493.054 109.417 493.721 104.667 493.721 102.5C493.721 102.333 496.721 102.25 502.721 102.25H511.721V103.5C511.387 104.333 510.137 116.333 507.971 139.5C505.471 163.333 504.137 175.417 503.971 175.75V177H432.221H360.721V168V159H374.221H387.721V91.25V23.5H374.221H360.721V14.5Z"
            stroke="black"
            strokeWidth="4"
            mask="url(#path-1-outside-1_1_6)"
          />
        </svg>
      </div>
    </section>
  );
}

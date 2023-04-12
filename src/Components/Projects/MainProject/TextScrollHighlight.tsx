import { ReactElement, useContext, useRef } from "react";
import { PortfolioContext } from "../../../Context/PortfolioContext";
import "./TextScrollHightlight.css";

export default function TextScrollHighlight({ children }: { children: ReactElement }) {
  const hightlightTextRef = useRef<HTMLSpanElement>(null);
  const rectRef = useRef<SVGPathElement>(null);
  const rectRef2 = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const { drawLength } = useContext(PortfolioContext);

  let elementOffset = 0;
  if (hightlightTextRef.current && rectRef.current && rectRef2.current && svgRef.current) {
    elementOffset = hightlightTextRef.current.getBoundingClientRect().top;
    // const boxWidth = hightlightTextRef.current.getBoundingClientRect().width * 2 + hightlightTextRef.current.getBoundingClientRect().height * 2;

    // rectRef.current.style.strokeDashoffset = boxWidth.toString();
    // rectRef.current.style.strokeDasharray = boxWidth.toString();

    const boxWidth = rectRef.current.getTotalLength();

    rectRef.current.style.strokeDashoffset = boxWidth.toString();
    rectRef.current.style.strokeDasharray = boxWidth.toString();

    rectRef2.current.style.strokeDashoffset = boxWidth.toString();
    rectRef2.current.style.strokeDasharray = boxWidth.toString();
    // rectRef.current.style.transform = 'scale(2)';
    // rectRef2.current.style.transform = 'scale(2)';
  }

  let textInView = false;
  if (drawLength - elementOffset! > 0) {
    if (rectRef.current && rectRef2.current) {
      rectRef.current.style.strokeDashoffset = "0";
      rectRef2.current.style.strokeDashoffset = "0";
    }
    textInView = true;
  }

  // const screenWidth = window.innerWidth / 2;

  return (
    <span ref={hightlightTextRef} className={textInView ? "inView" : "notInView"}>
      <div className="svg-highlight-wrapper">
        {/* <svg className="svg-highlight">
          <rect ref={rectRef} className={textInView ? "inViewSvg inViewSvg-animate" : "inViewSvg"}></rect>
        </svg> */}
        <svg ref={svgRef} viewBox="0 0 614 292" fill="none" className="svg-highlight">
          <path
            ref={rectRef}
            className={textInView ? "inViewSvg inViewSvg-animate" : "inViewSvg"}
            d="M307 61.5158C107 -48.0842 19.6667 15.8492 1 61.5158L70 263.516L307 290.516"
            stroke="black"
          />
          <path
            ref={rectRef2}
            className={textInView ? "inViewSvg inViewSvg-animate" : "inViewSvg"}
            d="M307 61.617C507 -48.1663 594.333 15.874 613 61.617L544 263.955L307 291"
            stroke="black"
          />

          {/* <line x1="0" y1="0" y2="614" x2="292" stroke="black" /> */}
        </svg>

        <div className="children-wrapper">{children}</div>
      </div>
    </span>

    // <>
    //   {children}
    //   <svg width={screenWidth} viewBox={`0 0 814 ${screenWidth}`} fill="none" className="svg-highlight-3">
    //     <line x1="0" y1="0" y2="0" x2={screenWidth} stroke="black" />
    //   </svg>
    // </>
  );
}

{
  /* <span ref={hightlightTextRef} className={textInView ? "inView" : "notInView"}> */
}

// const textInView = useInView(hightlightTextRef, { margin: "0px 0px -60% 0px" });

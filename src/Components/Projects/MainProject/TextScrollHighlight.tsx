import { ReactElement, useContext, useRef } from "react";
import { PortfolioContext } from "../../../Context/PortfolioContext";
import "./TextScrollHightlight.css";

export default function TextScrollHighlight({ children }: { children: ReactElement }) {
  const hightlightTextRef = useRef<HTMLSpanElement>(null);

  const { drawLength } = useContext(PortfolioContext);

  let elementOffset = 0;
  if (hightlightTextRef.current) {
    elementOffset = hightlightTextRef.current.getBoundingClientRect().top + hightlightTextRef.current?.getBoundingClientRect().height / 2;
  }

  let textInView = false;
  if (drawLength - elementOffset! > 0) {
    textInView = true;
  }

  return (
    <span ref={hightlightTextRef} className={textInView ? "inView" : "notInView"}>
      <div className="svg-highlight-wrapper">
        <svg className="svg-highlight">
          <rect className={textInView ? "inViewSvg inViewSvg-animate" : "inViewSvg"}></rect>
        </svg>
        <div className="children-wrapper">{children}</div>
      </div>
    </span>
  );
}

{
  /* <span ref={hightlightTextRef} className={textInView ? "inView" : "notInView"}> */
}

// const textInView = useInView(hightlightTextRef, { margin: "0px 0px -60% 0px" });

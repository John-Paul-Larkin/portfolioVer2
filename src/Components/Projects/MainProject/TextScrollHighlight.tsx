import { useInView } from "framer-motion";
import { ReactElement, ReactNode, useContext, useRef, useState } from "react";

import { PortfolioContext } from "../../../Context/PortfolioContext";
import "./TextScrollHightlight.css";

export default function TextScrollHighlight({ children }: { children: ReactElement }) {
  const hightlightTextRef = useRef<HTMLSpanElement>(null);

  // const textInView = useInView(hightlightTextRef, { margin: "0px 0px -60% 0px" });

  const { drawLength } = useContext(PortfolioContext);

  // const scrollTop = document.documentElement.scrollTop;
  // const elementOffset = $("#my-element").offset().top;
  // const elementOffset =  hightlightTextRef.current?.offsetTop

  let elementOffset = 0;
  if (hightlightTextRef.current) {
    elementOffset = hightlightTextRef.current.getBoundingClientRect().top ;
  }

  // console.log('height', hightlightTextRef.current?.getBoundingClientRect().height)


  // const distance = elementOffset - scrollTop;

  // console.log(elementOffset, children.props);
  // console.log(drawLength);

  // console.log(Math.trunc(drawLength / 10));
  let textInView = false;

  if (drawLength - elementOffset! > 0) {
    // console.log(drawLength,'dl')
    // console.log(elementOffset,'eo')
    // console.log(children.props)
    console.log(drawLength - elementOffset!, children.props);
    textInView = true;
  }

  // console.log(textInView);

  return (
    <span ref={hightlightTextRef} className={textInView ? "inView" : ""}>
      {children}
    </span>
  );
}

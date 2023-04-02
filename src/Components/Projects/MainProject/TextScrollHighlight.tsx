import { useInView } from "framer-motion";
import { ReactNode, useContext, useRef } from "react";

import "./TextScrollHightlight.css";
import {PortfolioContext} from "../../../Context/PortfolioContext";

export default function TextScrollHighlight({ children }: { children: ReactNode }) {
  const hightlightTextRef = useRef<HTMLSpanElement>(null);

  const textInView = useInView(hightlightTextRef, { margin: "0px 0px -60% 0px" });

  const portfolioContext = useContext(PortfolioContext);


  return (
    <span ref={hightlightTextRef} className={textInView ? "inView" : ""}>
      {children}
    </span>
  );
}

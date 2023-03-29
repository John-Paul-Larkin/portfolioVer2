import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

import "./TextScrollHightlight.css";
export default function TextScrollHighlight({ children }: { children: ReactNode }) {
  const hightlightTextRef = useRef<HTMLSpanElement>(null);
  const textInView = useInView(hightlightTextRef, { margin: "0px 0px -60% 0px" });

  return (
    <span ref={hightlightTextRef} className={textInView ? "inView" : ""}>
      {children}
    </span>
  );
}

//            <motion.span className={posHeadingInView ? "pos-heading inView" : "pos-heading"} ref={hightlightTextRef}>
//     "Restaurant POS"
//   </motion.span>

// const highlightBorderRef = useRef<HTMLSpanElement>(null);
// const borderInView = useInView(highlightBorderRef, { margin: "-40% 0px -60% 0px" });

// console.log(borderInView, "biv");

//   <span className={borderInView ? "border-highlight" : ""} ref={highlightBorderRef}>

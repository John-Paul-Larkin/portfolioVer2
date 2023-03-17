import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import "./SectionHeading.css";

export default function SectionHeading({ heading }: { heading: string }) {
  const controls = useAnimation();
  const animateRef = useRef(null);
  const isInView = useInView(animateRef);

  const animation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.25, ease: "easeOut" } },
  };

  useEffect(() => {
    if (isInView) {
      controls.start(animation.animate);
    } else {
      controls.start(animation.initial);
    }
  }, [controls, isInView, animation.animate, animation.initial]);

  return (
    <div className="section-heading">
      <h2>
        <motion.span ref={animateRef} animate={controls} initial={animation.initial}>
          {heading}
        </motion.span>
        
      </h2>
    </div>
  );
}

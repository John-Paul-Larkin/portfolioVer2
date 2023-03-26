import { useEffect, useRef } from "react";
// import FullNameTest from "./FullNameTest";
// import kerryBench from "../../Assets/Images/BenchKerryCompressed.webp";
import "./HeroTest.css";
import useOnScreen from "../../Hooks/useOnScreen";

export default function HeroScreen() {
  const ref = useRef<HTMLSpanElement>(null);
  // const classVar = "hero-image-br";

  useEffect(() => {
    const timeout = setTimeout(() => {
      ref.current!.style.minHeight = "70vh";
      ref.current!.style.backgroundPosition = "bottom";
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);


  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  console.log({isOnScreen});

    return (
    <section className="hero-wrapper" ref={ref}>
      {/* <motion.h1 initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 2 }} className="name"> */}
      <h1 className="name" id="name" ref={elementRef}>
        <span>John </span> <span>Paul</span> <span>Larkin</span>
      </h1>
      {/* </motion.h1> */}
    </section>
  );
}

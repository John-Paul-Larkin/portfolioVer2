import { useRef } from "react";
// import FullNameTest from "./FullNameTest";
import "./HeroTest.css";

export default function HeroScreen() {
  const ref = useRef<HTMLSpanElement>(null);
  // const classVar = 'hero-image-br';

  // useEffect(() => {
  //   const timeout = setTimeout(()=>{
  //     // classVar =

  //   },3000)
  //   return () => {
  //     clearTimeout(timeout);
  //   }
  // }, [])

  return (
    <section className="hero-wrapper">
      <span
        className="hero-image-br"
        ref={ref}
        role="img"
        aria-label="John Paul Larkin, sitting on a bench, on a hillside in County Kerry, overlooking the ocean."
      >
        <h1 className="name">John Paul Larkin</h1>
      </span>
    </section>
  );
}

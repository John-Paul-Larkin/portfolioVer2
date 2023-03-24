import { useEffect, useRef } from "react";
import FullName from "./FullName";
import "./Hero.css";

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
        <FullName />
      </span>
    </section>
  );
}

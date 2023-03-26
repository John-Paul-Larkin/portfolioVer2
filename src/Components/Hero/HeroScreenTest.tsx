import { motion } from "framer-motion";
import { useRef } from "react";
// import FullNameTest from "./FullNameTest";
import kerryBench from "../../Assets/Images/BenchKerryCompressed.webp";
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
    <section className="hero-wrapper" >
        {/* <h1 className="name"> */}
        <motion.h1 initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 2 }} className="name">
        {/* <h1 className="name"> */}
   
          <span>John </span> <span>Paul</span> <span>Larkin</span>
        {/* </h1> */}
        </motion.h1>
     
    </section>
  );
}

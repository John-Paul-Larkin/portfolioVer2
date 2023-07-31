import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { RiSailboatFill } from "react-icons/ri";
import "./HeroScreen.css";

export default function HeroScreen() {
  // const heading = { initial: { opacity: 0.5 }, animate: { opacity: 1, transition: { duration: 3 } } };

  const initialH1 = { y: "1.5rem" };
  const animateH1 = { y: 0, transition: { duration: 1, ease: "easeOut" } };

  const initialp = { y: "3rem" };
  const animatep = { y: 0, transition: { delay: 1.5, duration: 1, ease: "easeOut" } };

  const list = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
  };

  return (
    <section className="hero-wrapper">
      <div className="heading">
        <div className="ss">
          <h1>John Paul Larkin</h1>

          <p>Full stack developer</p>
        </div>
      </div>

      <div className="pendulum-wrapper">
        <div className="pendulum">
          <RiSailboatFill />
        </div>

        <div className="header-wrapper">
          <motion.div initial={initialp} animate={animatep}>
            Transforming business processes into working software solutions.
          </motion.div>
        </div>

        <div className="waves-wrapper">
          <div className="waves"></div>
        </div>

        {/* <div className="icon-wrapper ">
          <div className="icon-inner">
            <i className="devicon-typescript-plain"></i>
            <i className="devicon-react-original "></i>
            <i className="devicon-nodejs-plain "></i>
            <i className="devicon-mysql-plain"></i>
            <i className="devicon-redux-original"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-html5-plain"></i>
          </div>
        </div> */}

        <div className="dev-icons">
          <motion.ul
            className="dev-icons-container"
            initial="hidden"
            whileInView="visible"
            variants={list}
            viewport={{ margin: "0px 0px -100px 0px" }}
          >
            <motion.li variants={item}>
              <i className="devicon-html5-plain "></i>
              <span>HTML</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-css3-plain "></i>
              <span>CSS</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-vscode-plain "></i>
              <span>VSCode</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-github-original "></i>
              <span>Github</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-git-plain "></i>
              <span>Git</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-javascript-plain"></i>
              <span>Javascript</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-redux-original "></i>
              <span>Redux</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-firebase-plain "></i>
              <span>Firebase</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-react-original "></i>
              <span>React</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-typescript-plain "></i>
              <span>Typescript</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-nodejs-plain "></i>
              <span>Node</span>
            </motion.li>
            <motion.li variants={item}>
              <i className="devicon-mysql-plain "></i>
              <span>MySQL</span>
            </motion.li>
          </motion.ul>
        </div>



      </div>
    </section>
  );
}

// <p>I am 41 years old, self-taught and I am spent 20 years working in catering.</p>
// <p>Most wont take the risk, but you will be glad that you did!</p>

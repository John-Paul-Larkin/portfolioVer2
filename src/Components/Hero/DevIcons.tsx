import { motion } from "framer-motion";

import "./DevIcons.css";

export default function DevIcons() {
  const list = {
    animate: {
      transition: {
        staggerChildren: .1,
      },
    },
  };

  const item = {
    initial: { y: 0 },
    animate: {
      y: 0,
      transition: {
        ease: "linear",
        duration: 1,
        repeat: Infinity
      },
    },
  };

  return (
      <motion.ul className="dev-icons" initial="initial" whileInView="animate" variants={list} viewport={{ margin: "0px 0px -100px 0px" }}>
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
          <i className="devicon-mysql-plain "></i>
          <span>MySQL</span>
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
          <i className="devicon-github-original "></i>
          <span>Github</span>
        </motion.li>
        <motion.li variants={item}>
          <i className="devicon-git-plain "></i>
          <span>Git</span>
        </motion.li>


      </motion.ul>
  );
}

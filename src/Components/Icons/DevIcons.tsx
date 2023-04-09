import { motion } from "framer-motion";
import TextScrollHighlight from "../Projects/MainProject/TextScrollHighlight";

import "./DevIcons.css";

export default function DevIcons() {
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
    <section className="dev-icons">
      <div className="container">
        <TextScrollHighlight>
          <h2>Skills</h2>
        </TextScrollHighlight>
        <motion.ul className="dev-icons-container" initial="hidden" whileInView="visible" variants={list} viewport={{ margin: "0px 0px -100px 0px" }}>
          <motion.li variants={item}>
            <i className="devicon-html5-plain colored"></i>
            <span>HTML</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="devicon-css3-plain colored"></i>
            <span>CSS</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="devicon-vscode-plain colored"></i>
            <span>VSCode</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="devicon-github-original colored"></i>
            <span>Github</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="devicon-git-plain colored"></i>
            <span>Git</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="devicon-javascript-plain colored"></i>
            <span>Javascript</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="devicon-redux-original colored"></i>
            <span>Redux</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="devicon-firebase-plain colored"></i>
            <span>Firebase</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="devicon-react-original colored"></i>
            <span>React</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="devicon-typescript-plain colored"></i>
            <span>Typescript</span>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

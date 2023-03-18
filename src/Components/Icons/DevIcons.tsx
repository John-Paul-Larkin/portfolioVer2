import { motion } from "framer-motion";
import "./DevIcons.css";

export default function DevIcons() {
  const list = {
    visible: {
      // opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      // opacity: 1,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0.1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: 1,
        ease: "easeOut",
        duration: 1,
        // type: "spring",
        // stiffness: 100,
      },
    },
  };

  return (
    <div className="dev-icons">
      <motion.ul className="container" initial="hidden" whileInView="visible" variants={list}>
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
        <motion.li variants={item}>
          <i className="devicon-redux-original colored"></i>
          <span>Redux</span>
        </motion.li>
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
      </motion.ul>
    </div>
  );
}

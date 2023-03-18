import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function FullName() {
  const name = "John Paul Larkin";
  const nameArray = name.split("");
  const jPos = 0;
  const pPos = 5;
  const lPos = 10;

  const capitals = (index: number) => {
    if (index === jPos || index === pPos || index === lPos) {
      return { delay: 0 };
    } else if (index < pPos) {
      return { delay: 0.7, duration: 0.6 };
    } else if (index < lPos) {
      return { delay: 1, duration: 0.6 };
    } else {
      return { delay: 1.3, duration: 0.6 };
    }
  };

  // make the initials slighly larger
  const lrgInitials = (index: number) => {
    if (index === jPos || index === pPos || index === lPos) {
      return { fontSize: "1.4em" };
    } else {
      return { fontSize: ".6em" };
    }
  };

  return (
    <>
      <h1 className={styles.name}>
        {nameArray.map((letter, index) => {
          return (
            <motion.span
              className={styles.letters}
              key={index}
              style={lrgInitials(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={capitals(index)}
            >
              {letter}
            </motion.span>
          );
        })}

        <div className={styles["web-design-wrapper"]}>
          <motion.p
            className={styles["web-design"]}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 2 }}
          >
            Front-end web developer
          </motion.p>
        </div>
      </h1>
    </>
  );
}

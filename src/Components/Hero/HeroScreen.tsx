import { motion } from "framer-motion";
import FullName from "./FullName";
import styles from "./Hero.module.css";

export default function HeroScreen() {
  return (
    <section className={styles["hero-wrapper"]}>
      <div className={styles["hero-image-br"]}>
        <FullName />
      </div>
      <motion.div
        className={styles["black-screen"]}
        initial={{ opacity: 1, top: 0 }}
        animate={{ opacity: 0, top: "100vh" }}
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
      ></motion.div>
    </section>
  );
}

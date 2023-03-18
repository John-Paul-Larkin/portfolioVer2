import FullName from "./FullName";
import styles from "./Hero.module.css";

export default function HeroScreen() {
  return (
    <section className={styles["hero-wrapper"]}>
      <span
        className={styles["hero-image-br"]}
        role="img"
        aria-label="John Paul Larkin, sitting on a bench, on a hillside in County Kerry, overlooking the ocean."
      >
        <FullName />
      </span>
    </section>
  );
}

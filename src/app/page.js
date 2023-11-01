import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/photos/hero.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className={styles.btn}>see our works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.image} />
      </div>
    </main>
  );
}

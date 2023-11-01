import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>coypright &copy; {year}</p>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.icon}
          src="/photos/1.png"
          width={15}
          height={15}
          alt="Super"
        />
        <Image
          className={styles.icon}
          src="/photos/2.png"
          width={15}
          height={15}
          alt="Super"
        />
        <Image
          className={styles.icon}
          src="/photos/3.png"
          width={15}
          height={15}
          alt="Super"
        />
        <Image
          className={styles.icon}
          src="/photos/4.png"
          width={15}
          height={15}
          alt="Super"
        />
      </div>
    </div>
  );
};

export default Footer;

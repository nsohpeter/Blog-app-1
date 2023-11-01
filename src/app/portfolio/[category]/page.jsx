import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/Components/Button/Button";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum
          </p>
          <Button url="#" text="see more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/photos/illustration.png"
            fill={true}
            alt="photo"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum
          </p>
          <Button url="#" text="see more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/photos/illustration.png"
            fill={true}
            alt="photo"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum
          </p>
          <Button url="#" text="see more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/photos/illustration.png"
            fill={true}
            alt="photo"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum
          </p>
          <Button url="#" text="see more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/photos/illustration.png"
            fill={true}
            alt="photo"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;

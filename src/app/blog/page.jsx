import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound;
  }

  const data = await res.json();
  return data;
};

const Blog = async () => {
  const data = await getData();
  //console.log(data);
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
          <Link href={`/blog/${item._id}`} className={styles.item} key={index}>
            <div className={styles.imgContainer}>
              <Image
                src={item.image}
                fill={true}
                priority={false}
                alt="photo"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;

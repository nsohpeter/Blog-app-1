import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound;
  }

  return await res.json();
  //return data;
};

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.description,
  };
}
const BlogPost = async ({ params }) => {
  //console.log(params);
  const data = await getData(params.id);
  //console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.singlePost}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.desc}</p>
            <div className={styles.author}>
              <Image
                src={data.image}
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>{data.username}</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={data.image}
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

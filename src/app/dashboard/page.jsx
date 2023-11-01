"use client";
import React from "react";
import Button from "@/Components/Button/Button";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Dashboard = () => {
  const router = useRouter();
  const session = useSession();

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log(data);

  if (session.status === "loading") {
    return <h1>loading....</h1>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.myPostHeader}>
          <h1>my posts</h1>
          <Button url="/dashboard/createPost" text="createPost" />
        </div>
        <hr />
        {data?.map((item) => {
          return (
            <div className={styles.postsContainer} key={item._id}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.image}
                  src={item.image}
                  fill={true}
                  priority={false}
                  alt="name"
                />
              </div>
              <div className={styles.postText}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>

              <button className={styles.btn}>delete</button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Dashboard;

//  <button onClick={() => router?.push("/dashboard/createpost")}></button>;

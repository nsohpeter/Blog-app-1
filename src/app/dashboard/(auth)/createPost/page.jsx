"use client";

import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/Utils/firebase";

const storage = getStorage(app);

const createPost = () => {
  const router = useRouter();
  const session = useSession();
  const [file, setFile] = useState("");
  const [media, setMedia] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file); // Get the selected file
    setSelectedFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            //console.log("File available at", downloadURL);
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload(file);
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //process data
    // console.log(formData);

    if (!selectedFile) {
      alert("Please select a file before submitting.");
      return;
    }
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          media: media,
          username: session?.data.user.name,
        }),
      });
      console.log(res.body);
      res.status === 201 &&
        router.push("/dashboard/login?success =post created");
      // console.log(formData);
      setLoading(false);
      setFormData({
        title: "",
        desc: "",
        image: "",
        content: "",
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.create}>Create Post</h1>
      {loading && <h1>Loading...</h1>}
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          id="title"
          placeholder="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="desc"
          id="desc"
          placeholder="desc"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="file"
          name="image"
          onChange={handleFileChange}
          accept="image/*"
        />
        <textarea
          className={styles.textarea}
          id="content"
          placeholder="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          cols="30"
          rows="10"
        ></textarea>

        <button className={styles.btn} type="submit">
          submit post
        </button>
      </form>
      {error && <h1>oops! something went wrong</h1>}
    </div>
  );
};

export default createPost;

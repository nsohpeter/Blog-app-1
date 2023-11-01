"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //process data
    try {
      await signIn("credentials", formData);
      setLoading(false);
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  if (session.status === "loading") {
    return <h1>loading....</h1>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  return (
    <div className={styles.container}>
      {loading && <h1>Loading...</h1>}
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className={styles.btn} type="submit">
          login
        </button>
      </form>
      {error && <h1>oops! something went wrong</h1>}

      <button onClick={() => signIn("google")}>login with google</button>
    </div>
  );
};

export default Login;

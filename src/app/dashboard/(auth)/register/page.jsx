"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Registration = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
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
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success = account has been created");
      // console.log(formData);
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <h1>Loading...</h1>}
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
          register
        </button>
      </form>
      {error && <h1>oops! something went wrong</h1>}
      <Link href="/dashboard/login" className="linkEl">
        login with an existing account
      </Link>
    </div>
  );
};

export default Registration;

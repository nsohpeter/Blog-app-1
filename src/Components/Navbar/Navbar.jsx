"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <h1>Supercode</h1>
      </Link>
      <div className={styles.navLinks}>
        <DarkModeToggle />
        {links.map((link, index) => {
          return (
            <Link href={link.url} key={index} className={styles.links}>
              {link.title}
            </Link>
          );
        })}

        {session.status === "authenticated" && (
          <button className={styles.logoutbtn} onClick={signOut}>
            logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

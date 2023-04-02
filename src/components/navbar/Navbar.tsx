import React from "react";
import Link from "next/link";
import { Logo } from "@/components";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <Logo fontSize="30px" />
      <nav>
        <ul className={styles.list}>
          <li className={styles.link}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link href="/votacion">Votación</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

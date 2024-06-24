import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div>
      <div className={styles.container}>
        <h2>{"What's hot"}</h2>
        <h1>Most Popular</h1>
        <div className={styles.items}>
          <Link href="/" className={styles.item}>
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>
                Travel
              </span>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
              <div className={styles.detail}>
                <span>John Doe</span>
                <span>2024.06.24</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

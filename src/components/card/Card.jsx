import Image from "next/image";
import styles from "./card.module.css";
import React from "react";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2024.06.24</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          natus voluptates. Repudiandae numquam libero sunt. Porro minima
          officiis distinctio adipisci, illum impedit praesentium est officia.
          Veniam fugiat eum aut iusto!
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;

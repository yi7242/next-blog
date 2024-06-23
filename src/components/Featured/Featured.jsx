import React from 'react';
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}><b>Hello, Yunative here!</b> Discover my ideas.</h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ipsum minus cupiditate atque, totam, adipisci quam ducimus a quasi similique, delectus ab possimus molestias iste? Sit iure optio ea amet?</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;
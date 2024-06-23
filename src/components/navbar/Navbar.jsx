import React from 'react';
import Image from 'next/image';
import styles from "./navbar.module.css";

const Navbar = () => {
    https://score.wanictf.org/#/login
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt='facebook' width={24} height={24} />
                <Image src="/instagram.png" alt='instagram' width={24} height={24} />
                <Image src="/tiktok.png" alt='tiktok' width={24} height={24} />
                <Image src="/youtube.png" alt='youtube' width={24} height={24} />
            </div>
            <div className={styles.logo}></div>
            <div className={styles.links}></div>
        </div>
    )
}

export default Navbar;
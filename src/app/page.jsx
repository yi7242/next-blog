import Navbar from "@/components/navbar/Navbar";
import styles from "./homepage.module.css";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Featured from "@/components/Featured/Featured";
import Menu from "@/components/Menu/Menu";
export default function Home() {
  return (
    <div className="styles.container">
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />

      </div>
    </div>
  );
}

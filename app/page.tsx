import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Designo Agency | Home",
};

export default function Home() {
  return (
    <main className={`${styles.main} container`}>
      <h1>Homepage</h1>
    </main>
  );
}

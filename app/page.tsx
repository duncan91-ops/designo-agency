import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Designo Agency | Home",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className={styles.title}>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className={styles.msg}>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link href="/" className="btn__primary">
            learn more
          </Link>
        </div>
      </section>
      <nav className={styles.nav}></nav>
      <section className={styles.values}></section>
    </main>
  );
}

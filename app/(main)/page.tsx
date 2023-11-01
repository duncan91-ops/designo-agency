import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.scss";
import { getDomains } from "@/utils/getDomains";
import imgPassionate from "@/icons/illustration-passionate.svg";
import imgResourceful from "@/icons/illustration-resourceful.svg";
import imgFriendly from "@/icons/illustration-friendly.svg";
import { Domain } from "@/components";

export const metadata: Metadata = {
  title: "Designo Agency | Home",
};

export default function HomePage() {
  const domains = getDomains();

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
          <Link href="/about" className="btn__primary">
            learn more
          </Link>
        </div>
      </section>

      <nav className={styles.nav}>
        <ul className={`${styles.domains} container`}>
          {domains.map((domain) => {
            return <Domain key={domain.id} domain={domain} />;
          })}
        </ul>
      </nav>

      <section className={styles.values}>
        <ul className={`${styles.qualities} container`}>
          <li className={styles.quality}>
            <div className={styles.quality__img}>
              <Image
                src={imgPassionate}
                alt="quality illustration"
                fill
                object-fit="cover"
              />
            </div>
            <h3 className={styles.quality__title}>passionate</h3>
            <p className={styles.quality__msg}>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </li>
          <li className={styles.quality}>
            <div className={styles.quality__img}>
              <Image
                src={imgResourceful}
                alt="quality illustration"
                fill
                object-fit="cover"
              />
            </div>
            <h3 className={styles.quality__title}>resourceful</h3>
            <p className={styles.quality__msg}>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </li>
          <li className={styles.quality}>
            <div className={styles.quality__img}>
              <Image
                src={imgFriendly}
                alt="quality illustration"
                fill
                object-fit="cover"
              />
            </div>
            <h3 className={styles.quality__title}>friendly</h3>
            <p className={styles.quality__msg}>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}

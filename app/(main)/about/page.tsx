import type { Metadata } from "next";
import styles from "./page.module.scss";
import { Locations } from "@/components";

export const metadata: Metadata = {
  title: "Designo Agency | About",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.hero__img}></div>
        <div className={styles.hero__details}>
          <h1 className={styles.title}>about us</h1>
          <p className={styles.msg}>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </section>

      <section className={`${styles.caption} ${styles.first}`}>
        <div className={`${styles.caption__img} ${styles.caption__main}`}></div>
        <div className={styles.caption__details}>
          <h2 className={styles.caption__title}>World-class talent</h2>
          <p className={styles.caption__msg}>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className={styles.caption__msg}>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </section>

      <Locations />

      <section className={`${styles.caption} ${styles.last}`}>
        <div className={`${styles.caption__img} ${styles.caption__sub}`}></div>
        <div className={styles.caption__details}>
          <h2 className={styles.caption__title}>The real deal</h2>
          <p className={styles.caption__msg}>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className={styles.caption__msg}>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </section>
    </main>
  );
}

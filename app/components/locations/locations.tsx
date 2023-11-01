import Image from "next/image";
import Link from "next/link";
import styles from "./locations.module.scss";
import illustrationCanada from "@/icons/illustration-canada.svg";
import illustrationAustralia from "@/icons/illustration-australia.svg";
import illustrationUK from "@/icons/illustration-united-kingdom.svg";

export default function Locations() {
  return (
    <section className={styles.locations}>
      <article className={styles.location}>
        <div className={styles.img}>
          <Image
            src={illustrationCanada}
            alt="location illustration"
            fill
            object-fit="cover"
          />
        </div>
        <h2 className={styles.name}>canada</h2>
        <Link
          href="/locations#canada"
          className={`${styles.btn} btn__secondary`}
        >
          see location
        </Link>
      </article>
      <article className={styles.location}>
        <div className={styles.img}>
          <Image
            src={illustrationAustralia}
            alt="location illustration"
            fill
            object-fit="cover"
          />
        </div>
        <h2 className={styles.name}>australia</h2>
        <Link
          href="/locations#australia"
          className={`${styles.btn} btn__secondary`}
        >
          see location
        </Link>
      </article>
      <article className={styles.location}>
        <div className={styles.img}>
          <Image
            src={illustrationUK}
            alt="location illustration"
            fill
            object-fit="cover"
          />
        </div>
        <h2 className={styles.name}>united kingdom</h2>
        <Link href="/locations#uk" className={`${styles.btn} btn__secondary`}>
          see location
        </Link>
      </article>
    </section>
  );
}

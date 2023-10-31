import styles from "./page.module.scss";
import { Cta } from "@/components";

export default function LocationsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.locations}>
        <article className={styles.location}>
          <div className={`${styles.location__img} ${styles.canada}`}></div>
          <div className={styles.location__details}>
            <h2 className={styles.location__name}>canada</h2>
            <div className={styles.location__address}>
              <p className={styles.title}>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className={styles.location__contact}>
              <p className={styles.title}>Contact</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </article>
        <article className={styles.location}>
          <div className={`${styles.location__img} ${styles.australia}`}></div>
          <div className={styles.location__details}>
            <h2 className={styles.location__name}>australia</h2>
            <div className={styles.location__address}>
              <p className={styles.title}>Designo AU Office</p>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div className={styles.location__contact}>
              <p className={styles.title}>Contact</p>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </article>
        <article className={styles.location}>
          <div className={`${styles.location__img} ${styles.uk}`}></div>
          <div className={styles.location__details}>
            <h2 className={styles.location__name}>united kingdom</h2>
            <div className={styles.location__address}>
              <p className={styles.title}>Designo UK Office</p>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div className={styles.location__contact}>
              <p className={styles.title}>Contact</p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </article>
      </section>

      <Cta />
    </main>
  );
}

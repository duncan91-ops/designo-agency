import styles from "./page.module.scss";
import { Locations } from "@/components";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.contact}></section>
      <Locations />
    </main>
  );
}

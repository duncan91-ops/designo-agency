import type { Metadata } from "next";
import styles from "./page.module.scss";
import { Locations, ContactForm } from "@/components";

export const metadata: Metadata = {
  title: "Designo Agency | Contact",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.contact}>
        <article className={styles.details}>
          <h1 className={styles.title}>contact us</h1>
          <p className={styles.message}>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </article>

        <ContactForm />
      </section>
      <Locations />
    </main>
  );
}

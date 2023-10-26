import Link from "next/link";
import styles from "./menu.module.scss";

export default function Menu({ close }: { close: () => void }) {
  return (
    <section className={styles.menu}>
      <nav className={styles.nav} onClick={(e) => e.stopPropagation()}>
        <ul className={`${styles.nav__items} container`}>
          <li className={styles.nav__item}>
            <Link href="/about" className={styles.nav__link} onClick={close}>
              our company
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              href="/locations"
              className={styles.nav__link}
              onClick={close}
            >
              locations
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/contact" className={styles.nav__link} onClick={close}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

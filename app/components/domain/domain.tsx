import Link from "next/link";
import styles from "./domain.module.scss";
import { Domain } from "@/types/domain";

export default function Domain({ domain }: { domain: Domain }) {
  return (
    <li className={styles.domain} key={domain.id}>
      <Link className={styles.domain__link} href="#"></Link>
      <div className={styles.domain__overlay}></div>
      <picture>
        <source media="(min-width: 1280px)" srcSet={domain.image.desktop} />
        <source media="(min-width: 768px" srcSet={domain.image.tablet} />
        <img
          className={styles.domain__img}
          src={domain.image.mobile}
          alt="domain image"
        />
      </picture>
      <div className={styles.domain__details}>
        <h2 className={styles.domain__title}>{domain.name}</h2>
        <p className={styles.domain__cta}>
          <span>view projects</span>
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4-4 4"
              stroke="#E7816B"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </p>
      </div>
    </li>
  );
}

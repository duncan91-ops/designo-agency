"use client";

import { useState, MouseEventHandler } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import logo from "@/images/logo-dark.png";
import Menu from "../menu/menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header} onClick={closeMenu}>
      <section className={`${styles.content} container`}>
        <div className={styles.header__left}>
          <div className={styles.logo}>
            <Link className={styles.logo__link} href="/">
              <Image src={logo} alt="logo" fill className={styles.logo__img} />
            </Link>
          </div>
        </div>
        <div className={styles.header__right}>
          <div className={styles.toggle}>
            <button
              type="button"
              onClick={toggleMenu}
              className={styles.toggle__btn}
            >
              {!menuOpen ? (
                <svg
                  width="24"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.toggle__icon}
                >
                  <g fill="#1D1C1E" fillRule="evenodd">
                    <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
                  </g>
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.toggle__icon}
                >
                  <path
                    d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z"
                    fill="#1D1C1E"
                    fillRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.nav__items}>
              <li className={styles.nav__item}>
                <Link href="/about" className={styles.nav__link}>
                  our company
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link href="/locations" className={styles.nav__link}>
                  locations
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link href="/contact" className={styles.nav__link}>
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {menuOpen && <Menu close={closeMenu} />}
    </header>
  );
}

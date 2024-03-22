"use client";
import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import icon from "../../assets/icons/icon.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <h1>
          {/* <a className={styles.logo}>Asia Leasing</a> */}
          <Image src={icon} alt="Asia Leasing" width={80} height={50} />
        </h1>
        <button
          className={styles.navOpenBtn}
          aria-label="Open Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoIosMenu />
        </button>

        <nav
          className={`${styles.navbar} ${isOpen && styles.active}`}
          data-navbar
        >
          <button
            className={styles.navCloseBtn}
            aria-label="Close Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMdClose />
          </button>

          <ul className={styles.navbarList}>
            <li>
              <Link
                href="/"
                className={`${styles.navbarLink} ${
                  pathname == "/" ? styles.active : ""
                }`}
                onClick={closeNavbar}
              >
                <span>Главная</span>
                <IoIosArrowForward />
              </Link>
            </li>
            <li className={`${styles.dropdown__link}`}>
              <span
                className={`${styles.navbarLink} ${
                  pathname == "/cars/category/new" ||
                  pathname == "/cars/category/used"
                    ? styles.active
                    : ""
                }`}
                onClick={() => setIsSubOpen(!isSubOpen)}
              >
                <span>
                  Каталог <IoIosArrowDown className={styles.catalog__svg} />
                </span>
                {isSubOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </span>
              <div
                className={`${styles.dropdown} ${
                  isSubOpen && styles.dropdown__active
                }`}
              >
                <Link
                  href="/cars/category/new"
                  className={`${styles.navbarLink} ${
                    pathname == "/cars/category/new" ? styles.active : ""
                  }`}
                  onClick={closeNavbar}
                >
                  <span>Новые авто</span>
                  <IoIosArrowForward />
                </Link>
                <Link
                  href="/cars/category/used"
                  className={`${styles.navbarLink} ${
                    pathname == "/cars/category/used" ? styles.active : ""
                  }`}
                  onClick={closeNavbar}
                >
                  <span>Авто с пробегом</span>
                  <IoIosArrowForward />
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/about"
                className={`${styles.navbarLink} ${
                  pathname == "/about" ? styles.active : ""
                }`}
                onClick={closeNavbar}
              >
                <span>О нас</span>
                <IoIosArrowForward />
              </Link>
            </li>

            <li>
              <Link
                href="/contacts"
                className={`${styles.navbarLink} ${
                  pathname == "/contacts" ? styles.active : ""
                }`}
                onClick={closeNavbar}
              >
                <span>Контакты</span>
                <IoIosArrowForward />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

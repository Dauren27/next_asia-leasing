"use client";
import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { useSelector } from "react-redux";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import icon from "../../../assets/icons/icon.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <h1>
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
                href="/admin/cars"
                className={`${styles.navbarLink} ${
                  pathname == "/admin/cars" ? styles.active : ""
                }`}
                onClick={closeNavbar}
              >
                <span>Машины</span>
                <IoIosArrowForward />
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className={`${styles.navbarLink} ${
                  pathname == "/admin/users" ? styles.active : ""
                }`}
                onClick={closeNavbar}
              >
                <span>Пользователи</span>
                <IoIosArrowForward />
              </Link>
            </li>
            <li>
              <Link
                href="/admin/applications"
                className={`${styles.navbarLink} ${
                  pathname == "/admin/applications" ? styles.active : ""
                }`}
                onClick={closeNavbar}
              >
                <span>Заявки</span>
                <IoIosArrowForward />
              </Link>
            </li>
            <li>
              <div className={styles.link__btn} onClick={closeNavbar}>
                <Link href="/admin/profile">
                  <button>Профиль</button>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className={styles.navbar__btn}>
          <Link href="/admin/profile">
            <button>Профиль</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

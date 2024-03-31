import React from "react";
import styles from "./breadcrumbs.module.scss";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

export default function Breadcrumbs({ links }) {
  return (
    <div className={styles.breadcrums}>
      <Link href="/">
        <IoHome />
        <span>Главная</span>
      </Link>
      <MdArrowForwardIos />
      {links.map((link) => (
        <div key={link.path}>
          <Link href={link.path}>
            <span>{link.name}</span>
          </Link>
          <MdArrowForwardIos />
        </div>
      ))}
    </div>
  );
}

"use client";
import React from "react";
import styles from "./button.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;

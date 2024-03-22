"use client";
import React from "react";
import styles from "./cars.module.scss";
import Cars from "@/components/admin/Cars/Cars";

const AdminHome = () => {
  return (
    <div className={styles.main}>
      <Cars />
    </div>
  );
};

export default AdminHome;

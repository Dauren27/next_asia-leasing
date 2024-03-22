"use client";
import React, { useState } from "react";
import styles from "./applications.module.scss";
import Application from "@/components/admin/Application/Application";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const data = [
  {
    id: 1,
    full_name: "Алтынбеков Даурен",
    phone: "+996702271103",
    region: "Бишкек",
    price: "4000000",
    initial_fee: "200000",
    months: "6",
    loanAmount: "3800000",
    percent: "25",
    monthlyPayment: "700000",
    date: "22.05.2023",
    car: {
      id: 1,
      title: "Mercedes",
      born: "2022",
      volume: "2.5",
      gear: "Полный",
      engine: "Бензиновый",
      transmission: "Автомат",
      color: {
        id: 1,
        title: "Синий",
      },
      price: "40000",
      period: "3 месяца",
      category: {
        id: 0,
        title: "С пробегом",
      },
      discount_price: "",
      company: {
        id: 0,
        name: "Mercedes Центр",
      },
    },
  },
  {
    id: 2,
    full_name: "Алтынбеков Даурен",
    phone: "+996702271103",
    region: "Бишкек",
    price: "4000000",
    initial_fee: "200000",
    months: "6",
    loanAmount: "3800000",
    percent: "25",
    monthlyPayment: "700000",
    date: "24.05.2023",
    car: {
      id: 1,
      title: "Mercedes",
      born: "2022",
      volume: "2.5",
      gear: "Полный",
      engine: "Бензиновый",
      transmission: "Автомат",
      color: {
        id: 1,
        title: "Синий",
      },
      price: "40000",
      period: "3 месяца",
      category: {
        id: 0,
        title: "С пробегом",
      },
      discount_price: "",
      company: {
        id: 0,
        name: "Mercedes Центр",
      },
    },
  },
];
const Applications = () => {
  const [category,setCategory]=useState(1)
  return (
    <div className={styles.main}>
      <div className={styles.applications__content}>
        <div className={styles.applications__headers}>
          <h2>Список заявок</h2>
          <Select
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                name="category"
                className={styles.select}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value={1}>Обработанные</MenuItem>
                <MenuItem value={2}>Не обработанные</MenuItem>
        
              </Select>
        </div>
        <div className={styles.applications__list}>
          {data &&
            data.map((application) => (
              <Application application={application} key={application?.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;

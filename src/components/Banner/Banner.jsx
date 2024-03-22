"use client";
import React, { useState } from "react";
import styles from "./banner.module.scss";
import car from "../../assets/images/car4.png";
import Calculator from "../Calculator/Calculator";
import Button from "../UI/Button/Button";
import Image from "next/image";

const Banner = () => {
  const [open, setOpen] = useState(false);

  const handleCalculatorOpen = () => {
    setOpen(true);
  };

  const handleCalculatorClose = () => {
    setOpen(false);
  };

  return (
    <section className={styles.home}>
      <div className={styles.home__content}>
        <h1>Автомобили в лизинг</h1>
        <h3>Легкий путь к мобильности</h3>
        <p>
          С нашими гибкими условиями лизинга вы можете выбрать автомобиль,
          который соответствует вашим потребностям, а затем определить сроки и
          размер ежемесячных выплат, удобные для вашего бюджета.
        </p>
        <Button onClick={handleCalculatorOpen}>Калькулятор</Button>
      </div>

      <div className={styles.home__img}>
        <div className={styles.rhombus}>
          <Image src={car} alt="Banner Car Picture" width={0} height={0}/>
        </div>
      </div>
      {open && <Calculator onClose={handleCalculatorClose} open={open} />}
    </section>
  );
};

export default Banner;

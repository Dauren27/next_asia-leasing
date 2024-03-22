import React from 'react'
import styles from "./offer.module.scss";
import { IoCarSportSharp } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";

export default function Offers() {
  return (
    <div className={styles.offers} id="offer">
      <h2>Наши предложения</h2>
      <div className={styles.offers__items}>
        <div className={styles.offers_item}>
          <h3>До 5 000 000 сом</h3>
          <IoCarSportSharp />
        </div>
        <div className={styles.offers_item}>
          <h3>От 18%</h3>
          <CiDiscount1 />
        </div>
        <div className={styles.offers_item}>
          <h3>До 36 месяцев</h3>
          <LuCalendarClock />
        </div>
      </div>
    </div>
  )
}

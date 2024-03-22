"use client";
import React, { useState } from "react";
import styles from "./application.module.scss";
import ApplicationCar from "../ApplicationCar/ApplicationCar";
import Checkbox from "@mui/material/Checkbox";


const Application = ({ application }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.application}>
      <div className={styles.application__left}>
        <h3>
          Заявка № <span>{application?.id}</span>
        </h3>
        <hr />
        <p>
          ФИО: <span>{application?.full_name}</span>
        </p>
        <hr />
        <p>
          Регион: <span>{application?.region}</span>
        </p>
        <hr />
        <p>
          Номер телефона: <span>{application?.phone}</span>
        </p>
        <hr />
        <p>
          Стоимость авто:
          <span>{application?.price}</span>
        </p>
        <hr />
        <p>
          Первоначальный взнос: <span>{application?.initial_fee}</span>
        </p>
        <hr />
        <p>
          Сумма займа: <span>{application?.loanAmount}</span>
        </p>
        <hr />
        <p>
          Срок кредита: <span>{application?.months}</span>
        </p>
        <hr />
        <p>
          Процентная ставка: <span>{application?.percent}</span>
        </p>
        <hr />
        <p>
          Ежемесячный платёж: <span>{application?.loanAmount}</span>
        </p>
        <hr />
        <p>
          Дата: <span>{application?.date}</span>
        </p>
        <hr />
      </div>
      <div className={styles.application__middle}>
        <ApplicationCar car={application?.car} />
      </div>
      <div className={styles.application__right}>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 34 } }}
        />
      </div>
    </div>
  );
};

export default Application;

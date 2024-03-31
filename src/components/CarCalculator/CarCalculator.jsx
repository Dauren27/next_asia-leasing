"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Slider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import styles from "./carCalculator.module.scss";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    "& .MuiDialog-paper": {
      margin: 0,
      maxWidth: "100%",
      width: "100%",
      height: "100%",
      maxHeight: "100%",
      borderRadius: 0,
    },
  },
}));
const PrettoSlider = styled(Slider)({
  color: "#007480",
  height: 4,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#2e8b57",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
  "& .MuiSlider-mark": {
    height: 10,
    width: 2,
    marginTop: 0,
  },
  "& .MuiSlider-markLabel": {
    fontSize: 16,
    marginTop: 0,
    color: "#000",
  },
});
const CarCalculator = ({ open, onClose, car }) => {
  const [data, setData] = useState({
    price: car && car.price,
    initial_fee: 0,
    months: 3,
    loanAmount: 0,
    percent: 25,
    monthlyPayment: 0,
    full_name: "",
    region: "",
    phone: "",
  });

  const marks = [
    { value: 3, label: "3 мес.", style: { marginLeft: "-30px" } },
    { value: 60, label: "60 мес." },
  ];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const calculateLoanAndPayment = () => {
    const loanAmount = data.price - data.initial_fee;
    let monthlyPayment = calculateMonthlyPayment(
      loanAmount,
      data.months,
      data.percent
    );
    monthlyPayment = parseInt(monthlyPayment);
    setData({ ...data, loanAmount, monthlyPayment });
  };

  const calculateMonthlyPayment = (loanAmount, months, percent) => {
    const monthlyInterestRate = percent / 12 / 100;
    const denominator = Math.pow(1 + monthlyInterestRate, months) - 1;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / denominator;
    return monthlyPayment;
  };

  const handleSubmit = () => {
    if (!data.price || !data.initial_fee) {
      return;
    }

    calculateLoanAndPayment();

    // Далее вы можете добавить логику отправки данных формы или другие действия,
    // которые вам необходимо выполнить при отправке формы.
  };

  useEffect(() => {
    calculateLoanAndPayment();
  }, [data.price, data.initial_fee, data.months, data.percent]);
  // const calculatePercent = () => {
  //   let percentVal = 25;
  //   if (data.price < 200001) {
  //     percentVal = 25;
  //   } else if (data.price < 400001) {
  //     percentVal = 23;
  //   } else if (data.price < 2000001) {
  //     percentVal = 21;
  //   } else if (data.price < 4000000) {
  //     percentVal = 20;
  //   } else if (data.price >= 4000000) {
  //     percentVal = 18;
  //   } else {
  //     percentVal = 0;
  //   }
  //   setData({ ...data, percent: percentVal });
  // };

  // useEffect(() => {
  //   calculatePercent();
  // }, [data.price]);
  return (
    <BootstrapDialog
      open={open}
      onClose={onClose}
      sx={{ "& .MuiDialog-paper": { maxWidth: "800px" } }}
      disableScrollLock
    >
      <DialogTitle>
        <span className={styles.modal__title}>Калькулятор</span>
        <IconButton
          aria-label="close"
          className={styles.calculator__close}
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.success[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <div className={styles.calculator__form}>
          <div className={styles.form__left}>
            <div className={styles.form__item}>
              <h3>Стоимость авто</h3>
              {/* <InputMask
                mask="999 999 999 999"
                maskChar=""
                value={data.price}
                onChange={handleChange}
              >
                {(inputProps) => (
                  <input
                    type="text"
                    placeholder="Введите стоимость авто"
                    name="price"
                    {...inputProps}
                  />
                )}
              </InputMask> */}
              <input
                type="text"
                placeholder="Введите стоимость авто"
                name="price"
                value={data.price}
                onChange={handleChange}
              />
              <p>Максимальная сумма 5 000 000 сом</p>
            </div>
            <div className={styles.form__item}>
              <h3>Первоначальный взнос</h3>
              {/* <InputMask
                mask="99 999 999 999"
                maskChar=""
                value={data.initial_fee}
                onChange={handleChange}
              >
                {(inputProps) => (
                  <input
                    type="text"
                    placeholder="Введите сумму взноса"
                    name="initial_fee"
                    {...inputProps}
                  />
                )}
              </InputMask> */}
              <input
                type="text"
                placeholder="Введите сумму взноса"
                name="initial_fee"
                value={data.initial_fee}
                onChange={handleChange}
              />
              <p>Минимально 30% от стоимости</p>
            </div>
            <div className={styles.form__item}>
              <div className={styles.item__flex}>
                <div>
                  <h3>Срок кредита</h3>
                  <h4>{data.months} мес.</h4>
                </div>
              </div>
              <div className={styles.item__slider}>
                <PrettoSlider
                  aria-label="Temperature"
                  defaultValue={3}
                  color="secondary"
                  marks={marks}
                  min={3}
                  max={60}
                  name="months"
                  value={data.months}
                  onChange={handleChange}
                />
                <p className={styles.slider__advice}>Двигайте ползунок</p>
              </div>
            </div>
            <div className={styles.form__item}>
              <div className={styles.item__flex}>
                <div>
                  <h3>Сумма займа</h3>
                  <h4>{data.loanAmount} сом</h4>
                </div>
                <div>
                  <h3 className={styles.verticalLine}>Процентная ставка</h3>
                  <h4>{data.percent}%</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form__right}>
            <div className={styles.form__item}>
              <div className={styles.item__flex}>
                <div>
                  <h3>Предварительный ежемесячный платёж</h3>
                  <h4>{data.monthlyPayment} сом</h4>
                  <p>
                    -для окончательного расчета требуется оставить заявку на
                    получение автомобиля
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.form__item}>
              <h3>ФИО</h3>
              <input
                type="text"
                placeholder="Введите ваше ФИО"
                name="full_name"
                value={data.full_name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__item}>
              <h3>Регион</h3>
              {/* <input
                type="text"
                placeholder="Введите ваш регион"
                name="region"
                value={data.region}
                onChange={handleChange}
              /> */}
              <Select
                value={data.region}
                onChange={handleChange}
                name="region"
                className={styles.filter__select}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="Бишкек">Бишкек</MenuItem>

                <MenuItem value="Чуйская область">Чуйская область</MenuItem>
                <MenuItem value="Таласская область">Таласская область</MenuItem>
                <MenuItem value="Нарынская область">Нарынская область</MenuItem>
                <MenuItem value="Ошская область">Ошская область</MenuItem>
                <MenuItem value="Джалал – Абадская область">
                  Джалал – Абадская область
                </MenuItem>
                <MenuItem value="Баткенская область">
                  Баткенская область
                </MenuItem>
                <MenuItem value="Иссык-Кульская область">
                  Иссык-Кульская область
                </MenuItem>
              </Select>
            </div>
            <div className={styles.form__item}>
              <h3>Номер телефона</h3>
              {/* <InputMask
                mask="+996 999 999 999"
                alwaysShowMask
                maskChar=""
                value={data.phone}
                onChange={handleChange}
              >
                {(inputProps) => (
                  <input
                    type="text"
                    placeholder="Введите ваш номер телефона"
                    name="phone"
                    {...inputProps}
                  />
                )}
              </InputMask> */}
              <input
                type="text"
                placeholder="Введите ваш номер телефона"
                name="phone"
                value={data.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__item}>
              <button onClick={handleSubmit}>Оставить заявку</button>
            </div>
          </div>
        </div>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default CarCalculator;

"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Slider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import styles from "./carCalculator.module.scss";
import CurrencyInput from "react-currency-input-field";
import { toast } from "react-toastify";

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
    initial_fee: car?.price && car.price * 0.3,
    months: 3,
    loanAmount: 0,
    percent: 25,
    monthlyPayment: 0,
    full_name: "",
    inn: "",
    phone: "",
  });
  const [isOk, setIsOk] = useState(true);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.price || !data.initial_fee) {
      return;
    }

    // if(data.initial_fee==null || )
    if (!isOk) {
      toast.error(
        "Первоначальный взнос должен быть минимально 30% от стоимости авто",
        {
          autoClose: 2000,
          theme: "colored",
        }
      );
      return;
    }
    calculateLoanAndPayment();
    toast.success("Заявка успешно отправлена", {
      autoClose: 1000,
      theme: "colored",
    });
  };

  useEffect(() => {
    calculateLoanAndPayment();
  }, [data.initial_fee, data.months, data.percent]);
  useEffect(() => {
    if (data.initial_fee < data.price * 0.3 || data.initial_fee == null) {
      console.log(data.initial_fee);
      setIsOk(false);
    } else {
      setIsOk(true);
    }
  }, [data.initial_fee]);
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
        <form className={styles.calculator__form} onSubmit={handleSubmit}>
          <div className={styles.form__left}>
            <div className={styles.form__item}>
              <h3>Стоимость авто</h3>
              <CurrencyInput
                id="price"
                type="text"
                suffix=" сом"
                placeholder="Введите стоимость авто"
                name="price"
                step={100}
                value={data.price}
                disabled
                required
                onValueChange={(value) => setData({ ...data, price: value })}
              />
              <p>Максимальная сумма 5 000 000 сом</p>
            </div>
            <div className={styles.form__item}>
              <h3>Первоначальный взнос</h3>
              <CurrencyInput
                className={isOk ? styles.input__green : styles.input__red}
                id="initial_fee"
                placeholder="Введите сумму взноса"
                suffix=" сом"
                name="initial_fee"
                value={data.initial_fee}
                required
                allowNegativeValue={false}
                onValueChange={(value) =>
                  setData({ ...data, initial_fee: value })
                }
              />
              <p>
                Минимально 30% от стоимости
              </p>
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
                  required
                  name="months"
                  value={data.months}
                  onChange={handleChange}
                />
                <p className={styles.slider__advice}>Двигайте ползунок</p>
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
                required
                value={data.full_name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__item}>
              <h3>ИНН</h3>
              <input
                type="text"
                placeholder="Введите ваш ИНН"
                name="inn"
                required
                value={data.inn}
                onChange={handleChange}
              />
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
                required
                value={data.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__item}>
              <button type="submit">Оставить заявку</button>
            </div>
          </div>
        </form>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default CarCalculator;

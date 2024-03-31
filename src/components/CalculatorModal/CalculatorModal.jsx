"use client";
import React, { useState } from "react";
import styles from "./calculatorModal.module.scss";

import Button from "@/components/UI/Button/Button";
import CarCalculator from "@/components/CarCalculator/CarCalculator";

const CalculatorModal = ({ car }) => {
  const [open, setOpen] = useState(false);

  const handleCalculatorOpen = () => {
    setOpen(true);
  };

  const handleCalculatorClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.item__bottom}>
      <Button
        onClick={handleCalculatorOpen}
        style={{ width: "100%", marginTop: "0" }}
      >
        Оставить заявку
      </Button>
      {open && (
        <CarCalculator onClose={handleCalculatorClose} open={open} car={car} />
      )}
    </div>
  );
};

export default CalculatorModal;

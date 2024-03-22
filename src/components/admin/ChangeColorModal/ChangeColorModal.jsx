import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Slider } from "@mui/material";
import styles from "./changeColorModal.module.scss";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useUpdateColorMutation } from "@/libs/store/reducers/colorApi";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({}));
const PrettoSlider = styled(Slider)({
  color: "#52af77",
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
    backgroundColor: "#52af77",
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

const ChangeColorModal = ({ open, onClose, id }) => {
  const [updateColor, { isLoading, isSuccess, isError }] =
    useUpdateColorMutation();
  const [data, setData] = useState({
    title: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    updateColor({ id: id, body: data });
  };
  useEffect(() => {
    if (isSuccess) onClose();
  }, [isSuccess]);
  return (
    <BootstrapDialog
      open={open}
      onClose={onClose}
      sx={{ "& .MuiDialog-paper": { maxWidth: "800px" } }}
    >
      <DialogTitle>
        <span className={styles.modal__title}>Изменить цвет</span>
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
          <div className={styles.form__item}>
            <h3>Цвет</h3>
            <input
              type="text"
              placeholder="Введите новый цвет"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          {isError && <p className="error">Не удалось отправить данные</p>}
          {isLoading && <p className="loading">Загрузка...</p>}
          <div className={styles.form__item}>
            <button onClick={handleSubmit}>Сохранить</button>
          </div>
        </div>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default ChangeColorModal;

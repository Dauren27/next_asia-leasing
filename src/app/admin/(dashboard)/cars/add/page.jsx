"use client";
import React, { useState } from "react";
import styles from "./carAdd.module.scss";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import { useCreateCarMutation } from "@/libs/store/reducers/carsApi";
import {
  useDeleteColorMutation,
  useGetColorsQuery,
} from "@/libs/store/reducers/colorApi";
import FileUpload from "@/components/admin/FileUpload/FileUpload";
import ChangeColorModal from "@/components/admin/ChangeColorModal/ChangeColorModal";
import AddColorModal from "@/components/admin/AddColorModal/AddColorModal";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { MdDelete } from "react-icons/md";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogActions from "@mui/material/DialogActions";
// import Button from "@mui/material/Button";

const CarAdd = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    born: "",
    volume: "",
    gear: "",
    engine: "",
    transmission: "",
    color_id: "",
    price: "",
    period: "",
    category_id: "",
  });
  const [createCar, { isLoading, isSuccess, isError }] = useCreateCarMutation();
  const { data: colors } = useGetColorsQuery();

  //---DeleteColor---
  // const [deleteColor, { isSuccess: isDeleteColorSuccess }] =
  //   useDeleteColorMutation();
  // const [openDialog, setOpenDialog] = useState(false);

  // const handleDeleteClick = () => {
  //   setOpenDialog(true);
  // };

  // const handleDeleteConfirm = ({ id }) => {
  //   setOpenDialog(false);
  //   deleteColor({ id: id });
  // };

  // const handleDeleteCancel = () => {
  //   setOpenDialog(false);
  // };
  //---DeleteColor---
  const years = Array.from({ length: 15 }, (_, index) => 2010 + index);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const convertedString = formData.volume.toString().replace(/(\d+),(\d+)/g, "$1.$2");
    // const convertedNumber = parseFloat(convertedString);
    // setFormData({ ...formData, volume: convertedNumber });
    createCar(formData);
  };
  useEffect(() => {
    if (isSuccess) {
      router.push("/admin/cars/user");
    }
  }, [isSuccess]);

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const handleUpdateModalOpen = () => {
    setOpenUpdateModal(true);
  };

  const handleUpdateModalClose = () => {
    setOpenUpdateModal(false);
  };
  return (
    <div className={styles.main}>
      <div className={styles.main__headers}>
        <Link href="/admin/cars/user">
          <button>Назад</button>
        </Link>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Добавить автомобиль</h2>

        <div className={styles.form__inputs}>
          <div className={styles.form__left}>
            <div className={styles.form__item}>
              <h3>Название автомобиля</h3>
              <input
                type="text"
                placeholder="Введите название автомобиля"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.form__item}>
              <h3>Категория</h3>
              <Select
                value={formData.category_id}
                onChange={handleChange}
                name="category_id"
                required
                className={styles.filter__select}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value={1}>Новый</MenuItem>
                <MenuItem value={2}>С пробегом</MenuItem>
              </Select>
            </div>
            <div className={styles.form__item}>
              <h3>Год выпуска</h3>
              <Select
                value={formData.born}
                onChange={handleChange}
                name="born"
                required
                className={styles.filter__select}
                MenuProps={{ disableScrollLock: true }}
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year.toString()}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className={styles.form__item}>
              <h3>Срок финансирования</h3>
              <Select
                value={formData.period}
                onChange={handleChange}
                name="period"
                required
                className={styles.filter__select}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="3 месяца">3 месяца</MenuItem>
                <MenuItem value="6 месяцов">6 месяцов</MenuItem>
              </Select>
              {/* <input
                type="text"
                placeholder="Введите срок финансирования"
                name="period"
                value={formData.period}
                onChange={handleChange}
                required
              /> */}
            </div>
          </div>
          <div className={styles.form__middle}>
            <div className={styles.form__item}>
              <h3>Привод</h3>
              <Select
                value={formData.gear}
                onChange={handleChange}
                name="gear"
                required
                className={styles.filter__select}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="Полный">Полный</MenuItem>
                <MenuItem value="Задний">Задний</MenuItem>
                <MenuItem value="Передний">Передний</MenuItem>
              </Select>
            </div>
            <div className={styles.form__item}>
              <h3>Двигатель</h3>
              <Select
                value={formData.engine}
                onChange={handleChange}
                name="engine"
                required
                className={styles.filter__select}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="Бензиновый">Бензиновый</MenuItem>
                <MenuItem value="Дизельный">Дизельный</MenuItem>
                <MenuItem value="Газовый">Газовый</MenuItem>
                <MenuItem value="Гибридный">Гибридный</MenuItem>
                <MenuItem value="Электрический">Электрический</MenuItem>
              </Select>
            </div>
            <div className={styles.form__item}>
              <h3>Объем</h3>
              <input
                type="number"
                placeholder="Введите объем автомобиля"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.form__right}>
            <div className={styles.form__item}>
              <h3>Коробка передач</h3>
              <Select
                value={formData.transmission}
                onChange={handleChange}
                required
                name="transmission"
                className={styles.filter__select}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="Автомат">Автомат</MenuItem>
                <MenuItem value="Механика">Механика</MenuItem>
                <MenuItem value="Робот">Робот</MenuItem>
                <MenuItem value="Вариатор">Вариатор</MenuItem>
              </Select>
            </div>
            <div className={styles.form__item}>
              <h3>Цвет</h3>
              <div className={styles.item__flex}>
                <Select
                  value={formData.color_id}
                  onChange={handleChange}
                  required
                  name="color_id"
                  className={styles.filter__select}
                  MenuProps={{ disableScrollLock: true }}
                >
                  {colors &&
                    colors.map((item) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                </Select>
                <BsPlusLg
                  className={styles.item__flex__svg}
                  onClick={handleModalOpen}
                />
                {formData.color_id && (
                  <RiPencilFill
                    className={styles.item__flex__svg}
                    onClick={handleUpdateModalOpen}
                  />
                )}
                {/* {formData.color_id && (
                  <MdDelete
                    className={styles.item__flex__svg}
                    onClick={handleDeleteClick}
                  />
                )} */}
                {open && (
                  <AddColorModal onClose={handleModalClose} open={open} />
                )}
                {openUpdateModal && (
                  <ChangeColorModal
                    onClose={handleUpdateModalClose}
                    open={openUpdateModal}
                    id={formData.color_id}
                  />
                )}
              </div>
              {/* <Dialog open={openDialog} onClose={handleDeleteCancel}>
                <DialogTitle>Вы уверены что хотите удалить?</DialogTitle>
                <DialogActions>
                  <Button onClick={handleDeleteCancel}>Отмена</Button>
                  <Button
                    onClick={() => handleDeleteConfirm({ id: formData?.color_id })}
                    autoFocus
                  >
                    Удалить
                  </Button>
                </DialogActions>
              </Dialog> */}
            </div>
            <div className={styles.form__item}>
              <h3>Цена</h3>
              <input
                type="text"
                placeholder="Введите цену автомобиля"
                name="price"
                required
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.form__img}>
          <h3>Фото автомобиля</h3>
          {/* <DropFileInput /> */}
          <FileUpload />
        </div>
        {isError && <p className="error">Не удалось отправить данные</p>}
        {isLoading && <p className="loading">Загрузка...</p>}
        <button>Отправить</button>
      </form>
    </div>
  );
};

export default CarAdd;

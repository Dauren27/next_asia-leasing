"use client";
import React, { useState, useEffect } from "react";
import styles from "./carUpdate.module.scss";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { BsPlusLg } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import {
  useGetCarByIdQuery,
  useUpdateCarMutation,
} from "@/libs/store/reducers/carsApi";
import AddColorModal from "@/components/admin/AddColorModal/AddColorModal";
import ChangeColorModal from "@/components/admin/ChangeColorModal/ChangeColorModal";
import { useGetColorsQuery } from "@/libs/store/reducers/colorApi";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const CarUpdate = ({ params }) => {
  const router = useRouter();
  const { data: cars, isSuccess: isGetSuccess } = useGetCarByIdQuery({
    id: params.id,
  });
  const {
    data: colors,
    isError: isGetError,
    isLoading: isGetLoading,
  } = useGetColorsQuery();
  const [updateCar, { isLoading, isSuccess, isError }] = useUpdateCarMutation();
  const [formData, setFormData] = useState({
    title: cars && cars.title,
    born: cars && cars.born,
    volume: cars && cars.volume,
    gear: cars && cars.gear ? cars.gear : "",
    engine: cars && cars.engine ? cars.engine : "",
    transmission: cars && cars.transmission ? cars.transmission : "",
    color_id: cars && cars.color?.id ? cars.color.id : "",
    price: cars && cars.price,
    period: cars && cars.period,
    category_id: cars && cars.category?.id ? cars.category.id : "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const years = Array.from({ length: 15 }, (_, index) => 2010 + index);

  const handleSubmit = (event) => {
    event.preventDefault();
    cars && updateCar({ id: cars.id, body: formData });
  };
  useEffect(() => {
    if (isSuccess) {
      router.push("/admin/cars");
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
  useEffect(() => {
    cars &&
      setFormData({
        ...formData,
        title: cars && cars.title,
        born: cars && cars.born,
        volume: cars.volume,
        gear: cars && cars.gear,
        engine: cars && cars.engine,
        transmission: cars && cars.transmission,
        color_id: cars && cars.color.id,
        price: cars && cars.price,
        period: cars && cars.period,
        category_id: cars && cars.category.id,
      });
  }, [cars]);
  return (
    <div className={styles.main}>
      <div className={styles.main__headers}>
        <Link href="/admin/cars">
          <button>Назад</button>
        </Link>
      </div>
      {cars && isGetSuccess && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Изменить автомобиль</h2>
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
              {cars.born && (
                <div className={styles.form__item}>
                  <h3>Год выпуска</h3>
                  <Select
                    value={cars.born}
                    onChange={handleChange}
                    name="born"
                    required
                    className={styles.filter__select}
                    MenuProps={{ disableScrollLock: true }}
                  >
                    {years.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              )}
              <div className={styles.form__item}>
                <h3>Срок финансирования</h3>
                <input
                  type="text"
                  placeholder="Введите срок финансирования"
                  name="period"
                  value={formData.period}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.form__middle}>
              {cars.gear && (
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
              )}
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
                {colors && (
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
                    <RiPencilFill
                      className={styles.item__flex__svg}
                      onClick={handleUpdateModalOpen}
                    />
                  </div>
                )}
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
          {isError && <p className="error">Не удалось отправить данные</p>}
          {isLoading && <p className="loading">Загрузка...</p>}
          <button>Отправить</button>
        </form>
      )}
      {isGetLoading && <p className="loading">Идёт загрузка, подождите</p>}
      {isGetError && <p className="error">Произошла ошибка при загрузке</p>}

      {open && <AddColorModal onClose={handleModalClose} open={open} />}
      {openUpdateModal && (
        <ChangeColorModal
          onClose={handleUpdateModalClose}
          open={openUpdateModal}
        />
      )}
    </div>
  );
};

export default CarUpdate;

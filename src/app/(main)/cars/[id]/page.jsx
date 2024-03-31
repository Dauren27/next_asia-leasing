import React from "react";
import styles from "./page.module.scss";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import SwiperSlider from "@/components/SwiperSlider/SwiperSlider";
import CalculatorModal from "@/components/CalculatorModal/CalculatorModal";

// const car = {
//   id: 1,
//   title: "Mercedes-Benz CLS 250",
//   born: "2022",
//   volume: "2.5",
//   gear: "Полный",
//   engine: "Бензиновый",
//   transmission: "Автомат",
//   color: {
//     id: 1,
//     title: "Синий",
//   },
//   price: "40000",
//   period: "3 месяца",
//   category: {
//     id: 0,
//     title: "С пробегом",
//   },
//   discount_price: "",
//   company: {
//     id: 0,
//     name: "Mercedes Центр",
//   },
// };
async function getCarById({ id }) {
  try {
    const res = await fetch(`https://fastapi.pp.ua/api/v1/cars/obj/${id}`, {
      next: { revalidate: 300 },
    });
    return res.json();
  } catch (e) {
    throw new Error("Произошла ошибка при получении данных");
  }
}

export default async function CarById({ params, searchParams }) {
  const car = await getCarById({ id: searchParams.car_id });
  return (
    <div className={styles.main}>
      <Breadcrumbs
        links={[
          {
            path: `/cars/category/${car?.category?.id == 1 ? "new" : "used"}`,
            name:
              car?.category?.id == 1
                ? "Новые автомобили"
                : "Автомобили с пробегом",
          },
          { path: `/cars/${car?.id}`, name: car?.title },
        ]}
      />
      <div className={styles.car__content}>
        <div className={styles.car__headers}>
          <h2>
            {car?.title} {car?.born} г.
          </h2>
        </div>
        <div className={styles.car__info}>
          <SwiperSlider />
          <div className={styles.car__description}>
            <h3>Информация о автомобиле</h3>
            <p>
              Автомобиль: <span>{car?.title}</span>
            </p>
            <hr />
            <p>
              Категория: <span>{car?.category?.title}</span>
            </p>
            <hr />
            <p>
              Год выпуска: <span>{car?.born}</span>
            </p>
            <hr />
            <p>
              Привод: <span>{car?.gear}</span>
            </p>
            <hr />
            <p>
              Двигатель: <span>{car?.engine}</span>
            </p>
            <hr />
            <p>
              Объём: <span>{car?.volume} л.</span>
            </p>
            <hr />
            <p>
              АКПП: <span>{car?.transmission}</span>
            </p>
            <hr />
            <p>
              Цвет: <span>{car?.color?.title}</span>
            </p>
            <hr />
            <p>
              Срок финансирования: <span>{car?.period}</span>
            </p>
            <hr />
            <CalculatorModal car={car} />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default CarById;

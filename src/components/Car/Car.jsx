"use client";
import React, { useState } from "react";
import styles from "./car.module.scss";
import car1 from "../../assets/images/back-3.png";
import car2 from "../../assets/images/car3.png";
import car3 from "../../assets/images/sonata.jpg";
import car4 from "../../assets/images/catalog1.png";
import car5 from "../../assets/images/catalog2.png";
import Button from "../UI/Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import CarCalculator from "../CarCalculator/CarCalculator";
import Image from "next/image";

const photos = [car1, car2, car3, car4, car5];
const photos2 = [
  {
    image: car1,
  },
  {
    image: car2,
  },
  {
    image: car3,
  },
  {
    image: car4,
  },
  {
    image: car5,
  },
];
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowBackIos />
    </div>
  );
};

const Car = ({ car }) => {
  const [open, setOpen] = useState(false);

  const handleCalculatorOpen = () => {
    setOpen(true);
  };

  const handleCalculatorClose = () => {
    setOpen(false);
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={styles.catalogCars__item}>
      <div className={styles.item__left}>
        <Slider {...sliderSettings}>
          {photos2.map((photo) => (
            <Image
              src={photo.image}
              alt={`Car`}
              key={photo.image}
              width={0}
              height={0}
            />
          ))}
        </Slider>
      </div>
      <div className={styles.item__right}>
        <h3>{car?.title}</h3>

        <div className={styles.item__description}>
          <div className={styles.item__description__left}>
            <p>
              Год выпуска: <span>{car?.born}</span>
            </p>
            <hr />

            <p>
              Привод: <span>{car?.gear}</span>
            </p>
            <hr />
            <p>
              Двигатель:{" "}
              <span>
                {car?.engine}, {car?.volume} л.
              </span>
            </p>
            <hr />
            <p>
              КПП: <span>{car?.transmission}</span>
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
          </div>
          <hr />
        </div>
        <div className={styles.item__price}>Цена: {car?.price} сом</div>

        <div className={styles.item__bottom}>
          <Button
            onClick={handleCalculatorOpen}
            style={{ width: "100%", marginTop: "0" }}
          >
            Оставить заявку
          </Button>
        </div>
      </div>
      {open && (
        <CarCalculator onClose={handleCalculatorClose} open={open} car={car} />
      )}
    </div>
  );
};

export default Car;

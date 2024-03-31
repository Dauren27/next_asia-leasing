"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Car from "@/components/Car/Car";
import { API_URL } from "@/libs/api";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export default function UsedAuto() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cars, setCars] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    transmission: "",
    gear: "",
    engine: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOptions({
      ...filterOptions,
      [event.target.name]: event.target.value,
    });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const clearFilters = () => {
    setFilterOptions({
      transmission: "",
      gear: "",
      engine: "",
    });
    setSearchTerm("");
    setFilteredCars(cars);
  };

  const filterAndShowCars = () => {
    const filteredData = cars.filter(
      (car) =>
        car.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        filterCars(car)
    );
    setFilteredCars(filteredData);
  };

  const filterCars = (car) => {
    const transmissionMatches =
      !filterOptions.transmission ||
      car.transmission === filterOptions.transmission;
    const gearMatches = !filterOptions.gear || car.gear === filterOptions.gear;
    const engineMatches =
      !filterOptions.engine || car.engine === filterOptions.engine;
    return transmissionMatches && gearMatches && engineMatches;
  };
  async function getUsedCars() {
    setIsLoading(true);

    const response = await fetch(`${API_URL}/api/v1/cars/sort/2`);

    if (!response.ok) {
      throw new Error("Не удалось получить данные");
      setIsError(true);
    }
    const data = await response.json();
    setIsLoading(false);
    setIsSuccess(true);
    setIsError(false);
    setCars(data);
    setFilteredCars(data);
  }
  useEffect(() => {
    getUsedCars();
  }, []);

  return (
    <div className={styles.catalogCars}>
      <Breadcrumbs
        links={[{ path: `/cars/category/used`, name: "Автомобили с пробегом" }]}
      />
      <div className={styles.catalogCars__header}>
        <div className={styles.catalogCars__headers}>
          <h2>Автомобили с пробегом в наличии</h2>
        </div>
        <div
          className={`${styles.toggleFilters} ${showFilters ? "show" : "hide"}`}
        >
          <p onClick={toggleFilters}>
            {showFilters ? "Скрыть фильтр" : "Показать фильтр"}
          </p>
        </div>

        <div
          className={`${styles.filter} ${
            showFilters ? styles.show : styles.hide
          }`}
        >
          <div className={styles.catalogCars__controls}>
            <TextField
              type="text"
              label="Введите название автомобиля"
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.controls__search}
            />
          </div>
          <div className={styles.catalogCars__filters}>
            <FormControl className={styles.controls__filter}>
              <InputLabel>Двигатель</InputLabel>
              <Select
                value={filterOptions.engine}
                onChange={handleFilterChange}
                name="engine"
                className={styles.filter__select}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="">Любой</MenuItem>
                <MenuItem value="Бензиновый">Бензиновый</MenuItem>
                <MenuItem value="Дизельный">Дизельный</MenuItem>
                <MenuItem value="Газовый">Газовый</MenuItem>
                <MenuItem value="Гибридный">Гибридный</MenuItem>
                <MenuItem value="Электрический">Электрический</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={styles.controls__filter}>
              <InputLabel>Коробка передач</InputLabel>
              <Select
                value={filterOptions.transmission}
                onChange={handleFilterChange}
                name="transmission"
                className={styles.filter__select}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="">Любая</MenuItem>
                <MenuItem value="Автомат">Автомат</MenuItem>
                <MenuItem value="Механика">Механика</MenuItem>
                <MenuItem value="Робот">Робот</MenuItem>
                <MenuItem value="Вариатор">Вариатор</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={styles.controls__filter}>
              <InputLabel>Привод</InputLabel>
              <Select
                value={filterOptions.gear}
                onChange={handleFilterChange}
                name="gear"
                className={styles.filter__select}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="">Любой</MenuItem>
                <MenuItem value="Полный">Полный</MenuItem>
                <MenuItem value="Задний">Задний</MenuItem>
                <MenuItem value="Передний">Передний</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={styles.controls__filter}>
              <button onClick={clearFilters} className={styles.clean__button}>
                Очистить фильтр
              </button>
            </FormControl>
            <FormControl className={styles.controls__filter}>
              <button
                onClick={filterAndShowCars}
                className={styles.show__button}
              >
                Показать объявления
              </button>
            </FormControl>
          </div>
        </div>
      </div>
      <div className={styles.catalogCars__items}>
        {filteredCars &&
          filteredCars.map((car) => <Car car={car} key={car.id} />)}
        {isSuccess && filteredCars.length == 0 && (
          <h2 style={{ marginTop: "30px" }}>
            По такому запросу объявления еще не разместили
          </h2>
        )}
        {isLoading && <h3 className="loading">Загрузка...</h3>}
        {isError && <h3 className="error">Не удалось загрузить данные</h3>}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import styles from "./cars.module.scss";
import Car from "../Car/Car";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useGetCarsQuery } from "@/libs/store/reducers/carsApi";
import Link from "next/link";

const Cars = () => {
  const { data, isLoading, isError } = useGetCarsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    bornMin: "",
    bornMax: "",
    transmission: "",
    volumeMin: "",
    volumeMax: "",
    gear: "",
    engine: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  useEffect(() => {
    if (data) {
      setFilteredCars(data);
    }
  }, [data]);

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
      bornMin: "",
      bornMax: "",
      transmission: "",
      volumeMin: "",
      volumeMax: "",
      gear: "",
      engine: "",
    });
    setSearchTerm("");
    setFilteredCars(data);
  };

  const filterAndShowCars = () => {
    const filteredData = data.filter(
      (car) =>
        car.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        filterCars(car)
    );
    setFilteredCars(filteredData);
  };
  const filterCars = (car) => {
    const bornInRange =
      (!filterOptions.bornMin ||
        car.born >= parseFloat(filterOptions.bornMin)) &&
      (!filterOptions.bornMax || car.born <= parseFloat(filterOptions.bornMax));
    const volumeInRange =
      (!filterOptions.volumeMin ||
        car.volume >= parseFloat(filterOptions.volumeMin)) &&
      (!filterOptions.volumeMax ||
        car.volume <= parseFloat(filterOptions.volumeMax));
    const transmissionMatches =
      !filterOptions.transmission ||
      car.transmission === filterOptions.transmission;
    const gearMatches = !filterOptions.gear || car.gear === filterOptions.gear;
    const engineMatches =
      !filterOptions.engine || car.engine === filterOptions.engine;
    return (
      bornInRange &&
      volumeInRange &&
      transmissionMatches &&
      gearMatches &&
      engineMatches
    );
  };

  return (
    <div className={`${styles.catalogCars}`}>
      <div className={styles.catalogCars__header}>
        <div className={styles.catalogCars__headers}>
          <h2>Список всех автомобилей</h2>
          <Link href="/admin/cars/add">
            <button>Добавить</button>
          </Link>
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
              <div className={styles.filter__inputs}>
                <input
                  type="number"
                  name="bornMin"
                  value={filterOptions.bornMin}
                  onChange={handleFilterChange}
                  placeholder="Год от"
                  className={styles.filter__input}
                />
                <input
                  type="number"
                  name="bornMax"
                  value={filterOptions.bornMax}
                  onChange={handleFilterChange}
                  placeholder="до"
                  className={styles.filter__input}
                />
              </div>
            </FormControl>
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
              <div className={styles.filter__inputs}>
                <input
                  type="number"
                  name="volumeMin"
                  value={filterOptions.volumeMin}
                  onChange={handleFilterChange}
                  placeholder="Объем от, л "
                  className={styles.filter__input}
                />
                <input
                  type="number"
                  name="volumeMax"
                  value={filterOptions.volumeMax}
                  onChange={handleFilterChange}
                  placeholder="до "
                  className={styles.filter__input}
                />
              </div>
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
        {!isLoading && filteredCars.length === 0 && (
          <h2 style={{ marginTop: "30px" }}>
            По такому запросу объявления еще не разместили
          </h2>
        )}
        {isLoading && (
          <h3 className={styles.catalogCars__loading}>Загрузка...</h3>
        )}
      </div>
    </div>
  );
};

export default Cars;

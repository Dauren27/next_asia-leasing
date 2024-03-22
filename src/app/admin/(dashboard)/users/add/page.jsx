"use client";
import React, { useState, useEffect } from "react";
import styles from "./userAdd.module.scss";
import { useRegistrationMutation } from "@/libs/store/reducers/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UsersAdd = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    password_hash: "",
  });

  const [registration, { isLoading, isSuccess, isError }] =
    useRegistrationMutation();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registration(formData);
  };
  useEffect(() => {
    if (isSuccess) {
      router.push("/admin/users");
    }
  }, [isSuccess]);
  return (
    <div className={styles.main}>
      <div className={styles.main__headers}>
        <Link href="/admin/users">
          <button>Назад</button>
        </Link>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Добавить пользователя</h2>
        <div className={styles.form__inputs}>
          <div className={styles.form__item}>
            <h3>Имя пользователя</h3>
            <input
              type="text"
              placeholder="Введите имя пользователя"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form__item}>
            <h3>Пароль</h3>
            <input
              type="text"
              placeholder="Введите пароль для пользователя"
              name="password_hash"
              value={formData.password_hash}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button>Отправить</button>
        {isLoading && <p className="loading">Загрузка...</p>}
        {isError && <p className="error">Произошла ошибка при загрузке</p>}
      </form>
    </div>
  );
};

export default UsersAdd;

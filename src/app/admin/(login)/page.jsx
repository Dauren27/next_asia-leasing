"use client";
import React, { useState, useEffect } from "react";
import cl from "./login.module.scss";
import { useLoginMutation } from "@/libs/store/reducers/authApi";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
  const session=useSession()
  const router = useRouter();
  const [login, { isError, error, isSuccess, isLoading, data }] =
    useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async () => {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    await login(formData);
  };
  useEffect(() => {
    if (session.status==="authenticated") {
      router.push("/admin/cars");
    }
  }, [session]);
  useEffect(() => {
    if (isSuccess) {
      signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      }).then(() => router.push("/admin/cars"));
    }
  }, [isSuccess]);
  return (
    <div className={cl.login}>
      <div className={cl.login__form}>
        <h2>Войти</h2>
        <input
          type="text"
          placeholder="Логин"
          autoComplete="new-password"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {isError && <p className={cl.error}>Не удалось авторизоваться</p>}
        {isLoading && <p className={cl.loading}>Загрузка...</p>}
        {isSuccess && <p className={cl.success}>Вы успешно авторизовались</p>}
        <button className="btn" onClick={loginHandler}>
          Войти
        </button>
      </div>
    </div>
  );
}

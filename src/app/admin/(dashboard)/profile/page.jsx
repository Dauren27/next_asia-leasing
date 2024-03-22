"use client";
import React from "react";
import styles from "./profile.module.scss";
import { useRouter } from "next/navigation";
import { useGetUserInfoQuery } from "@/libs/store/reducers/authApi";
import { signOut } from "next-auth/react";

const Profile = () => {
  const { data: user } = useGetUserInfoQuery();
  const router = useRouter();
  const onLogoutHandle = () => {
    signOut();
  };
  return (
    <div className={styles.profile}>
      <div className={styles.profile__content}>
        <h2>Информация о пользователе</h2>
        <div className={styles.profile__info}>
          <div className={styles.info__item}>
            <h3>Имя пользователя {user && user?.name}</h3>
            
          </div>
          <div className={styles.info__item}>
            <h3>Роль: {user && user?.role}</h3>
           
          </div>
        </div>
        <button onClick={onLogoutHandle}>Выйти</button>
      </div>
    </div>
  );
};

export default Profile;

"use client";
import React, { useState, useEffect } from "react";
import styles from "./users.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import EditUserModal from "@/components/admin/EditUserModal/EditUserModal";
import { useGetAllUsersQuery } from "@/libs/store/reducers/authApi";
import Link from "next/link";

const Users = () => {
  const { data: users, isLoading, isError } = useGetAllUsersQuery();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = ({ id }) => {
    setOpenDialog(false);
    // deleteCar({ id: id });
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.main}>
      <div className={styles.users__content}>
        <div className={styles.users__headers}>
          <h2>Список пользователей</h2>
          <Link href="/admin/users/add">
            <button>Добавить</button>
          </Link>
        </div>
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Пользователь</TableCell>
                <TableCell align="left">Роль</TableCell>
                <TableCell align="left">Пароль</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((user, index) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={user.name + index}
                  >
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell align="left">{user.role}</TableCell>
                    <TableCell align="left">{user.password}</TableCell>
                    <TableCell align="left">
                      <button
                        className={`${styles.users__button} ${styles.button__edit}`}
                        onClick={handleModalOpen}
                      >
                        Изменить
                      </button>
                    </TableCell>
                    <TableCell align="left">
                      <button
                        className={`${styles.users__button} ${styles.button__delete}`}
                        onClick={handleDeleteClick}
                      >
                        Удалить
                      </button>
                    </TableCell>
                    <Dialog
                      open={openDialog}
                      onClose={handleDeleteCancel}
                      disableScrollLock
                    >
                      <DialogTitle>Вы уверены что хотите удалить?</DialogTitle>
                      <DialogActions>
                        <Button onClick={handleDeleteCancel}>Отмена</Button>
                        <Button
                          onClick={() => handleDeleteConfirm({ id: user.id })}
                          autoFocus
                        >
                          Удалить
                        </Button>
                      </DialogActions>
                    </Dialog>
                    {open && (
                      <EditUserModal
                        onClose={handleModalClose}
                        open={open}
                        name={user.name}
                        password={user.password}
                      />
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {isLoading && <p className="loading">Загрузка...</p>}
        {isError && <p className="error">Произошла ошибка при загрузке</p>}
        {/* <h3>Список пользователй пока не готов</h3> */}
      </div>
    </div>
  );
};

export default Users;

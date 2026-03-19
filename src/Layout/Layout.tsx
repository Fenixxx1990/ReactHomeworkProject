import styles from "./Layout.module.css";
import { useContext } from "react";
import { UserContext } from "../context/user.context";
import type { User } from "../context/User.Context.Interface";
import { NavLink, Outlet } from "react-router-dom";
import cn from "classnames";

export default function Layout() {
  const { userData, setUserData } = useContext(UserContext);

  const logout = () => {
    let users: User[] = [];
    try {
      const savedUsers = localStorage.getItem("users");
      if (savedUsers) {
        users = JSON.parse(savedUsers);
      }
    } catch (error) {
      console.error("Ошибка чтения из localStorage:", error);
    }

    // Устанавливаем isLogined: false для всех
    const updatedUsers = users.map((user) => ({
      ...user,
      isLogined: false,
    }));

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUserData(null);
  };

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    logout();
  };

  let loginState;
  if (!userData?.isLogined) {
    loginState = "";
    loginState = (
      <li className={styles["icon-li"]}>
        <NavLink
          className={({ isActive }) =>
            cn({
              [styles.active]: isActive,
            })
          }
          to={"/login"}
        >
          Войти
        </NavLink>
        <img
          className={styles["login-icon"]}
          src="/login-icon.svg"
          alt="Иконка входа"
        />
      </li>
    );
  } else {
    loginState = (
      <>
        <li className={styles["icon-li"]}>
          <a href="#">{userData.name}</a>
          <img
            className={styles["login-icon"]}
            src="/user-icon.png"
            alt="Иконка пользователя"
          />
        </li>
        <li>
          <a href="#" onClick={onClick}>
            Выйти
          </a>
        </li>
      </>
    );
  }
  return (
    <div>
      <div className={styles["layout"]}>
        <img className={styles["logo"]} src="/logo.svg" alt="Логотип" />
        <ul className={styles["menu"]}>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn({
                  [styles.active]: isActive,
                })
              }
              to={"/"}
            >
              Поиск фильмов
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn({
                  [styles.active]: isActive,
                })
              }
              to={"/favorites"}
            >
              Мои фильмы
            </NavLink>
          </li>
          {loginState}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

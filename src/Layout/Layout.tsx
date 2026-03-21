import styles from "./Layout.module.css";
import { NavLink, Outlet } from "react-router-dom";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { userActions } from "../store/user.slice";
import { searchActions } from "../store/search.slice";

export default function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLogined, name } = useSelector((s: RootState) => s.user);
  const favorites = useSelector((s: RootState) => s.favorites);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(userActions.logout());
    dispatch(searchActions.clearItems());
    navigate("/auth/login");
  };

  let loginState;
  if (!isLogined) {
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
          <a href="#">{name}</a>
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
          <li className={styles.myfilm}>
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
            <div className={styles.counter}>
              {favorites[name ?? ""]?.items.length ?? 0}
            </div>
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

import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles["layout"]}>
      <img className={styles["logo"]} src="/logo.svg" alt="Логотип" />
      <ul className={styles["menu"]}>
        <li>
          <a href="#">Поиск фильмов</a>
        </li>
        <li>
          <a href="#">Мои фильмы</a>
        </li>
        <li>
          <a href="#">Войти</a>
          <img
            className={styles["login-icon"]}
            src="/login-icon.svg"
            alt="Иконка входа"
          />
        </li>
      </ul>
    </div>
  );
}

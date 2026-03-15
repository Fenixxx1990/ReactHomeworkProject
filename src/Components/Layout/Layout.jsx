import styles from "./Layout.module.css";

export default function Layout({ userInfo, onLogout }) {
  const onClick = (e) => {
    e.preventDefault();
    onLogout();
  };

  let loginState;
  if (!userInfo?.isLogined) {
    loginState = "";
    loginState = (
      <li className={styles["icon-li"]}>
        <a href="#">Войти</a>
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
          <a href="#">{userInfo.name}</a>
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
    <div className={styles["layout"]}>
      <img className={styles["logo"]} src="/logo.svg" alt="Логотип" />
      <ul className={styles["menu"]}>
        <li>
          <a href="#">Поиск фильмов</a>
        </li>
        <li>
          <a href="#">Мои фильмы</a>
        </li>
        {loginState}
      </ul>
    </div>
  );
}

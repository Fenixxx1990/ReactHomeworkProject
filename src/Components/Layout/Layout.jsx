import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <img className="logo" src="/logo.svg" alt="Логотип" />
      <ul className="menu">
        <li>
          <a href="#">Поиск фильмов</a>
        </li>
        <li>
          <a href="#">Мои фильмы</a>
        </li>
        <li>
          <a href="#">Войти</a>
          <img
            className="login-icon"
            src="/login-icon.svg"
            alt="Иконка входа"
          />
        </li>
      </ul>
    </div>
  );
}

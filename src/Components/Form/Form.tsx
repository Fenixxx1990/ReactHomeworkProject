import styles from "./Form.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState, type JSX } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import type {
  User,
  UserContextType,
} from "../../context/User.Context.Interface";
import { useNavigate } from "react-router-dom";

export default function Form(): JSX.Element {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext) as UserContextType;
  const [value, setValue] = useState("");

  const login = (name: string) => {
    let users: User[] = [];
    try {
      const savedUsers = localStorage.getItem("users");
      if (savedUsers) {
        users = JSON.parse(savedUsers);
      }
    } catch (error) {
      console.error("Ошибка чтения из localStorage:", error);
    }

    // Сначала устанавливаем isLogined: false для всех существующих пользователей
    const usersWithLoggedOut = users.map((user) => ({
      ...user,
      isLogined: false,
    }));

    const userIndex = usersWithLoggedOut.findIndex(
      (user) => user.name === name,
    );

    let updatedUsers;

    if (userIndex !== -1) {
      // Пользователь найден — обновляем isLogined на true
      updatedUsers = usersWithLoggedOut.map((user, index) =>
        index === userIndex ? { ...user, isLogined: true } : user,
      );
    } else {
      // Пользователя нет — добавляем нового с isLogined: true
      updatedUsers = [...usersWithLoggedOut, { name, isLogined: true }];
    }

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    const currentUser = updatedUsers.find((user) => user.isLogined);
    setUserData(currentUser || null);
    navigate("/");
  };

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (value) {
      login(value);
    }
    setValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <form className={styles["form"]} onSubmit={onSubmit}>
      <h2>Вход</h2>
      <Input
        onChange={onChange}
        placeholder="Ваше имя"
        name="login"
        value={value}
        id="login"
      ></Input>
      <Button text="Войти в профиль"></Button>
    </form>
  );
}

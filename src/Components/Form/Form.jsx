import styles from "./Form.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";

export default function Form({ onLogin }) {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      onLogin(value);
    }
    setValue("");
  };

  const onChange = (e) => {
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

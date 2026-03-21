import styles from "./Form.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "../../store/store";
import { userActions } from "../../store/user.slice";
import { useState, type JSX } from "react";

export type LoginForm = {
  name: {
    value: string;
  };
};

export default function Form(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!value) {
      return;
    }
    console.log(value);
    dispatch(userActions.login({ name: value, isLogined: true }));
    navigate("/");
  };

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }
  return (
    <form className={styles["form"]} onSubmit={onSubmit}>
      <h2>Вход</h2>
      <Input
        placeholder="Ваше имя"
        value={value}
        onChange={onChange}
        name="login"
        id="login"
      ></Input>
      <Button text="Войти в профиль"></Button>
    </form>
  );
}

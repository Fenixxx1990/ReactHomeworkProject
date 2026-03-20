import { useState, type JSX } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Search.module.css";
import type { SearchProps } from "./Search.props";

export default function Search({ search }: SearchProps): JSX.Element {
  const [value, setValue] = useState("");

  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (value) {
      search(value);
    }
    setValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      search(value);
      setValue("");
    }
  };

  return (
    <div className={styles.search}>
      <Input
        placeholder="Введите название"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        svg={true}
        id="search"
      />
      <Button text="Поиск" onClick={onClick} />
    </div>
  );
}

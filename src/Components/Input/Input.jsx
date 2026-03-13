import { useState } from "react";
import styles from "./Input.module.css";
import cn from "classnames";

export default function Input({ placeholder, svg }) {
  const [inputData, setInputData] = useState("");

  const inputChange = (event) => {
    setInputData(event.target.value);
  };

  return (
    <div className={styles["input-wrapper"]}>
      {svg && (
        <img
          className={styles["search-icon"]}
          src="/searchIcon.svg"
          alt="Иконка поиска"
        />
      )}
      <input
        className={cn(styles.input, { [styles["input-with-icon"]]: svg })}
        type="text"
        placeholder={placeholder}
        value={inputData}
        onChange={inputChange}
      />
    </div>
  );
}

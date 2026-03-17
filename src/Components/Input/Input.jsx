import { useState } from "react";
import styles from "./Input.module.css";
import cn from "classnames";

export default function Input({
  placeholder,
  svg,
  ref,
  name,
  id,
  value,
  onChange,
}) {
  const [localValue, setLocalValue] = useState("");

  const displayValue = value !== undefined ? value : localValue;
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
    if (value === undefined) {
      setLocalValue(event.target.value);
    }
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
        ref={ref}
        name={name}
        className={cn(styles.input, { [styles["input-with-icon"]]: svg })}
        type="text"
        id={id}
        placeholder={placeholder}
        value={displayValue}
        onChange={handleChange}
      />
    </div>
  );
}

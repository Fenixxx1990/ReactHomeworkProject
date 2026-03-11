import { useState } from "react";
import "./Input.css";

export default function Input({ placeholder, svg }) {
  const [inputData, setInputData] = useState("");

  const inputChange = (event) => {
    setInputData(event.target.value);
  };

  const classNameInput = "input" + (svg ? " input-with-icon" : "");
  return (
    <div className="input-wrapper">
      {svg && (
        <img
          className="search-icon"
          src="/searchIcon.svg"
          alt="Иконка поиска"
        />
      )}
      <input
        className={classNameInput}
        type="text"
        placeholder={placeholder}
        value={inputData}
        onChange={inputChange}
      />
    </div>
  );
}

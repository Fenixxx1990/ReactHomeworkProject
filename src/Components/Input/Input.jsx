import "./Input.css";

export default function Input({ placeholder, svg }) {
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
      <input className={classNameInput} type="text" placeholder={placeholder} />
    </div>
  );
}

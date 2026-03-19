import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.search}>
      <Input placeholder="Введите название" svg={true} id="search" />
      <Button text="Поиск" onClick={() => console.log("Нажали")} />
    </div>
  );
}

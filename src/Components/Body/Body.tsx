import Card from "../Card/Card";
import styles from "./Body.module.css";
import type { BodyProps } from "./Body.props";

export default function Body({ items }: BodyProps) {
  if (items.length === 0) {
    return (
      <div className={styles["empty-body"]}>
        <h2 className={styles["empty-body__h2"]}>Упс... Ничего не найдено</h2>
        <p className={styles["empty-body__p"]}>
          Попробуйте изменить запрос или ввести более точное название фильма
        </p>
      </div>
    );
  }

  return (
    <div className={styles["body"]}>
      {items.map((el) => (
        <Card
          key={el.id}
          src={el.src}
          filmName={el.title}
          inFavorites={el.inFavorite}
        />
      ))}
    </div>
  );
}

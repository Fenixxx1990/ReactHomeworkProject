import Card from "../Card/Card";
import "./Body.css";

export default function Body({ items }) {
  if (items.length === 0) {
    return (
      <div className="empty-body">
        <h2 className="empty-body__h2">Упс... Ничего не найдено</h2>
        <p className="empty-body__p">
          Попробуйте изменить запрос или ввести более точное название фильма
        </p>
      </div>
    );
  }

  return (
    <div className="body">
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

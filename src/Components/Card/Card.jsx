import "./Card.css";

export default function Card({ src, filmName, inFavorites }) {
  let favorite;
  if (inFavorites) {
    favorite = (
      <p className="card__favorite favorite-in">
        <img src="../public/bookmark-green.svg" alt="иконка в избранном" />В
        избранном
      </p>
    );
  } else {
    favorite = (
      <p className="card__favorite">
        <img src="../public/like.svg" alt="иконка добавить в избранное" />В
        избранноe
      </p>
    );
  }
  return (
    <div className="card">
      <img className="card__image" src={src} alt={"изображение" + filmName} />
      <h3 className="card__title">{filmName}</h3>
      {favorite}
    </div>
  );
}

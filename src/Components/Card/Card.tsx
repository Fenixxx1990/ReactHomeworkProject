import styles from "./Card.module.css";
import cn from "classnames";
import type { CardProps } from "./Card.props";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../store/favorites.slice";
import type { RootState } from "../../store/store";

export default function Card({
  src,
  filmName,
  inFavorites: initialInFavorites, // Переименовали пропс, чтобы избежать конфликта
  rating,
  id,
}: CardProps) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.name);
  const isFavorite = useSelector((state: RootState) =>
    state.favorites[currentUser ?? ""]?.items.some(
      (item) => item.id === id.toString(),
    ),
  );
  const currentInFavorites = isFavorite ?? initialInFavorites;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (currentInFavorites) {
      dispatch(favoritesActions.removeFavorite(id.toString()));
    } else {
      dispatch(
        favoritesActions.addFavorite({
          id: id.toString(),
          src: src,
          title: filmName,
          rating: rating,
          inFavorite: true,
        }),
      );
    }
  };

  return (
    <Link to={`/movie/${id}`} className={styles.link}>
      <div className={styles["card"]}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className={styles.rating}>
            <img src="/star.svg" alt="рейтинг" />
            {rating}
          </div>
        </div>
        <h3 className={styles["card__title"]}>{filmName}</h3>
        <button
          type="button"
          className={cn(
            styles["card__favorite"],
            currentInFavorites && styles["favorite-in"],
          )}
          onClick={handleFavoriteClick}
          aria-label={
            currentInFavorites ? "Убрать из избранного" : "Добавить в избранное"
          }
        >
          <img
            src={
              currentInFavorites
                ? "/public/bookmark-green.svg"
                : "/public/like.svg"
            }
            alt={
              currentInFavorites
                ? "иконка в избранном"
                : "иконка добавить в избранное"
            }
          />
          {currentInFavorites ? "В избранном" : "В избранное"}
        </button>
      </div>
    </Link>
  );
}

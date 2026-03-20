import styles from "./Card.module.css";
import cn from "classnames";
import type { CardProps } from "./Card.props";
import { Link } from "react-router-dom";

export default function Card({
  src,
  filmName,
  inFavorites,
  rating,
  id,
}: CardProps) {
  let favorite;
  if (inFavorites) {
    favorite = (
      <p className={cn(styles["card__favorite"], styles["favorite-in"])}>
        <img src="/public/bookmark-green.svg" alt="иконка в избранном" />В
        избранном
      </p>
    );
  } else {
    favorite = (
      <p className={styles["card__favorite"]}>
        <img src="/public/like.svg" alt="иконка добавить в избранное" />В
        избранноe
      </p>
    );
  }
  return (
    <Link to={`/movie/${id}`} className={styles.link}>
      <div className={styles["card"]}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className={styles.rating}>
            <img src="/star.svg" alt="" />
            {rating}
          </div>
        </div>
        <h3 className={styles["card__title"]}>{filmName}</h3>
        {favorite}
      </div>
    </Link>
  );
}

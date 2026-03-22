import { useLoaderData } from "react-router-dom";
import type { IFullFilmParams } from "../../Interfaces/Interfaces";
import styles from "./Movie.module.css";

export function Movie() {
  const data = useLoaderData() as IFullFilmParams;
  return (
    <div className={styles.movie}>
      <div className={styles.heading}>
        <p className={styles.paragraph}>Поиск фильмов</p>
        <h2 className={styles.header}>{data.Title}</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.image}>
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className={styles.description}>
          <div className={styles.plot}>{data.Plot}</div>
          <div className={styles.block}>
            <div className={styles.rating}>
              <img src="/star.svg" alt="рейтинг" />
              {data.imdbRating}
            </div>
            <div className={styles.favorite}></div>
          </div>
          <div className={styles.info}>
            <p>Тип</p>
            <h3>{data.Type}</h3>
          </div>
          <div className={styles.info}>
            <p>Дата выхода</p>
            <h3>{data.Released}</h3>
          </div>
          <div className={styles.info}>
            <p>Длительность</p>
            <h3>{data.Runtime}</h3>
          </div>
          <div className={styles.info}>
            <p>Жанр</p>
            <h3>{data.Genre}</h3>
          </div>
        </div>
      </div>
      <p className={styles.footparagr}>Прочее</p>
      <div className={styles.footer}>
        <div>
          <h4>Номинации</h4>
          <div className={styles.foottext}>{data.Awards}</div>
        </div>
        <div>
          <h4>Бюджет</h4>
          <div className={styles.foottext}>{data.BoxOffice}</div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import Body from "../../Components/Body/Body";
import Header from "../../Components/Header/Header";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Search from "../../Components/Search/Search";
import { getFilms } from "../../Helpers/GetData";
import type { IInitialData } from "../../Interfaces/Interfaces";

export function Main() {
  const [INITIAL_DATA, setInitialData] = useState<IInitialData[]>([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getFilms();
        setInitialData(data);
      } catch (err) {
        console.error("Ошибка загрузки фильмов:", err);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <Header title="Поиск" />
      <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      <Search />
      <Body items={INITIAL_DATA} />
    </>
  );
}

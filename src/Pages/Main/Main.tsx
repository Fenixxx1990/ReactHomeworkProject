import Body from "../../Components/Body/Body";
import Header from "../../Components/Header/Header";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Search from "../../Components/Search/Search";
import { getFilms } from "../../Helpers/GetData";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { searchActions } from "../../store/search.slice";

export function Main() {
  const { items } = useSelector((s: RootState) => s.search);
  const dispatch = useDispatch<AppDispatch>();
  const search = (searchTxt: string) => {
    const loadData = async () => {
      try {
        const data = await getFilms(searchTxt);
        dispatch(searchActions.setItems(data));
      } catch (err) {
        console.error("Ошибка загрузки фильмов:", err);
      }
    };
    loadData();
  };

  return (
    <>
      <Header title="Поиск" />
      <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      <Search search={search} />
      <Body items={items} />
    </>
  );
}

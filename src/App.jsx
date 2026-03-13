import "./App.css";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import Layout from "./Components/Layout/Layout";
import Paragraph from "./Components/Paragraph/Paragraph";
import Body from "./Components/Body/Body";

const INITIAL_DATA = [
  {
    id: 1,
    src: "../public/pictures/black-widow.png",
    title: "Black Widow",
    inFavorite: false,
  },
  {
    id: 2,
    src: "../public/pictures/friends.png",
    title: "Friends",
    inFavorite: true,
  },
  {
    id: 3,
    src: "../public/pictures/how-i-met-your-mother.png",
    title: "how-i-met-your-mother",
    inFavorite: false,
  },
  {
    id: 4,
    src: "../public/pictures/loki.png",
    title: "Loki",
    inFavorite: false,
  },
  {
    id: 5,
    src: "../public/pictures/money-heist.png",
    title: "money-heist",
    inFavorite: false,
  },
  {
    id: 6,
    src: "../public/pictures/shang-chi.png",
    title: "shang-chi",
    inFavorite: false,
  },
  {
    id: 7,
    src: "../public/pictures/the-big-bang-theory.png",
    title: "the-big-bang-theory",
    inFavorite: true,
  },
  {
    id: 8,
    src: "../public/pictures/two-and-a-half-men.png",
    title: "two-and-a-half-men",
    inFavorite: true,
  },
];

function App() {
  return (
    <>
      <Layout />
      <Header title="Поиск" />
      <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      <div className="search">
        <Input placeholder="Введите название" svg={true} />
        <Button text="Поиск" onClick={() => console.log("Нажали")} />
      </div>
      <Body items={INITIAL_DATA} />
    </>
  );
}

export default App;

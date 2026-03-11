import "./App.css";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import Paragraph from "./Components/Paragraph/Paragraph";

function App() {
  return (
    <>
      <Header title="Поиск" />
      <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      <Button />
    </>
  );
}

export default App;

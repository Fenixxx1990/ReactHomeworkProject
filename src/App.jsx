import "./App.css";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import Layout from "./Components/Layout/Layout";
import Paragraph from "./Components/Paragraph/Paragraph";

function App() {
  return (
    <>
      <Layout />
      <Header title="Поиск" />
      <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      <Input placeholder="Введите название" svg={true} />
      <Button text="Поиск" onClick={() => console.log("Нажали")} />
    </>
  );
}

export default App;

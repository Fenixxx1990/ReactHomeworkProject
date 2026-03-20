import axios, { AxiosError } from "axios";
import { url } from "./API";
import { type Description, type IInitialData } from "../Interfaces/Interfaces";

export const getFilms = async () => {
  try {
    const { data } = await axios.get(`${url}search?q=Marry`);
    console.log(data.docs);
    const result: IInitialData[] = data.description.map(
      (film: Description) => ({
        title: film["#TITLE"],
        src: film["#IMG_POSTER"],
        id: film["#IMDB_ID"].slice(2),
        rating: film["#RANK"],
        inFavorite: false,
      }),
    );
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
    if (e instanceof AxiosError) {
      console.log(e.message);
    }
    return [];
  }
};

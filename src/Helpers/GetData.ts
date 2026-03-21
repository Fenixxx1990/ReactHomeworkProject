import axios, { AxiosError } from "axios";
import { url } from "./API";
import { type IInitialData, type Search } from "../Interfaces/Interfaces";

export const getFilms = async (searchTxt: string) => {
  try {
    const { data } = await axios.get(`${url}S=${searchTxt}`);
    const seenIds = new Set<string>();
    const result: IInitialData[] = data.Search.map((film: Search) => ({
      title: film.Title,
      src: film?.Poster,
      id: film.imdbID,
      rating: film.Year,
      inFavorite: false,
    })).filter((film: IInitialData) => {
      if (seenIds.has(film.id)) {
        return false;
      }
      seenIds.add(film.id);
      return true;
    });
    return result;
  } catch (e) {
    console.error(e);
    if (e instanceof AxiosError) {
      console.log(e.message);
    }
    return [];
  }
};

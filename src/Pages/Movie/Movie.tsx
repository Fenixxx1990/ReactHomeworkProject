import { useLoaderData } from "react-router-dom";
import type { IFullFilmParams } from "../../Interfaces/Interfaces";

export function Movie() {
  const data = useLoaderData() as IFullFilmParams;
  return <>Movie-{data.Title}</>;
}

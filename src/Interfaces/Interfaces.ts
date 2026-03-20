export interface IInitialData {
  id: number;
  src: string;
  title: string;
  rating: number;
  inFavorite: boolean;
}

export interface IProductFromApi {
  ok: boolean;
  description: Description[];
  error_code: number;
}

export interface Description {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": string;
  photo_width: number;
  photo_height: number;
}

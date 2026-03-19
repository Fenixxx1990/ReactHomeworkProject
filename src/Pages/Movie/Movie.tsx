import { useParams } from "react-router-dom";

export function Movie() {
  const { id } = useParams();

  return <>Movie-{id}</>;
}

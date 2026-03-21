import Body from "../../Components/Body/Body";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export function Favorites() {
  const { name } = useSelector((s: RootState) => s.user);
  const favorite = useSelector((s: RootState) => s.favorites);

  return (
    <>
      <Header title="Избранное" />
      <Body items={favorite[name ?? ""]?.items ?? []} />
    </>
  );
}

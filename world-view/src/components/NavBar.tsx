import { SearchBar } from "./SearchBar";
import { ButtonHome } from "./ButtonHome";

export const NavBar = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: Function;
}) => {
  return (
    <section className="nav-bar">
      <ButtonHome />
      <SearchBar filter={filter} setFilter={setFilter} />
    </section>
  );
};

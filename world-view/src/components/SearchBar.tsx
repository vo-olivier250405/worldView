import { useEffect, useState } from "react";

export const SearchBar = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: Function;
}) => {
  const [value, setValue] = useState<string>("");

  const handleTextOnChange = (event: any) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    setFilter(value);
  });
  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder="Saisissez le nom d'un pays"
        value={value}
        onChange={handleTextOnChange}
      />
    </>
  );
};

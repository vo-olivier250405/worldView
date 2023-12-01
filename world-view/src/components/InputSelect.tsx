import { ChangeEvent, useState } from "react";
import { Filter } from "@/interfaces/filter";

export const InputSelect = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: Function;
}) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <label htmlFor="filter">Filter by regions: </label>
      <select
        name="choice"
        id="filter"
        value={filter}
        onChange={handleOnChange}
      >
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctica">Antartica</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
      </select>
      {console.log(filter)}
    </>
  );
};

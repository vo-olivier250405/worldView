import { createContext } from "react";
import { Country } from "../interfaces/country";

export const CountryContext = createContext<Country[]>([]);
export const OneCountryContext = createContext<Country>(
  null as unknown as Country
);

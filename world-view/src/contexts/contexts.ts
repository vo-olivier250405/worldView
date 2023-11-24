import { createContext } from "react";
import { Country } from "../interfaces/country";

export const CountryContext = createContext<Country[]>([]);

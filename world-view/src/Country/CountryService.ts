import { api } from "../services/service";

export const fetchAllCountriesData = async () => {
  return await api.get(`/v3.1/all`);
};

export const fetchCountryData = async (ccn3: string) => {
  return await api.get("v3.1/alpha/" + `${ccn3}`);
};

export const fetchCountryByCcn3 = async () => {
  return await api.get("v3.1/all?fields=ccn3");
};

import { api } from "../services/service";

export const fetchAllCountriesData = async () => {
  return await api.get(`/v3.1/all`);
};

export const fetchCountryData = async (service: string, fields: string) => {
  return await api.get(`/${service}?fields=${fields}`);
};

"use client";
import { fetchAllCountriesData } from "@/Country/CountryService";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Country } from "@/interfaces/country";
import removeAccents from "remove-accents";

const bubbleSort = (tab: Country[]) => {
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length - i - 1; j++) {
      if (
        removeAccents(tab[j + 1].name.common) <
        removeAccents(tab[j].name.common)
      ) {
        const temp = tab[j + 1];
        tab[j + 1] = tab[j];
        tab[j] = temp;
      }
    }
  }
  return tab;
};

export const filterCountry = (
  allCountries: Country[],
  filter: string,
  originData: Country[]
) => {
  let temp: Country[] = [];
  // Check temp list
  temp = temp.filter((element: Country) => {
    element.name.common.slice(0, filter.length).toLowerCase() ===
      filter.toLowerCase();
  });
  if (!temp) {
    console.log("hKJdhqzk", temp);
    temp = originData;
  }
  // Filter
  if (allCountries) {
    allCountries.map((country: Country) => {
      if (
        country.name.common.slice(0, filter.length).toLowerCase() ===
        filter.toLowerCase()
      ) {
        temp.push(country);
      }
    });
  }
  return temp;
};

export const CountryCard = ({ filter }: { filter: string }) => {
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [copyCountryData, setCopyCountryData] = useState(countryData);

  useEffect(() => {
    fetchAllCountriesData().then((response) => {
      return setCountryData(bubbleSort(response.data));
    });
  }, []);
  useEffect(() => {
    setCopyCountryData(filterCountry(countryData, filter, countryData));
  }, [filter]);
  return (
    <>
      <Card countryData={copyCountryData} />
    </>
  );
};

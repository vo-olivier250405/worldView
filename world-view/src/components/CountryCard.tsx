"use client";
import { fetchAllCountriesData } from "@/Country/CountryService";
import { CountryContext } from "@/contexts/contexts";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Country } from "@/interfaces/country";
import removeAccents from "remove-accents";

const bubbleSort = (tab: Country[]) => {
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length - i - 1; j++) {
      if (
        removeAccents(tab[j + 1].name.official) <
        removeAccents(tab[j].name.official)
      ) {
        const temp = tab[j + 1];
        tab[j + 1] = tab[j];
        tab[j] = temp;
      }
    }
  }
  return tab;
};

export const CountryCard = () => {
  const [countryData, setCoutryData] = useState<Country[]>([]);
  useEffect(() => {
    fetchAllCountriesData().then((response) => {
      return setCoutryData(bubbleSort(response.data));
    });
  }, []);
  return (
    <>
      <Card countryData={countryData} />;
    </>
  );
};

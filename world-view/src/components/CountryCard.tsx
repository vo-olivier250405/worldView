"use client";
import { fetchAllCountriesData } from "@/Country/CountryService";
import { CountryContext } from "@/contexts/contexts";

import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Country } from "@/interfaces/country";

const bubbleSort = (tab: any[]) => {
  for (let i = 0; i < tab.length - 1; i++) {
    for (let j = 0; j < tab.length - i; j++) {
      if (tab[j + 1] < tab[j]) {
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
      return setCoutryData(response.data);
    });
  }, []);

  return countryData.map((element: Country) => {
    return (
      <div key={element.cca2}>
        <CountryContext.Provider value={countryData}>
          <Card
            countryName={element.name.official}
            countryFlag={element.flags.png}
          />
        </CountryContext.Provider>
      </div>
    );
  });
};

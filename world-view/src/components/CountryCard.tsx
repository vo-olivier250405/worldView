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

export const getFilteredCountries = (
  filter: string,
  searchParams: string,
  allCountries: Country[],
  temp: Country[]
) => {
  if (!["all", ""].includes(filter)) {
    allCountries.map((country: Country) => {
      if (
        removeAccents(
          country.name.common.slice(0, searchParams.length).toLowerCase()
        ) === searchParams.toLowerCase() &&
        country.region === filter
      ) {
        temp.push(country);
      }
    });
  } else {
    allCountries.map((country: Country) => {
      if (
        removeAccents(
          country.name.common.slice(0, searchParams.length).toLowerCase()
        ) === searchParams.toLowerCase()
      ) {
        temp.push(country);
      }
    });
  }
  return temp;
};

export const filterCountry = (
  allCountries: Country[],
  searchParams: string,
  originData: Country[],
  filter: string
) => {
  let temp: Country[] = originData;

  if (searchParams === "") {
    return originData;
  }
  // Check temp list
  temp = temp.filter((element: Country) => {
    removeAccents(
      element.name.common.slice(0, searchParams.length).toLowerCase()
    ) === searchParams.toLowerCase();
  });

  if (!temp) {
    temp = originData;
  }
  // Filter
  if (allCountries) {
    temp = getFilteredCountries(filter, searchParams, allCountries, temp);
  }
  return temp;
};

export const CountryCard = ({
  searchParams,
  filter,
}: {
  searchParams: string;
  filter: string;
}) => {
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [copyCountryData, setCopyCountryData] =
    useState<Country[]>(countryData);

  useEffect(() => {
    fetchAllCountriesData().then((response) => {
      return setCountryData(bubbleSort(response.data));
    });
  }, []);

  useEffect(() => {
    setCopyCountryData(
      filterCountry(countryData, searchParams, countryData, filter)
    );
    if (!["", "Antartica"].includes(filter) && searchParams === "") {
      setCopyCountryData(
        countryData.filter((element) => element.region === filter)
      );
    }
    if (filter === "all") {
      setCopyCountryData(countryData);
    }
    if (filter === "Antarctica") {
      console.log("AAAH");
      setCopyCountryData(
        countryData.filter((e) => e.name.common === "Antarctica")
      );
    }
  }, [searchParams, countryData, filter]);
  return (
    <>
      <Card countryData={copyCountryData} />
    </>
  );
};

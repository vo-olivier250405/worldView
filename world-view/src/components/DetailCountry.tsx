import { fetchAllCountriesData } from "@/Country/CountryService";
import { Country } from "@/interfaces/country";
import { useEffect, useState } from "react";
import { ButtonDisplayCulturalData } from "./CulturalData";
import { ButtonDisplayBasicInformation } from "./BasicInformations";
import { ButtonDisplayGeoData } from "./GeographicalData";
import { ButtonDisplayPoliticalAdminData } from "./PoliticalAdminData";
import { TitleFlag } from "./TitleFlag";
import { ButtonDisplayEcoDemoData } from "./EcoDemographicData";
import { ButtonHome } from "./ButtonHome";

export const getDistance = (country1: Country, country2: Country): boolean => {
  const degToRAd = (degrees: number) => {
    return degrees * (Math.PI / 180);
  };
  const lat1: number = degToRAd(country1.latlng[0]);
  const lat2: number = degToRAd(country2.latlng[0]);
  const lng1: number = degToRAd(country1.latlng[1]);
  const lng2: number = degToRAd(country2.latlng[1]);

  const deltaLat: number = (lat2 - lat1) / 2;
  const deltaLng: number = (lng2 - lng1) / 2;

  const a: number =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
  const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = 6371 * b;
  console.log(distance);
  return distance < 10000;
};

export const DetailCountry = ({ country }: { country: Country }) => {
  return (
    <section>
      <ButtonHome />
      <TitleFlag country={country} />
      <div className="datas">
        <ButtonDisplayBasicInformation country={country} />
        <ButtonDisplayGeoData country={country} />
        <ButtonDisplayPoliticalAdminData country={country} />
        <ButtonDisplayEcoDemoData country={country} />
        <ButtonDisplayCulturalData country={country} />
      </div>
    </section>
  );
};

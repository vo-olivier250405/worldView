import { fetchAllCountriesData } from "@/Country/CountryService";
import { Country } from "@/interfaces/country";
import { useEffect, useState } from "react";
import { CulturalData } from "./CulturalData";

export const booleanToString = (bool: boolean): string => {
  if (bool) {
    return "Nes";
  }
  return "No";
};

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
    <>
      <section className="title-flag">
        {country.flags && <img src={country.flags.png} alt="Drapeau du pays" />}
        {country.name && <h1>{country.name.official}</h1>}
      </section>
      <section className="basic-country-informations">
        {country.name && (
          <>
            <h2>Common name: {country.name.common}</h2>
            <h2>Native common name: {country.name.nativeName.common}</h2>
            <h2>Official common name: {country.name.official}</h2>
            <h2>Official native name: {country.name.nativeName.official}</h2>
          </>
        )}
        {country.tld && <h2>{country.tld}</h2>}
      </section>
      <section className="geographical-data">
        <div className="latling">
          {country.latlng && (
            <>
              <h2>{country.latlng[0]} latitude</h2>
              <h2>{country.latlng[1]} Longitude</h2>
            </>
          )}
        </div>
        {country.area && <h2>{country.area}</h2>}
        <h1>RAJOUTE LES PAYS EN BORDURE</h1>
        {country.region && country.subregion && (
          <h2>
            {country.region}, {country.subregion}
          </h2>
        )}
      </section>
      <section className="political-admin-data">
        {country.capital && <h2>{country.capital}</h2>}
        {typeof country.independent === "boolean" && (
          <h2>{booleanToString(country.independent)}</h2>
        )}
        {typeof country.unMember === "boolean" && (
          <h2>{booleanToString(country.unMember)}</h2>
        )}
      </section>
      <section className="eco-demo-data">
        {country.population && <h2>{country.population}</h2>}
        {country.currencies && (
          <>
            {country.currencies.XOF && (
              <h2>
                {country.currencies.XOF.name}:{country.currencies.XOF.symbol}
              </h2>
            )}
          </>
        )}
      </section>
      <CulturalData country={country} />
    </>
  );
};

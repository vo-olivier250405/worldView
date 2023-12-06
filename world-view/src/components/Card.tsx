import { CountryContext } from "@/contexts/contexts";
import { Country } from "@/interfaces/country";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

export const CardName = ({ children }: { children: any }) => {
  const value = useContext(CountryContext);
  return <p>{children}</p>;
};

export const CardFlag = ({ children }: { children: any }) => {
  return <img className="flags" src={children} alt="Drapeau" />;
};

export const CardContainer = ({ countryData }: { countryData: Country }) => {
  return (
    <div className="card-container">
      <Link
        href={{
          pathname: "../pages/details/",
          query: { ccn3: countryData.ccn3 },
        }}
      >
        <CardFlag>{countryData.flags.svg}</CardFlag>
        <CardName>{countryData.name.common}</CardName>
      </Link>
    </div>
  );
};

export const Card = ({ countryData }: { countryData: Country[] }) => {
  return countryData.map((element: Country) => {
    return (
      <div key={element.cca2} className="card">
        <CountryContext.Provider value={countryData}>
          <CardContainer countryData={element} />
        </CountryContext.Provider>
      </div>
    );
  });
};

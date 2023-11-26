import { CountryContext } from "@/contexts/contexts";
import { Country } from "@/interfaces/country";
import { useContext } from "react";

export const CardName = ({ children }: { children: any }) => {
  const value = useContext(CountryContext);
  return <p>{children}</p>;
};

export const CardFlag = ({ children }: { children: any }) => {
  return <img className="flags" src={children} alt="" />;
};
export const CardContainer = ({
  countryName,
  countryFlag,
}: {
  countryName: string;
  countryFlag: string;
}) => {
  return (
    <div className="card-container">
      <CardFlag>{countryFlag}</CardFlag>
      <CardName>{countryName}</CardName>
    </div>
  );
};

export const Card = ({ countryData }: { countryData: Country[] }) => {
  return countryData.map((element: Country) => {
    return (
      <div key={element.cca2} className="card">
        <CountryContext.Provider value={countryData}>
          <CardContainer
            countryName={element.name.official}
            countryFlag={element.flags.png}
          />
        </CountryContext.Provider>
      </div>
    );
  });
};

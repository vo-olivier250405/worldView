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
export const Card = ({
  countryName,
  countryFlag,
}: {
  countryName: string;
  countryFlag: string;
}) => {
  return (
    <div className="card">
      <CardFlag>{countryFlag}</CardFlag>
      <CardName>{countryName}</CardName>
    </div>
  );
};

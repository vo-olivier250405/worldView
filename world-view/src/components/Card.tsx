import { CountryContext } from "@/contexts/contexts";
import { Country } from "@/interfaces/country";
import { useContext } from "react";

export const CardName = ({ children }: { children: any }) => {
  const value = useContext(CountryContext);
  return <div>{children}</div>;
};

export const CardFlag = ({ children }: { children: any }) => {
  return <img src={children} alt="" />;
};
export const Card = ({
  countryName,
  countryFlag,
}: {
  countryName: string;
  countryFlag: string;
}) => {
  return (
    <div>
      <CardName>{countryName}</CardName>
      <CardFlag>{countryFlag}</CardFlag>
    </div>
  );
};

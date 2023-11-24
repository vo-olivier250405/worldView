import { CountryContext } from "@/contexts/contexts";
import { Country } from "@/interfaces/country";
import { useContext } from "react";

export const CardContainer = ({ children }: { children: any }) => {
  const value = useContext(CountryContext);
  return <div>{children}</div>;
};

export const Card = ({ countryName }: { countryName: string }) => {
  return (
    <div>
      <CardContainer>{countryName}</CardContainer>
    </div>
  );
};

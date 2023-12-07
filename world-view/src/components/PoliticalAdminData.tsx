import { PageWrapper } from "@/app/Animations";
import { Country } from "@/interfaces/country";
import { useState } from "react";
import { HoverAnimation } from "@/app/Animations";

export const booleanToString = (bool: boolean): string => {
  if (bool) {
    return "Yes";
  }
  return "No";
};

export const PoliticalAdminData = ({ country }: { country: Country }) => {
  return (
    <section className="political-admin-data">
      <h1>Capital</h1>
      <br />
      {country.capital && <h2>{country.capital}</h2>}
      {typeof country.independent === "boolean" && (
        <h2>Independent: {booleanToString(country.independent)}</h2>
      )}
      {typeof country.unMember === "boolean" && (
        <h2>U.N Member: {booleanToString(country.unMember)}</h2>
      )}
    </section>
  );
};

export const ButtonDisplayPoliticalAdminData = ({
  country,
}: {
  country: Country;
}) => {
  const [isClicked, setIsClicked] = useState(true);
  const [isShow, setIsShow] = useState(true);
  return (
    <HoverAnimation>
      {isShow && (
        <section>
          <PageWrapper>
            <button
              className="displays-buttons"
              onClick={() => {
                setIsClicked(false);
                setIsShow(false);
              }}
            >
              Political Admin Data
            </button>
          </PageWrapper>
        </section>
      )}
      {!isClicked && (
        <section
          onClick={() => {
            setIsShow(true);
            setIsClicked(true);
          }}
        >
          <PageWrapper>
            <PoliticalAdminData country={country} />
          </PageWrapper>
        </section>
      )}
    </HoverAnimation>
  );
};

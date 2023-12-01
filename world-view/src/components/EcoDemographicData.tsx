import { Country } from "@/interfaces/country";
import { useState } from "react";
import { PageWrapper } from "@/app/Animations";

export const EcoDemographicData = ({ country }: { country: Country }) => {
  return (
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
  );
};

export const ButtonDisplayEcoDemoData = ({ country }: { country: Country }) => {
  const [isClicked, setIsClicked] = useState(true);
  const [isShow, setIsShow] = useState(true);
  return (
    <>
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
              Eco-Demographical
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
            <EcoDemographicData country={country} />
          </PageWrapper>
        </section>
      )}
    </>
  );
};

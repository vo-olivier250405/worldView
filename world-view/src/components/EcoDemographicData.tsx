import { Country } from "@/interfaces/country";
import { useState } from "react";
import { PageWrapper } from "@/app/Animations";
import { HoverAnimation } from "@/app/Animations";

export const EcoDemographicData = ({ country }: { country: Country }) => {
  return (
    <section className="eco-demo-data">
      {country.population && <h2>Population: {country.population}</h2>}
      <GetCurrencies country={country} />
    </section>
  );
};

export const GetCurrencies = ({ country }: { country: Country }) => {
  let nameTab: string[] = [];
  for (const name in country.currencies) {
    nameTab.push(name);
  }
  let gini: string[] = [];
  for (const name in country.gini) {
    console.log(name, "hehehehe");
    gini.push(name);
  }
  return nameTab.map((name) => {
    return (
      <div key={name} className="native-names">
        <h2>
          {country.currencies[name].name}: {country.currencies[name].symbol}
          <br />
          <br />
          <h2>
            GINI in {gini[0]}: {country.gini && country.gini[gini[0]]}
          </h2>
        </h2>
      </div>
    );
  });
};

export const ButtonDisplayEcoDemoData = ({ country }: { country: Country }) => {
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
    </HoverAnimation>
  );
};

import { PageWrapper } from "@/app/Animations";
import { Country } from "@/interfaces/country";
import { useState } from "react";

export const Languages = ({ country }: { country: Country }) => {
  return <>Language(s): {getMutipleElementInDict(country.languages)}</>;
};

const Demonyms = ({ country }: { country: Country }) => {
  let temp = [];
  for (const demonym in country.demonyms) {
    temp.push(demonym);
  }
  return temp.map((element) => {
    return (
      <div key={element}>
        Demonyms
        {"\n"}
        {element.toUpperCase()}: 👧️: {country.demonyms[element].f} 🧑️:{" "}
        {country.demonyms[element].m}
      </div>
    );
  });
};

export const getMutipleElementInDict = (dict: { [key: string]: string }) => {
  let temp = [];
  for (const element in dict) {
    temp.push(dict[element]);
  }
  return temp.map((element) => {
    return (
      <div key={element}>
        <li>{element}</li>
      </div>
    );
  });
};

export const CulturalData = ({ country }: { country: Country }) => {
  return (
    <>
      <section className="cultural-data">
        <Languages country={country} />
        <Demonyms country={country} />
      </section>
    </>
  );
};

export const ButtonDisplayCulturalData = ({
  country,
}: {
  country: Country;
}) => {
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
              Cultural Data
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
            <CulturalData country={country} />
          </PageWrapper>
        </section>
      )}
    </>
  );
};

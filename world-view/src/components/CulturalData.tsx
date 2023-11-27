import { Country } from "@/interfaces/country";

export const Languages = ({ country }: { country: Country }) => {
  return getMutipleElementInDict(country.languages);
};

const Demonyms = ({ country }: { country: Country }) => {
  let temp = [];
  for (const demonym in country.demonyms) {
    temp.push(demonym);
  }
  return temp.map((element) => {
    return (
      <div key={element}>
        {"\n"}
        {element}: {country.demonyms[element].f} {country.demonyms[element].m}
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

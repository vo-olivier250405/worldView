import { Country } from "@/interfaces/country";

export const TitleFlag = ({ country }: { country: Country }) => {
  return (
    <section className="title-flag">
      {country.flags && <img src={country.flags.png} alt="Drapeau du pays" />}
      {country.name && <h1>{country.name.common.toUpperCase()}</h1>}
    </section>
  );
};

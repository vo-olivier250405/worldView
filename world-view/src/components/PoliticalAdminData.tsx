import { Country } from "@/interfaces/country";

export const booleanToString = (bool: boolean): string => {
  if (bool) {
    return "Yes";
  }
  return "No";
};

export const PoliticalAdminData = ({ country }: { country: Country }) => {
  return (
    <section className="political-admin-data">
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

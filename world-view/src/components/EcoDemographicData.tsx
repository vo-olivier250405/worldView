import { Country } from "@/interfaces/country";

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

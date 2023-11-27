import { Country, OfficialCommon } from "@/interfaces/country";

export const GetNativeName = ({ country }: { country: Country }) => {
  let temp: OfficialCommon[] = [];
  for (const name in country.name.nativeName) {
    temp.push(country.name.nativeName[name]);
  }
  return temp.map((nativeName) => {
    return (
      <div key={nativeName.official}>
        <h2>Common native name: {nativeName.common}</h2>
        <h2>Official native name: {nativeName.official}</h2>
      </div>
    );
  });
};

export const BasicInformations = ({ country }: { country: Country }) => {
  return (
    <section className="basic-country-informations">
      {country.name && (
        <>
          <h2>Common name: {country.name.common}</h2>
          <h2>Official common name: {country.name.official}</h2>
          {country.name.nativeName && <GetNativeName country={country} />}
        </>
      )}

      {country.tld && <h2>{country.tld}</h2>}
    </section>
  );
};

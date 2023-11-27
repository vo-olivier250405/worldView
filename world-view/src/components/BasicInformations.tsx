import { Country, OfficialCommon } from "@/interfaces/country";

export const GetNativeName = ({ country }: { country: Country }) => {
  let nameTab = [];
  for (const name in country.name.nativeName) {
    nameTab.push(name);
  }
  return nameTab.map((name) => {
    return (
      <div key={name} className="native-names">
        <h1>Native Language: {name}</h1>
        <h2>Native common name: {country.name.nativeName[name].common}</h2>
        <h2>Native official name: {country.name.nativeName[name].official}</h2>
      </div>
    );
  });
};

export const BasicInformations = ({ country }: { country: Country }) => {
  return (
    <section className="basic-country-informations">
      {country.name && (
        <>
          <div>
            <h1>NATIVE NAMES</h1>
            {country.name.nativeName && <GetNativeName country={country} />}
          </div>

          <div>
            <h1>OTHER NAMES</h1>
            <div>
              <h2>Common name: {country.name.common}</h2>
              <h2>Official common name: {country.name.official}</h2>
            </div>
          </div>
        </>
      )}
      <div>
        {country.tld && (
          <h2>
            <span>Top-Level-Domain</span>: {country.tld}
          </h2>
        )}
      </div>
    </section>
  );
};

import { fetchAllCountriesData } from "@/Country/CountryService";
import { PageWrapper } from "@/app/Animations";
import { Country } from "@/interfaces/country";
import { useEffect, useState } from "react";

// export const getDistance = (country1: Country, country2: Country): boolean => {
//   const degToRAd = (degrees: number) => {
//     return degrees * (Math.PI / 180);
//   };
//   const lat1: number = degToRAd(country1.latlng[0]);
//   const lat2: number = degToRAd(country2.latlng[0]);
//   const lng1: number = degToRAd(country1.latlng[1]);
//   const lng2: number = degToRAd(country2.latlng[1]);

//   const deltaLat: number = (lat2 - lat1) / 2;
//   const deltaLng: number = (lng2 - lng1) / 2;

//   const a: number =
//     Math.sin(deltaLat / 2) ** 2 +
//     Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
//   const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const distance = 6371 * b;
//   console.log(distance);
//   return distance < 10000;
// };

export const GeographicalData = ({ country }: { country: Country }) => {
  const [borders, setBorders] = useState<Country[]>([]);

  useEffect(() => {
    fetchAllCountriesData().then((response) => {
      return setBorders(response.data);
    });
  }, [country]);
  console.log(borders, "here");
  return (
    <section className="geographical-data">
      <div className="latling">
        {country.latlng && (
          <>
            <h2>{country.latlng[0]} Latitude</h2>
            <h2>{country.latlng[1]} Longitude</h2>
          </>
        )}
      </div>
      {country.area && <h2>{country.area}</h2>}
      <div className="borders">
        <hr />
        <h2>Pays en bordures</h2>
        {borders &&
          borders
            .filter((element) => country.borders.includes(element.fifa))
            .map((element: Country) => {
              return (
                <div>
                  <h2>{element.name.common}</h2>
                </div>
              );
            })}
        <hr />
      </div>
      {country.region && country.subregion && (
        <h2>
          {country.region}, {country.subregion}
        </h2>
      )}
    </section>
  );
};

export const ButtonDisplayGeoData = ({ country }: { country: Country }) => {
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
              Geographical Data
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
            <GeographicalData country={country} />
          </PageWrapper>
        </section>
      )}
    </>
  );
};

import { PageWrapper } from "@/app/Animations";
import { Country } from "@/interfaces/country";
import { useState } from "react";

export const GeographicalData = ({ country }: { country: Country }) => {
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
      <h1>RAJOUTE LES PAYS EN BORDURE</h1>
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

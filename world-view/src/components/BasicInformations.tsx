import { Country } from "@/interfaces/country";
import { useState } from "react";
import { PageWrapper } from "@/app/Animations";
import { HoverAnimation } from "@/app/Animations";

export const GetNativeName = ({ country }: { country: Country }) => {
  let nameTab = [];
  for (const name in country.name.nativeName) {
    nameTab.push(name);
  }
  return nameTab.map((name) => {
    return (
      <div key={name} className="native-names">
        <h1>Native Language: {name.toUpperCase()}</h1>
        <h2>Native common name: {country.name.nativeName[name].common}</h2>
        <h2>Native official name: {country.name.nativeName[name].official}</h2>
      </div>
    );
  });
};

export const ButtonDisplayBasicInformation = ({
  country,
}: {
  country: Country;
}) => {
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
              NAMES
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
            <BasicInformations country={country} />
          </PageWrapper>
        </section>
      )}
    </HoverAnimation>
  );
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

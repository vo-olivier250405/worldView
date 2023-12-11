import { Country } from "@/interfaces/country";
import { ButtonDisplayCulturalData } from "./CulturalData";
import { ButtonDisplayBasicInformation } from "./BasicInformations";
import { ButtonDisplayGeoData } from "./GeographicalData";
import { ButtonDisplayPoliticalAdminData } from "./PoliticalAdminData";
import { TitleFlag } from "./TitleFlag";
import { ButtonDisplayEcoDemoData } from "./EcoDemographicData";
import { ButtonHome } from "./ButtonHome";
import ButtonDownload from "./ButtonDownload";
import { fetchAllCountriesData } from "@/Country/CountryService";
import { useState, useEffect } from "react";

export const DetailCountry = ({ country }: { country: Country }) => {
  const [borders, setBorders] = useState<Country[]>([]);

  useEffect(() => {
    fetchAllCountriesData().then((response) => {
      return setBorders(response.data);
    });
  }, [country]);
  return (
    <section>
      <br />
      <ButtonHome />
      <TitleFlag country={country} />
      <div className="datas">
        <ButtonDisplayBasicInformation country={country} />
        <ButtonDisplayGeoData country={country} />
        <ButtonDisplayPoliticalAdminData country={country} />
        <ButtonDisplayEcoDemoData country={country} />
        <ButtonDisplayCulturalData country={country} />
        {borders && <ButtonDownload country={country} border={borders} />}
      </div>
      <br />
    </section>
  );
};

import { Country } from "@/interfaces/country";
import { ButtonDisplayCulturalData } from "./CulturalData";
import { ButtonDisplayBasicInformation } from "./BasicInformations";
import { ButtonDisplayGeoData } from "./GeographicalData";
import { ButtonDisplayPoliticalAdminData } from "./PoliticalAdminData";
import { TitleFlag } from "./TitleFlag";
import { ButtonDisplayEcoDemoData } from "./EcoDemographicData";
import { ButtonHome } from "./ButtonHome";

export const DetailCountry = ({ country }: { country: Country }) => {
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
      </div>
    </section>
  );
};

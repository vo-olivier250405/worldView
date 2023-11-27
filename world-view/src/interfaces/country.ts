export type OfficialCommon = { official: string; common: string };

export type CountryName = {
  common: string;
  official: string;
  nativeName: { [key: string]: OfficialCommon };
};

export type Country = {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { XOF: { name: string; symbol: string } };
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: {
    ara: OfficialCommon;
    bre: OfficialCommon;
    ces: OfficialCommon;
    cym: OfficialCommon;
    deu: OfficialCommon;
    est: OfficialCommon;
    fin: OfficialCommon;
    fra: OfficialCommon;
    hrv: OfficialCommon;
    hun: OfficialCommon;
    ita: OfficialCommon;
    jpn: OfficialCommon;
    kor: OfficialCommon;
    nld: OfficialCommon;
    per: OfficialCommon;
    pol: OfficialCommon;
    por: OfficialCommon;
    rus: OfficialCommon;
    slk: OfficialCommon;
    spa: OfficialCommon;
    srp: OfficialCommon;
    swe: OfficialCommon;
    tur: OfficialCommon;
    urd: OfficialCommon;
    zho: OfficialCommon;
  };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    [key: string]: { f: string; m: string };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: { signs: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string[];
  capitalInfo: { latlng: number[] };
};

import React, { useState, useEffect } from "react";
import { PDFDocument, PDFPage } from "pdf-lib";
import { Country } from "@/interfaces/country";
import { fetchAllCountriesData } from "@/Country/CountryService";

const generateCardText = (country: Country, borders: Country[]) => {
  const result: string[] = [];
  result.push(country.name.common.toUpperCase());
  result.push(`NATIVE NAMES: \n`);
  for (const nativeNames in country.name.nativeName) {
    result.push("-----------------------------------\n");
    result.push("Native langugage: " + nativeNames.toUpperCase() + "\n");
    result.push(`Common: ${country.name.nativeName[nativeNames].common}`);
    result.push(`Official: ${country.name.nativeName[nativeNames].official}`);
  }
  result.push("-----------------------------------\n");
  result.push("TOP-LEVEL-DOMAIN: " + country.tld);
  result.push("-----------------------------------\n");
  result.push("Latitude: " + country.latlng[0] + "\n");
  result.push("Longitude: " + country.latlng[1] + "\n");
  result.push("Area: " + country.area);
  result.push("-----------------------------------\n");
  result.push("BORDER COUNTRIES");
  let borderCountryString: string = "";
  let counter: number = 0;
  borders.map((borderCountry: Country, index: number) => {
    borderCountryString += borderCountry.name.common + ", ";
    if (index % 10 === 0) {
      borderCountryString += "\n";
      counter += 1;
    }
  });
  result.push(borderCountryString);
  for (let i = 0; i < counter / 2; i++) {
    result.push("\n");
  }
  result.push("Region: " + country.region);
  result.push("Sub-Region: " + country.subregion);
  result.push("-----------------------------------\n");
  result.push("Capital: " + country.capital);
  result.push(`Independency: ${country.independent ? "Yes" : "No"}`);
  result.push(`U.N Member: ${country.unMember ? "Yes" : "No"}`);
  result.push("-----------------------------------\n");
  result.push("Population: " + country.population);
  for (const currencyName in country.currencies) {
    result.push(
      `${country.currencies[currencyName].name}: ${country.currencies[currencyName].symbol}`
    );
  }
  if (country.gini) {
    for (const dateGini in country.gini) {
      result.push(`GINI in ${dateGini}: ${country.gini[dateGini]}`);
    }
  }
  result.push("-----------------------------------\n");
  result.push("LANGUAGES");
  for (const lang in country.languages) {
    result.push("- " + country.languages[lang]);
  }
  return result;
};

const drawTextPdf = (dataTab: string[], page: PDFPage) => {
  dataTab.map((data, index) => {
    page.drawText(data, { x: 50, y: 2800 - index * 50, size: 20 });
  });
};
const ButtonDownload = ({
  country,
  border,
}: {
  country: Country;
  border: Country[];
}) => {
  const [downloadUrl, setDownloadUrl] = useState<string>("");

  const handleClick = async (country: Country, borders = border) => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([2100, 2970]);
      drawTextPdf(generateCardText(country, borders), page);
      const pdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(pdfBlob);
      setDownloadUrl(url);
    } catch (error) {
      console.log("Error: can't generate PDF file.");
    }
  };

  useEffect(() => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "example.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [downloadUrl]);

  return (
    <div>
      <button onClick={() => handleClick(country)}>
        Download Country's Card
      </button>
    </div>
  );
};

export default ButtonDownload;

import React, { useState, useEffect } from "react";
import { PDFDocument, PDFPage } from "pdf-lib";
import { generateCardText } from "./GetPDFData";
import { Country } from "@/interfaces/country";
import { HoverAnimation } from "@/app/Animations";

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
      alert("Error: can't generate PDF file for " + country.name.common);
    }
  };

  useEffect(() => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = country.name.common + ".pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [downloadUrl]);

  return (
    <HoverAnimation>
      <div className="button-download">
        <button onClick={() => handleClick(country)}>
          Download country's Card
        </button>
      </div>
    </HoverAnimation>
  );
};

export default ButtonDownload;

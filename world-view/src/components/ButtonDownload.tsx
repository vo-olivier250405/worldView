import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

const ButtonDownload = () => {
  const handleClick = async () => {
    // Créer un nouveau document PDF
    const pdfDoc = await PDFDocument.create();

    // Ajouter une nouvelle page au document
    const page = pdfDoc.addPage([2100, 2970]);

    // Ajouter du texte à la page
    const text = "Hello, world!";
    page.drawText(text, { x: 50, y: 350, size: 300 });

    // Convertir le document PDF en tableau de bytes
    const pdfBytes = await pdfDoc.save();

    // Créer un lien pour télécharger le fichier PDF
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(pdfBlob) as unknown as never;

    // Mettre à jour l'état pour stocker l'URL du PDF généré
    setDownloadUrl(url);
  };

  const [downloadUrl, setDownloadUrl] = useState("");

  // Fonction pour gérer le téléchargement du PDF
  const handleDownload = () => {
    window.open(downloadUrl!, "_blank");
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "example.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      {" "}
      <button onClick={handleDownload}>Télécharger le fichier</button>
    </div>
  );
};

export default ButtonDownload;

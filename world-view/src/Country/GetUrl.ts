import { PDFDocument } from "pdf-lib";

export const handleClick = async () => {
  // Créer un nouveau document PDF
  const pdfDoc = await PDFDocument.create();

  // Ajouter une nouvelle page au document
  const page = pdfDoc.addPage([2100, 2970]);

  // Ajouter du texte à la page
  const text = "Hello, world!";
  page.drawText(text, { x: 0, y: 0, size: 300 });

  // Convertir le document PDF en tableau de bytes
  const pdfBytes = await pdfDoc.save();

  // Créer un objet Blob à partir du tableau de bytes
  const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
  return URL.createObjectURL(pdfBlob);
};

export const url = handleClick();

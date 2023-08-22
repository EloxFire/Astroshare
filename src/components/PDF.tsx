import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../styles/components/pdf.scss'

import type { PDFDocumentProxy } from 'pdfjs-dist';

interface PDFProps {
  path: string
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

type PDFFile = string | File | null;

export default function PDF({ path }: PDFProps) {
  const [file, setFile] = useState<PDFFile>(path);
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className="document__container">
      <Document file={'/images/pdfs/guide.pdf'} onLoadSuccess={onDocumentLoadSuccess} options={options}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
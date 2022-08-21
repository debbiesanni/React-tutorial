import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useEffect } from 'react';

interface Props {
    url: string | unknown;
    width?: number;    
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer({ url, width }:Props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    /*To Prevent right click on screen*/
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const changePage = (offset) => {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    };

    const previousPage = () => {
        changePage(-1);
    };

    const nextPage = () => {
        changePage(1);
    };

    
    return (
        <>
            <div>
                <Document
                    file={url}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={console.error}
                    className="pdfView"
                >
                    <Page width={width} pageNumber={pageNumber} />
                </Document>
            </div>
            
            
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="pagec">
                    Page {pageNumber || (numPages ? 1 : '--')} of{' '}
                    {numPages || '--'}
                </div>
                <div className="buttonc" style={{width: '150px', display: 'flex', justifyContent: 'space-between'}}>
                    <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        className="Pre"
                         style={{border: 'none', backgroundColor: 'blue', color: 'white', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer'}}
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                         style={{border: 'none', backgroundColor: 'blue', color: 'white', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer'}}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

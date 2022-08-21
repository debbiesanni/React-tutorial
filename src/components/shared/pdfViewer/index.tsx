import dynamic from 'next/dynamic';

interface Props {
    url: string;
    width?: number;
}

const PDFReader = ({ url, width }: Props) => {
    const Reader = dynamic(() => import('./reader'), { ssr: false });
    return <Reader width={width} url={url} />; 
};

export default PDFReader;

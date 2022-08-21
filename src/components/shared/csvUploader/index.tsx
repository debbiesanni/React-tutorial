import { useState } from 'react';
import useGlobalStyle from '../../../styles';
import useStyle from './style';

interface Props {
    id: string;
    file?: boolean;
    setImage?: Function;
    defaultCsv?: any;
    onChange?: Function;
}
export default function CSVUpload({
    id,
    file,
    setImage,
    defaultCsv,
    onChange,
}: Props): JSX.Element {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [csvUrl, setCsvUrl] = useState(defaultCsv ? `${defaultCsv}` : null);

    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.justifyCenter} ${globalStyle.top1rem} ${globalStyle.bottom1rem}`}
        >
            <div
                className={`${globalStyle.cursor} ${globalStyle.border} ${style.holder} ${globalStyle.alignItems} ${globalStyle.displayFlex} ${globalStyle.justifyCenter} `}
            >
                <input
                    type="file"
                    style={{ cursor: 'pointer' }}
                    id={id}
                    accept=".csv"
                    onChange={(e) => onChange(e)}
                />
            </div>
        </div>
    );
}

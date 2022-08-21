import { useState } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import useGlobalStyle from '../../../styles';
import useStyle from './style';
import Image from '../../shared/image';
import { uploadFile } from '../../../utils';

interface Props {
    id: string;
    setOptions?: Function;
    defaultImage?: any;
    options?: any;
    index?: number;
}
export default function ImageUpload({
    id,
    defaultImage,
    setOptions,
    options,
    index,
}: Props): JSX.Element {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [imageUrl, setImageUrl] = useState(
        defaultImage ? `${defaultImage}` : null
    );
    const openFile = () => {
        document.getElementById(id).click();
    };

    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.justifyCenter} ${globalStyle.top1rem} ${globalStyle.bottom1rem}`}
        >
            <input
                type="file"
                style={{ display: 'none' }}
                id={id}
                onChange={async (e) => {
                    options[index].image = await uploadFile(e);
                    setOptions([...options]);
                    setImageUrl(window.URL.createObjectURL(e.target.files[0]));
                    window.URL.revokeObjectURL(imageUrl);
                }}
            />
            <div
                onClick={() => openFile()}
                className={`${globalStyle.cursor} ${globalStyle.border} ${style.holder} ${globalStyle.alignItems} ${globalStyle.displayFlex} ${globalStyle.justifyCenter} `}
            >
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt="images"
                        width="300px"
                        height="140px"
                    />
                ) : (
                    <ImageIcon className={style.iconFont} />
                )}
            </div>
        </div>
    );
}

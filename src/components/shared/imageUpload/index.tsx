import { useState } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import FileCopy from '@material-ui/icons/FileCopy';
import useGlobalStyle from '../../../styles';
import useStyle from './style';
import Image from '../image';

interface Props {
    id: string;
    file?: boolean;
    setImage?: Function;
    defaultImage?: any
}
export default function ImageUpload({
    id,
    file,
    setImage,
    defaultImage
}: Props): JSX.Element {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [imageUrl, setImageUrl] = useState(defaultImage ? `${defaultImage}` : null);
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
                onChange={async (e) => {
                    setImage(e);
                    setImageUrl(window.URL.createObjectURL(e.target.files[0]));
                    window.URL.revokeObjectURL(imageUrl);
                }}
                id={id}
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
                        height="300px"
                    />
                ) : file ? (
                    <FileCopy className={style.iconFont} />
                ) : (
                    <ImageIcon className={style.iconFont} />
                )}
            </div>
        </div>
    );
}

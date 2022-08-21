import { useState } from 'react';
import useGlobalStyle from '../../styles';
import Image from '../shared/imageUpload';
import OptionImage from './imageUpload';
interface Props {
    id: string;
    setImage?: Function;
    setShow?: Function;
    show?: boolean;
    setOptions?: Function;
    defaultImage?: any;
    options?: [];
    index?: number;
}
export default function SolutionContent({
    id,
    setImage,
    setShow,
    show,
    defaultImage,
    setOptions,
    options,
    index,
}: Props): JSX.Element {
    const globalStyle = useGlobalStyle();
    return (
        <div>
            <div
                className={`${globalStyle.textAlignRight} ${globalStyle.cursor} ${globalStyle.bottom2px}`}
            >
                <strong onClick={() => setShow(!show)}>
                    {show ? 'Remove' : 'Add'} Image
                </strong>
            </div>
            {show &&
                (index || options ? (
                    <OptionImage
                        id={id}
                        setOptions={setOptions}
                        defaultImage={defaultImage}
                        options={options}
                        index={index}
                    />
                ) : (
                    <Image
                        id={id}
                        setImage={setImage}
                        defaultImage={defaultImage}
                    />
                ))}
        </div>
    );
}

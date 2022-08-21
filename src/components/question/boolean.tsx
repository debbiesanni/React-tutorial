import { useState } from 'react';
import useGlobalStyle from '../../styles';

interface Props {
    createForm?: any;
}

export default function CentreContact({ createForm }: Props) {
    const globalStyle = useGlobalStyle();
    const [answer, setAnswer] = useState(createForm.values.answer);
    function boolean(value) {
        setAnswer(value);
        createForm.values.answer=value;
    }
    return (
        <div className={globalStyle.bottom1rem}>
            <div
                onClick={() => boolean(true)}
                className={`${globalStyle.padding1rem} ${
                    globalStyle.optionHover
                } ${
                    answer === true
                        ? globalStyle.clickedOption
                        : globalStyle.border
                } ${globalStyle.top1rem}`}
            >
                True
            </div>
            <div
                onClick={() => boolean(false)}
                className={`${globalStyle.padding1rem} ${
                    globalStyle.optionHover
                } ${
                    answer === false
                        ? globalStyle.clickedOption
                        : globalStyle.border
                } ${globalStyle.top1rem}`}
            >
                False
            </div>
        </div>
    );
}

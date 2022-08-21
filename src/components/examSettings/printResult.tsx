import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import useGlobalStyle from '../../styles';
import Participant from '../result/script';
interface Props {
    centreId?: string;
    examId?: string;
    answer?: any;
    token?: string;
}
export default function PrintResult({
    centreId,
    examId,
    answer,
    token,
}: Props) {
    const globalStyle = useGlobalStyle();
    const componentRef = useRef();

    return (
        <div>
            <ReactToPrint
                trigger={() => (
                    <div className={`${globalStyle.dropdown}`}>
                        Print Result
                    </div>
                )}
                content={() => componentRef.current}
            />
            <div ref={componentRef}>
                <Participant
                    centreId={centreId}
                    examId={examId}
                    answer={answer}
                    token={token}
                />
            </div>
        </div>
    );
}

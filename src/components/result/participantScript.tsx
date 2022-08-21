import useGlobalStyle from '../../styles';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Script from './script';
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

interface Props {
    answer: any;
    examId: string;
    token: string;
    centreId: string;
    surname: string;
    firstname: string;
}

export default function CentreContact({
    answer,
    examId,
    token,
    centreId,
    surname,
    firstname
}: Props) {
    const globalStyle = useGlobalStyle();
    const { closeDialog, openDialog, isOpen } = useDialog();
    const componentRef = useRef();

    const addContent = (
        <div>
            <ReactToPrint
                trigger={() => (
                    <h4
                        className={`${globalStyle.cursor} ${globalStyle.primaryColor} ${globalStyle.bottom1rem}`}
                    >
                        Print Result
                    </h4>
                )}
                content={() => componentRef.current}
            />
            <div ref={componentRef}>
                <h2 style={{textAlign: 'center', marginBottom: 10}}>{surname} {firstname}</h2>
                <Script
                    centreId={centreId}
                    examId={examId}
                    answer={answer}
                    token={token}
                />
            </div>
        </div>
    );
    return (
        <div>
            <div onClick={() => openDialog()} className={globalStyle.dropdown}>
                Participant Script
            </div>
            <Dialog
                content={addContent}
                open={isOpen}
                handleClose={closeDialog}
                title={`${surname} ${firstname} Script`}
                size="lg"
                buttons={[
                    {
                        value: 'Cancel',
                        onClick: () => closeDialog(),
                    },
                ]}
            />
        </div>
    );
}

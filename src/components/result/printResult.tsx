import { useState } from 'react';
import useGlobalStyle from '../../styles';
import useDialog from '../dialog/index.old';

export default function CentreContact() {
    const globalStyle = useGlobalStyle();
    const { Dialog, open } = useDialog();
    const addContect = <div>Script</div>;
    return (
        <div>
            <div
                className={`${globalStyle.dropdownList} ${globalStyle.top5px}`}
                onClick={() => open(true)}
            >
                Print Result
            </div>
            <Dialog content={addContect} title="Print Script" size="sm" />
        </div>
    );
}

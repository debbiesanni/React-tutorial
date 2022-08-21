import React, { Fragment } from 'react';
import Doctor from '../../../../public/media/images/default/industry1.svg';
import Nurse from '../../../../public/media/images/default/industry2.svg';
import Retailer from '../../../../public/media/images/default/industry4.svg';
import useGlobalStyle from '../../../styles';
import {HideSmDown, HideMdUp} from '../../hide'
import useStyle from './style';
import Image from '../../shared/image';

export default function MadeForAll() {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const madeForAlls = [
        { image: Nurse, name: ' Human Resources' },
        { image: Doctor, name: 'Education' },        
        { image: Retailer, name: 'Research' },
    ];

    return (
        <Fragment>
            <h1 className={`${globalStyle.top1rem} ${style.title}`}>Safety and security guaranteed.
</h1>
            <div className={`${globalStyle.top1rem} ${style.description}`}>
            At Contentionary, we take security seriously, so data on our platform is 100% secure.
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.mt2rem}`}
            >
                {madeForAlls.map((madeForAll, index) => (
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.textAlignCenter} ${style.card}`}
                        key={index}
                    >
                        <div>
                            
                            <HideMdUp>
                                <Image
                                    src={madeForAll.image}
                                    alt={madeForAll.name}
                                    height="48.39px"
                                    width="50px"
                                />
                            </HideMdUp>
                            <HideSmDown>
                                <Image
                                    src={madeForAll.image}
                                    alt={madeForAll.name}
                                    height="87px"
                                    width="84.19px"
                                />
                            </HideSmDown>
                        </div>
                        <h2 className={`${globalStyle.blackColor} ${style.name}`}>
                            {madeForAll.name}
                        </h2>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

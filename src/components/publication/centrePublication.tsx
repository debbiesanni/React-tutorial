import useGlobalStyle from '../../styles';
import { useState, useEffect } from 'react';
import Card from '../card/publication';
import useStyle from './style';
import Link from '../shared/link';
import Addbtn from './add';
import { useAppSelector } from '@redux/hooks';
import { Auth } from '../../utils';

interface Props {
    user?: any;
    centreId?: string;
    className?: any;
    publicationSlider?: any;
    centrePrivate: boolean;
}

export default function PublicationPage({
    user,
    centreId,
    className,
    publicationSlider,
    centrePrivate,
}: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [currentWidth, setCurrentWidth] = useState<number>();

    useEffect(() => {
        setCurrentWidth(window.innerWidth);
    }, []);

    const { publications } = useAppSelector(
        ({ publication }) => publication.centrePublications
    );

    return (
        <div
            className={`${globalStyle.paddingLR1rem} ${className} ${
                currentWidth >= 400 &&
                currentWidth <= 600 &&
                globalStyle.zeroMargin
            }`}
        >
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                {Auth(user).isManager(centreId) && (
                    <Addbtn centreId={centreId} />
                )}
                {publications?.length > 1 ? (
                    <Link
                        text="View More"
                        link={`/centre/${centreId}/publications`}
                        className={`${globalStyle.primaryColor} ${style.linkStyle}`}
                    />
                ) : null}
            </div>
            <div
                className={`${publicationSlider} ${
                    currentWidth >= 400 &&
                    currentWidth <= 600 &&
                    globalStyle.mediumWidth
                }`}
            >
                {publications.length > 0 && (
                    <div
                        className={`${globalStyle.mt2rem} ${
                            style.centrePublication
                        } ${
                            currentWidth >= 400 &&
                            currentWidth <= 600 &&
                            globalStyle.centrePublicationMediumWidth
                        }`}
                    >
                        {publications?.map((content, index) => {
                            return (
                                index + 1 <= 6 && (
                                    <div
                                        key={index}
                                        className={`flex25 ${globalStyle.bottom1rem}`}
                                    >
                                        <Card
                                            publication={content}
                                            index={index}
                                            centreId={centreId}
                                            centrePrivate={centrePrivate}
                                        />
                                    </div>
                                )
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

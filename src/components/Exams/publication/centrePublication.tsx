import { postContent, session } from '@utils/index';
import useGlobalStyle from '../../../styles';
import Card from '../../card/publication';
import NoContent from '@components/shared/noContent';
import Addbtn from './add';
import useStyle from './style';
import { Auth } from 'utils';
import { useState, useEffect } from 'react';
import Loading from '../../shared/isLoading';
import Toast from '../../shared/toast';
import { UserProps } from 'redux/slice/user';

interface Props {
    sliderToShow?: any;
    user?: UserProps;
    centreId?: string;
    examId: string;
    publicationIds: any;
    centrePrivate?: boolean;
}

export default function PublicationPage({
    sliderToShow,
    user,
    centreId,
    examId,
    publicationIds,
    centrePrivate,
}: Props) {
    const globalStyle = useGlobalStyle();
    const [isLoading, setIsLoading] = useState(false);
    const style = useStyle();
    const [examPublication, setExamPublication] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const publicationIdsData = { publicationIds: publicationIds };
        setIsLoading(true);
        postContent({ url: `/custom-publications`, data: publicationIdsData })
            .then((publication) => setExamPublication(publication?.data))
            .catch((err) => setMessage(err));
        setIsLoading(false);
    }, [publicationIds]);

    return (
        <div className={globalStyle.paddingLR1rem}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                {Auth(user).isManager(centreId) ? (
                    <Addbtn examId={examId} />
                ) : (
                    <div></div>
                )}
            </div>

            <div className={`${globalStyle.mt2rem}`}>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        {examPublication.length > 0 ? (
                            <div className={`${style.centrePublication}`}>
                                {examPublication?.map((content, index) => (
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
                                ))}
                            </div>
                        ) : (
                            <NoContent name="publication" />
                        )}
                    </>
                )}
            </div>
            <Toast message={message} />
        </div>
    );
}

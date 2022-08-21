import { useRouter } from 'next/router';
import useGlobalStyle from '../../styles';
import useStyle from '../centre/style';
import Tab from './tab';
import KeyValuePair from '../shared/keyValuePair';
import Reviews from '../review';
import Link from '../shared/link';
import Delete from '../shared/delete';
import Subscribe from './subscribe';
import { formatEventDate } from '../../utils';
import { UserProps } from 'redux/slice/user';
import { auth } from 'utils';
import { useState, useEffect } from 'react';
import Toast from '../shared/toast';
import ImageUpload from '../shared/imageUpdate';
import { Auth } from '../../utils';
import ShareButton from '../shared/share';
export interface CentreProps {
    id: string;
    name: string;
    slug: string;
    image: string | null;
    backgroundImage: string | null;
    description: string;
    examCount: number;
    leagueCount: number;
    rating: number;
    price: number;
    questionCount: number;
    videoCount: number;
    audioCount: number;
    bookCount: number;
    subscriberCount: number;
    allowJoinRequest: boolean;
    isPrivate: boolean;
    address: string;
    emailAddress: string;
    phoneNumber: string;
    websiteUrl: string;
    createdAt: Date;
    updatedAt: Date;
    centreId: string;
    user: UserProps;
    hasPin: boolean;
    errorMessage: any;
    similarExam: any;
    courseIds: string;
    publicationIds: string;
    centre: any;
    referralCode: string;
    endDate: any;
    startDate: any;
    maxTrialQuestions: number;
}
export default function SingleExam({
    id,
    name,
    slug,
    image,
    centreId,
    rating,
    description,
    questionCount,
    subscriberCount,
    price,
    allowJoinRequest,
    isPrivate,
    address,
    emailAddress,
    phoneNumber,
    websiteUrl,
    createdAt,
    updatedAt,
    user,
    hasPin,
    errorMessage,
    similarExam,
    courseIds,
    publicationIds,
    centre,
    referralCode,
    endDate,
    startDate,
    maxTrialQuestions,
}: CentreProps) {
    const { query } = useRouter();
    const embedId = query.embedId ? query.embedId : null;
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState<string>();
    const router = useRouter();
    useEffect(() => {
        setUrl(window.location.href);
    }, []);
    return (
        <>
            <div className={globalStyle.bottom1rem}>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.flexWrp}`}
                >
                    <div style={{ width: 200 }}>
                        <div
                            className={`${globalStyle.bottom1rem} ${style.price}`}
                        >
                            PRICE: {price ? `# ${price}` : 'Free'}
                        </div>
                        <ImageUpload
                            id={centreId}
                            user={user}
                            defaultImage={image}
                            url={`/centre/${centreId}/exam/${id}/update-image`}
                            height="100%"
                            width="100%"
                        />
                    </div>
                    <div style={{ marginLeft: 20, position: 'relative' }}>
                        <h2 className={style.title}>{name}</h2>
                        <div
                            className={`${globalStyle.greyColor} ${globalStyle.cursor}`}
                            onClick={() => router.push(`/${centre?.slug}`)}
                        >
                            <strong className={globalStyle.blackColor}>
                                Centre Name:{' '}
                            </strong>{' '}
                            {centre?.name}
                        </div>

                        <div
                            className={`${globalStyle.greyColor} ${globalStyle.top5px}`}
                        >
                            <strong className={globalStyle.blackColor}>
                                Exam Id:{' '}
                            </strong>{' '}
                            {id}
                        </div>
                        <div
                            className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.top5px}`}
                        >
                            <span className={globalStyle.mr1rem}>
                                <strong>Start Time:</strong>
                                {formatEventDate(startDate)}
                            </span>{' '}
                            / 
                            <span> 
                                <strong>End Time:</strong>
                                {formatEventDate(endDate)}
                            </span>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <div className={`${globalStyle.displayFlex}`}>
                                <KeyValuePair
                                    text="Subscribers"
                                    count={subscriberCount}
                                />
                                <div style={{ marginLeft: 120 }}>
                                    <KeyValuePair
                                        text="Questions"
                                        count={questionCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.top5px}`}
                >
                    {Auth(user).isExamSubscriber(id as string) ||
                    Auth(user).isManager(centreId) ||
                    Auth(user).isOwner(centreId) ? (
                        <Link
                            text="Take Exam"
                            link={`/${centre?.slug}/${centreId}/${slug}/${id}/take-exam`}
                            className={`${globalStyle.mr1rem} ${globalStyle.btn} ${globalStyle.primaryColor} ${globalStyle.bgBorder}`}
                        />
                    ) : (
                        <button
                            className={`${globalStyle.mr1rem} ${globalStyle.btn} ${globalStyle.primaryColor} ${globalStyle.bgBorder}`}
                            style={{
                                border: 'none',
                                cursor: 'pointer',
                                marginRight: '1rem',
                                borderRadius: 0,
                            }}
                            onClick={() =>
                                setMessage(
                                    'You need to subscribe to this exam before you can take this exam'
                                )
                            }
                        >
                            Take Exam
                        </button>
                    )}

                    {(auth.isOwner(centreId, user?.ownCentres) ||
                        auth.isManager(centreId, user?.managingCentres)) && (
                        <Link
                            text="Customize Exam"
                            link={`/${centre?.slug}/${centreId}/${slug}/${id}/manage-exam/0/general`}
                            className={`${globalStyle.btn} ${globalStyle.primaryColor} ${globalStyle.bgBorder} ${globalStyle.ml2rem}`}
                        />
                    )}
                    {(!auth.isOwner(centreId, user?.ownCentres) ||
                        !auth.isManager(centreId, user?.managingCentres)) && (
                        <div>
                            <Subscribe
                                className={` ${globalStyle.ml1rem} ${globalStyle.btn}`}
                                user={user}
                                hasPin={hasPin}
                                id={id}
                                referralCode={referralCode}
                                redirect={`${centre.slug}/${centreId}/${slug}/${id}/view-exam`}
                            />
                        </div>
                    )}
                    {(auth.isOwner(centreId, user?.ownCentres) ||
                        auth.isManager(centreId, user?.managingCentres)) && (
                        <div
                            style={{ color: 'red' }}
                            className={globalStyle.ml2rem}
                        >
                            <Delete
                                name="Exam"
                                icon={true}
                                url={`/centre/${centreId}/exam/${id}`}
                                routerBack={true}
                            />
                            Delete
                        </div>
                    )}
                    <ShareButton
                        name={name}
                        url={`${url}?referralCode=${user?.id}`}
                        description={description}
                    />
                </div>
            </div>
            <Tab
                description={description}
                id={id}
                courseIds={courseIds}
                publicationIds={publicationIds}
                centreId={centreId}
                user={user}
                centrePrivate={centre?.isPrivate}
            />
            <Reviews id={id} />
            {message && <Toast message={message} />}
        </>
    );
}

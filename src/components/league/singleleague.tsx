import useGlobalStyle from '../../styles';
import useStyle from '../centre/style';
import Tab from './tab';
import ImageUpload from '../shared/imageUpdate';
import Edit from './update';
import DeleteForever from '../shared/delete';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import IconButton from '@material-ui/core/IconButton';
import { useEffect, useState } from 'react';
import JoinLeague from './subscribe';
import Reviews from '../review';
import { UserProps } from 'redux/slice/user';
import { auth, session } from 'utils';
import ShareButton from '../shared/share';
import { formatEventDate } from '../../utils';
import { useRouter } from 'next/router';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';

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
    startDate: Date;
    endDate: Date;
    updatedAt: Date;
    centreId: string;
    code: string;
    centreSlug: string;
    isSearchable: boolean;
    forumId: string;
    user: UserProps | any;
    exams: any;
    subscribers: any;
    activities: any;
    participants: any;
    leagues: any;
    referralCode?: string;
}

export default function SingleLeague({
    id,
    forumId,
    name,
    code,
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
    endDate,
    startDate,
    centreSlug,
    isSearchable,
    user,
    exams,
    subscribers,
    participants,
    activities,
    leagues,
    referralCode,
}: CentreProps) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [url, setUrl] = useState<string>();
    const router = useRouter();

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    user = user || session.get('user');

    const displayContent = (
        <div className={`${globalStyle.fullWidthSlider}`}>
            <ShareButton
                name={name}
                url={`${url}?referralCode=${user?.id}`}
                description={description}
            />
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${style.reversecol}`}
            >
                <div className={style.width70} style={{ marginRight: 20 }}>
                    <h2 className={style.title}>{name}</h2>
                    <div
                        className={`${globalStyle.greyColor} ${globalStyle.top5px}`}
                    >
                        <strong className={globalStyle.blackColor}>
                            League Id:{' '}
                        </strong>{' '}
                        {id}
                    </div>
                    <div
                        className={`${globalStyle.greyColor} ${globalStyle.top5px}`}
                    >
                        <strong className={globalStyle.blackColor}>
                            League Code:{' '}
                        </strong>{' '}
                        {code}
                    </div>
                    {(auth.isOwner(centreId, user?.ownCentres) ||
                        auth.isManager(centreId, user?.managingCentres)) && (
                        <div
                            style={{
                                border: '0.5px solid #F57E27',
                                width: 400,
                                textAlign: 'center',
                                paddingBottom: 10,
                                paddingRight: 10,
                                marginTop: 30,
                            }}
                            className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.top5px} ${globalStyle.justifySpaceBtw}`}
                        >
                            <div>
                                <Edit
                                    centreId={centreId}
                                    leagueId={id}
                                    name={name}
                                    description={description}
                                    endDate={endDate}
                                    startDate={startDate}
                                    isSearchable={isSearchable}
                                    isPrivate={isPrivate}
                                    price={price}
                                />
                                Edit
                            </div>
                            <div>
                                <DeleteForever
                                    name="League"
                                    icon={true}
                                    url={`/centre/${centreId}/league/${id}`}
                                    routerBack={true}
                                />
                                Delete
                            </div>
                            <div>
                                <IconButton
                                    onClick={() =>
                                        router.push(
                                            `/${centreSlug}/${centreId}/${slug}/${id}/subscribers`
                                        )
                                    }
                                >
                                    <PeopleOutline
                                        className={globalStyle.greyColor}
                                    />
                                </IconButton>
                                <br></br>
                                Add Participants
                            </div>
                            <div>
                                <IconButton
                                    onClick={() =>
                                        router.push(
                                            `/${centreSlug}/${centreId}/${slug}/${id}/certificate?contentType=LEAGUE`
                                        )
                                    }
                                >
                                    <SettingsOutlined
                                        className={globalStyle.greyColor}
                                    />
                                </IconButton>
                                <br></br>
                                Manage Certificate
                            </div>
                        </div>
                    )}

                    <div className={` ${globalStyle.top1rem}`}>
                        <Tab
                            description={description}
                            centreId={centreId}
                            leagueId={id}
                            forumId={forumId}
                            user={user}
                            exams={exams}
                            subscribers={subscribers}
                            participants={participants}
                            activities={activities}
                        />
                    </div>

                    <Reviews id={id} />
                </div>
                <div
                    className={style.width27}
                    style={{ border: '1px solid #F5F5F5' }}
                >
                    <ImageUpload
                        id={centreId}
                        user={user}
                        defaultImage={image}
                        url={`/centre/${centreId}/league/${id}/update-image`}
                        height="100%"
                        width="100%"
                    />
                    <div style={{ padding: 20 }}>
                        <span
                            className={`${globalStyle.bottom1rem} ${style.price}`}
                        >
                            PRICE: {price ? `# ${price}` : 'Free'}
                        </span>
                        <div
                            style={{
                                color: '#555555',
                                marginTop: 20,
                                fontSize: 16,
                                fontWeight: 500,
                            }}
                        >
                            Subscribers ( {subscriberCount} )
                        </div>
                        <div className={globalStyle.top1rem}>
                            <strong>Start Time:</strong>{' '}
                            {formatEventDate(startDate)}
                        </div>
                        <div className={globalStyle.top1rem}>
                            <strong>End Time:</strong>{' '}
                            {formatEventDate(endDate)}
                        </div>
                        {(!auth.isOwner(centreId, user?.ownCentres) ||
                            !auth.isManager(
                                centreId,
                                user?.managingCentres
                            )) && (
                            <JoinLeague
                                centreId={centreId}
                                user={user}
                                id={id}
                                referralCode={referralCode}
                            />
                        )}{' '}
                    </div>
                </div>
            </div>
        </div>
    );
    return displayContent;
}

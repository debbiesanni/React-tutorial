import useStyle from './style';
import { UserProps } from 'redux/slice/user';
import useGlobalStyle from '../../styles';
import Profile from '../profile/shortProfile';
import LinkComponent from '../shared/link';
import Image from '../shared/image';
import { useState, useEffect } from 'react';
import AddCentre from '../createCentreMobile';
import { session, getServerData } from '../../utils';

interface Props {
    user: UserProps;
    myCentres?: Array<object>;
}

export default function Sidenav({ user, }: Props) {
    const userDetails = user || session.get('user');
    const isLoggedIn = userDetails ? true : false;
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const [message, setMessage] = useState('')
    const [listCentres, setListCentres] = useState<any>();

    useEffect(() => {
        const getMyCentres = async () => {
            try {
                const data = await getServerData(`/my-centres`);
                setListCentres(data);
            } catch ({ message }) {
                setMessage(message);
            }
        }
        getMyCentres();
    },[])

    function ContentAndLink(content, contentStyle, linkText, linkStyle, link="",) {
        return (
            <div>
                <p className={contentStyle}>{content}</p>
                <LinkComponent
                    text={linkText}
                    link={link}
                    className={linkStyle}
                />
            </div>
        )
    }

    function ImageAndLink(link, linkName, src, walletContainer) {
        return (
            <div className={walletContainer}>
                <Image
                    src={src}
                    alt={linkName}
                    height="24px"
                    width="24px"
                />
                <LinkComponent
                    text={linkName}
                    link={link}
                    className={style.wallet}
                />
            </div>
        )
    }
    
    return (
        <div className={style.container}>
            <div className={`${style.border} ${style.firstSideNav}`}>
                <Profile
                    className={`${globalStyle.flexColumn}`}
                    user={userDetails}
                /> 
                {isLoggedIn && (
                    <div
                        className={`${style.links} ${globalStyle.boldFont} ${style.font15}`}
                        style={{padding: 0}}
                    >
                        <div className={style.createAcentreContainer}>
                            <AddCentre createCentre listCentres={listCentres?.data?.centres} setListCentres={setListCentres} myCentresReload={true} />
                        </div>
                        {ImageAndLink('/wallet', 'Wallet', '/media/images/default/wallet.svg', style.walletContainer)}
                        
                    </div>
                )}
            </div>
            <div 
                className={`${style.border} ${globalStyle.top1rem} ${style.secondSideNav}`}
            >
                <div className={style.joinPremiumCentreContainer}>
                    <AddCentre joinpremium />
                </div>
                <div className={style.mySubscriptionContainer}>
                    {ContentAndLink('Access all contents and exams you are subscribed for', style.mySubscriptionParagraph, 'My Subcriptions', style.mySubscription, '/my-subscription', )}
                </div>
                <div className={style.iconContainer}>
                    {ImageAndLink('/my-exams', 'My Exams', '/media/images/default/edit.svg',style.walletContainer)}
                    {ImageAndLink('/my-leagues', 'My Leagues', '/media/images/default/trophy.svg', style.walletSubContainer)}
                </div>
                <div className={style.iconContainer}>
                    {ImageAndLink('/my-online-courses', 'My Online Courses', '/media/images/default/youtube.svg',style.walletContainer)}
                    {ImageAndLink('/my-publications', 'My Publications', '/media/images/default/bookmark.svg', style.walletSubContainer)}
                </div>
                <div className={style.iconLastContainer}>
                    {ImageAndLink('/my-result', 'My Result', '/media/images/default/checkCircle.svg',style.walletContainer)}
                </div>
            </div>
        </div>
    );
}

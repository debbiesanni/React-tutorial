import useGlobalStyle from '../../styles';
import useStyle from './style';
import MyCentre from '../centre/myCentreSlider';
import { useRouter } from 'next/router';
import Dropdown from '@components/shared/dropdown/menu';
import { useEffect, useState } from 'react';
import { getServerData, postContent } from '../../utils';
import Button from '../button';
import useModal from '@hooks/useDialog';
import Toast from '../shared/toast';
import AccountDetails from './accountDetails';
import UsingCentre from './usingAcentre';
import Loading from '../shared/isLoading';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { session } from '../../utils';
import AddCentre from '../centre/add';
import tawkTo from 'tawkto-react';
import moment from 'moment';

export default function LoginContent({ myCentres, user, invitationExam }) {
    const userDetails = session.get('user');
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const router = useRouter();
    const { openDialog } = useModal();
    const [listCentres, setListCentres] = useState(myCentres?.data?.centres);
    const [isLoading, setIsLoading] = useState(false);
    const [closeMessage, setCloseMessage] = useState(false);
    const [closeAlert, setCloseAlert] = useState(false);
    const [closeExamInvitation, setCloseExamInvitation] = useState<number>()
    const [message, setMessage] = useState('');
    const tawkToPropertyId = '60f9ace2649e0a0a5ccd7bae';
    const tawkToKey = '1fb7kmnvj';
    
    useEffect(() => {
        {
            !myCentres && openDialog();
        }
        tawkTo(tawkToPropertyId, tawkToKey);
    }, [myCentres]);
    

    const closeVerification = () => {
        setCloseAlert(true);
    };

    const sendVerification = async () => {
        setMessage('');
        try {
            setIsLoading(true);
            const { message } = await postContent({
                url: `/auth/verification/email`,
                data: { email: userDetails.email },
            });
            setIsLoading(false);
            setMessage(message);
        } catch ({ message }) {
            setMessage(message);
        }
    };

    const tabSettings = {
        centre: [3, 2, 1, 1],
    };
    const sliderPadding = {
        sliderPadding: '20px',
        mdSliderPadding: '70px',
        smSliderPadding: '70px',
        xsSliderPadding: '20',
    };

    async function getCentres(url) {
        setMessage('');
        try {
            const { data } = await getServerData(`/${url}`);
            setListCentres(data?.centres);
        } catch ({ message }) {
            setMessage(message);
        }
    }

    const associatedWithText = [
        { name: 'My Centre; As the Creator', url: 'my-centres' },
        { name: 'My Centre; As a Manager', url: 'my-managing-centres' },
        { name: 'My Centre; As a Subscriber', url: 'subscribed-centres' },
    ];

    const invitationData = [
        {
            new: true,
            name: 'Indorama Centre',
            exam: 'Management Trainee exam',
            date: '11/2/2021',
            time: '2pm',
        },
        {
            name: 'Indorama Centre',
            exam: 'Management Trainee exam',
            date: '11/2/2021',
            time: '2pm',
        },
        {
            name: 'Indorama Centre',
            exam: 'Management Trainee exam',
            date: '11/2/2021',
            time: '2pm',
        },
    ];

    const centreAssociatedWith = (url, text) => {
        return (
            <div
                onClick={() => {
                    getCentres(url);
                }}
                className={`${style.myCentres}`}
            >
                {text}
            </div>
        );
    };

    const displayContent = (
        <div className={`${style.loginHeader}`}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems} ${globalStyle.bottom1rem}`}
            >
                <strong className={`${style.font17} ${style.welcomeTitle}`}>
                    Welcome to your Dashboard
                </strong>
            </div>

            {userDetails?.status === 'UNVERIFIED' && (
                <div
                    className={
                        closeAlert
                            ? style.closeAlertMessage
                            : style.verificationContainer
                    }
                >
                    <div className={style.vericationAlert}>
                        <div className={style.newVerification}>new</div>
                        <p>
                            Your account hasn't been verified. Please click the
                            button below to get verification link sent to your
                            inbox or spam
                        </p>
                        <Button
                            size="large"
                            className={style.verificationCloseButton}
                            style={{ textTransform: 'none' }}
                            onClick={() => closeVerification()}
                        >
                            X
                        </Button>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            size="large"
                            onClick={() => sendVerification()}
                            className={style.verificationSendButton}
                            style={{ textTransform: 'none' }}
                        >
                            Send Verification {isLoading && <Loading />}
                        </Button>
                    </div>
                </div>
            )}

            <div style={{marginBottom: '3rem'}}>
                {invitationExam?.data.examInvitations.map((invitation, index) => {
                    return (
                        <div className={`${style.invitationContainer} ${index === closeExamInvitation ? style.displayNone : globalStyle.displayFlex}`} key={index}>
                            {invitation.new && <div className={style.newVerification}>new</div>}
                            <p><strong>{invitation.centreName}</strong> invited you for <strong>{invitation.examName}</strong> on <strong>{moment(invitation.startDate).format('MM/DD/YYYY')}</strong> by <strong>{moment(invitation.startDate).format('hh:mm:ss')}</strong> </p>
                            <div>
                                <Button
                                    size="large"
                                    className={style.invitationProceedButton}
                                    style={{textTransform: 'none'}}
                                    onClick={() => router.push(`/${invitation.centreSlug}/${invitation.centreId}/${invitation.examSlug}/${invitation.examId}/take-exam`)}
                                >
                                    Proceed
                                </Button>
                                <Button
                                    size="large"
                                    className={style.invitationCloseButton}
                                    style={{textTransform: 'none'}}
                                    onClick={() => setCloseExamInvitation(index)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div>
                <div style={{ display: 'inline-block' }}>
                    {userDetails && (
                        <Dropdown
                            menuStyle={style.dropDownMenuStyle}
                            menuItemClass={style.menuItemClass}
                            menu={[
                                {
                                    title: (
                                        <div
                                            className={style.myCentresContainer}
                                        >
                                            {associatedWithText.map(
                                                ({ name, url }, index) => {
                                                    return centreAssociatedWith(
                                                        url,
                                                        name
                                                    );
                                                }
                                            )}
                                        </div>
                                    ),
                                    onClick: () => {},
                                },
                            ]}
                        >
                            <Button
                                size="large"
                                className={style.centreAssociatedWith}
                                style={{ textTransform: 'none' }}
                            >
                                Centres Associated With
                                <KeyboardArrowDownIcon />
                            </Button>
                        </Dropdown>
                    )}
                </div>

                {listCentres ? (
                    <>
                        <MyCentre
                            sliderToShow={tabSettings.centre}
                            border={true}
                            sliderPadding={sliderPadding}
                            myCentres={listCentres}
                            className="SliderWidth"
                        />
                    </>
                ) : (
                    <div style={{ marginTop: '2rem' }}>No Centre(s) yet</div>
                )}
            </div>
            <div
                className={`${globalStyle.mt2rem} ${
                    style.alertMessageContainer
                } ${closeMessage && style.closeAlertMessage}`}
            >
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.alignItems}`}
                >
                    <Button
                        size="small"
                        className={style.centreAssociatedWithCancel}
                        style={{
                            textTransform: 'none',
                            fontSize: '10px !important',
                        }}
                        onClick={() => setCloseMessage(true)}
                    >
                        Close
                    </Button>
                </div>
                <p className={`${style.alertMessage}`}>
                    Are you an Examiner or an instructor who wants to screen
                    candidates, host online course to your subscribers, or
                    publish content to the public? Then{' '}
                    <AddCentre
                        textName="Create a centre"
                        textNameClass={`${style.subAlertMessage}`}
                        listCentres={listCentres}
                        setListCentres={setListCentres}
                    />{' '}
                    to begin
                </p>

                <p
                    className={`${style.alertMessage}`}
                    style={{ marginTop: '1rem' }}
                >
                    Or you are here to subscibe to a centre to equip or prepare
                    for a career task? Please visit the{' '}
                    <span
                        className={`${style.subAlertMessage}`}
                        onClick={() => router.push('/market-place')}
                    >
                        Marketplace
                    </span>
                </p>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                >
                    <Button
                        size="small"
                        className={style.centreAssociatedWithOk}
                        style={{ textTransform: 'none' }}
                        onClick={() => setCloseMessage(true)}
                    >
                        OK, GOT IT
                    </Button>
                </div>
            </div>

            {userDetails && (
                <>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems} ${globalStyle.bottom1rem}`}
                    >
                        <strong
                            className={`${style.font17} ${style.accountDetails}`}
                        >
                            Account Details
                        </strong>
                    </div>
                    <AccountDetails user={userDetails} />
                </>
            )}
            <div className={` ${style.freeCentre} ${globalStyle.mt2rem}`}>
                <UsingCentre
                    listCentres={listCentres}
                    setListCentres={setListCentres}
                />
            </div>
            {message && <Toast message={message} />}
        </div>
    );
    return displayContent;
}

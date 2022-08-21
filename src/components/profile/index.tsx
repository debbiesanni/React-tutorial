import useStyles from '../../styles';
import Image from '../shared/image';
import useStyle from './style';
import Link from '../shared/link';
import MyCentres from '../centre/myCentreSlider';
import Exams from '../Exams/publicSlider';
import MyExams from '../Exams/myExamSlider';
import Leagues from '../league/publicSlider';
import MyLeagues from '../league/myLeagueSlider';
import theme from 'styles/theme';
import { session } from 'utils';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Button from '@components/button';
import { useRouter } from 'next/router';
import Tab from './tab';
import { HideSmDown } from '@components/hide';

export default function ProfileLink({ user, myCentres, myExams, myLeagues }) {
    user = JSON.parse(user.user) || session.get('user');
    const globalStyle = useStyles();
    const style = useStyle();
    const router = useRouter();

    return (
        <>
            <div className={`${style.bgOrange}`}>
                <h2
                    className={`${globalStyle.contentWidth} ${globalStyle.primaryColor} ${globalStyle.pt1rem}`}
                >
                    My Profile
                </h2>
                <div
                    className={`${style.card} ${globalStyle.contentWidth} ${globalStyle.mt2rem}`}
                >
                    <div className={globalStyle.contentWidth}>
                        <div
                            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.bottom1rem}`}
                        >
                            <div className={style.imageHolder}>
                                <Image
                                    src={
                                        `${user.avatar}` ||
                                        '/media/images/default/profile.svg'
                                    }
                                    width="200px"
                                    height="150px"
                                    alt={user.firstname}
                                    className={`${style.image}`}
                                />
                                <div className={`${style.font20}`}>
                                    <b>
                                        {user.firstname} {user.surname}
                                    </b>
                                </div>
                                <div>{user.email}</div>
                                <div style={{ marginBottom: 10 }}>
                                    {user.phoneNumber}
                                </div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                        router.push('/settings')
                                    }
                                >
                                    Edit Profile
                                </Button>
                                <div style={{ marginTop: 10 }}>
                                    <Button
                                        className={`${style.btn}`}
                                        onClick={() => router.push('/wallet')}
                                    >
                                        See Wallet <AttachMoney />
                                    </Button>
                                </div>
                            </div>
                            <div
                                className={`${globalStyle.mr1rem} ${style.contentholder}`}
                            >
                                <HideSmDown>
                                    <div
                                        className={`${style.btnCard} ${style.btnCardBg} ${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                                    >
                                        <span className={style.title}>
                                            <b
                                                className={
                                                    globalStyle.primaryColor
                                                }
                                            >
                                                Name
                                            </b>
                                        </span>
                                        <span>:</span>
                                        <span className={style.name}>
                                            {user.firstname} {user.surname}
                                        </span>
                                    </div>
                                    <div
                                        className={`${style.btnCard} ${style.mb15} ${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                                    >
                                        <span className={style.title}>
                                            <b
                                                className={
                                                    globalStyle.primaryColor
                                                }
                                            >
                                                Email
                                            </b>
                                        </span>
                                        <span>:</span>
                                        <span className={style.name}>
                                            {user.email}
                                        </span>
                                    </div>
                                </HideSmDown>
                                <div
                                    className={`${style.btnCard} ${style.btnCardBg} ${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                                >
                                    <span className={style.title}>
                                        <b className={globalStyle.primaryColor}>
                                            Username
                                        </b>
                                    </span>
                                    <span>:</span>
                                    <span className={style.name}>
                                        {user.username}
                                    </span>
                                </div>
                                <div
                                    className={`${style.btnCard} ${style.mb15} ${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                                >
                                    <span className={style.title}>
                                        <b className={globalStyle.primaryColor}>
                                            VerificationStatus
                                        </b>
                                    </span>
                                    <span>:</span>
                                    <span className={style.name}>
                                        {user.status}
                                    </span>
                                </div>
                                <HideSmDown>
                                    <div
                                        className={`${style.btnCard} ${style.btnCardBg} ${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                                    >
                                        <span className={style.title}>
                                            <b
                                                className={
                                                    globalStyle.primaryColor
                                                }
                                            >
                                                Contact
                                            </b>
                                        </span>
                                        <span>:</span>
                                        <span className={style.name}>
                                            {user.phoneNumber}
                                        </span>
                                    </div>
                                </HideSmDown>
                                <div
                                    className={`${style.btnCard} ${style.mb15} ${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                                >
                                    <span className={style.title}>
                                        <b className={globalStyle.primaryColor}>
                                            Gender
                                        </b>
                                    </span>
                                    <span>:</span>
                                    <span className={style.name}>
                                        {user.gender}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${globalStyle.contentWidth} ${globalStyle.mt4rem}`}
            >
                <Tab
                    myCentres={myCentres}
                    exams={myExams}
                    myLeagues={myLeagues}
                />
            </div>
        </>
    );
}

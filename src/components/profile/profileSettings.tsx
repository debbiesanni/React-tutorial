import Bios from './bios';
import Tab from '../shared/tab';
import useGlobalStyle from '../../styles';
import useStyle from '../auth/style';
import ChangePassword from './changePassword';
import EmailChange from './changeEmail';
import { session } from 'utils';
import { HideMdDown } from '@components/hide';

interface Props {
    user?: any;
}

export default function Settings({ user }: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    user = user || session.get('user');
    const tabs = ['Bios Info', 'Password', 'Email'];
    const tabPanel = [
        <Bios user={user} />,
        <ChangePassword />,
        <EmailChange />,
    ];
    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
        >
            <HideMdDown>
                <div
                    style={{ flex: '0 0 32rem' }}
                    className={`${style.welcomeNoteSide} ${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.justifyCenter} ${globalStyle.alignItems}`}
                >
                    <h1 className={globalStyle.colorWhite}> Settings!!!</h1>
                    <h1
                        className={`${style.createWidth} ${globalStyle.mt15px} ${style.color}`}
                    >
                        Contentionary- Equipping the global workforce for better
                        competitiveness
                    </h1>
                    <h2
                        className={`${globalStyle.colorWhite} ${style.createWidth} ${globalStyle.textAlignCenter} ${globalStyle.mt3rem}`}
                    >
                        Join a CENTER to access online courses, preparatory
                        exams questions, templates, slides, worksheets,
                        articles, podcasts, quizzes and lots more.
                    </h2>
                </div>
            </HideMdDown>
            <div className={`${globalStyle.flex1} ${globalStyle.paddingLR1rem}`}>
                <div>
                    <h1
                        className={`${globalStyle.primaryColor} ${globalStyle.mt3rem} ${style.welcomeFont}`}
                    >
                        Welcome
                    </h1>{' '}
                    <h1
                        className={`${globalStyle.greyColor} ${globalStyle.pb2rem}`}
                    >
                        Update Your Profile
                    </h1>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
                    >
                        <Tab
                            tabs={tabs}
                            tabPanel={tabPanel}
                            defaultActive={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

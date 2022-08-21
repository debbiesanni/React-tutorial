import useGlobalStyle from '../../styles';
import useStyle from './style';
import { useRouter } from 'next/router';
import Image from '../shared/image';
import { CheckCircleOutline } from '@material-ui/icons';

function Settings({ index, centreId, centreSlug, slug, id }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const router = useRouter();
    function activeCheck(key) {
        if (index === key) {
            return (
                <CheckCircleOutline
                    color="primary"
                    className={globalStyle.mr5px}
                />
            );
        } else {
            return (
                <Image
                    src={'/media/images/default/circleIcon.svg'}
                    alt="circle"
                    width="18px"
                    height="18px"
                    className={style.mr7px}
                />
            );
        }
    }
    function activeColor(key) {
        if (index === key) {
            return globalStyle.primaryColor;
        } else {
            return globalStyle.blackColor;
        }
    }
    const links = [
        'General Exam Setings',
        'Monitor & Secure Exams',
        ' Preparatory Exam Mode',
        'Add Price to Exam',
        'Add Questions',
        'Subscribers',
        'Results',
        'Invite Candidates',
        'Generate Pins',
        'Manage-Certificate',
        'Proctoring'
    ];
    const pages = [
        'general',
        'monitor',
        'preparatory',
        'price',
        'questions',
        'subscribers',
        'results',
        'invite-candidates',
        'generate-pins',
        'add-certificate',
        'proctoring'
    ];
    return (
        <div className={`${style.sideBody}`}>
            {links.map((link, index) => (
                <div
                    className={`${style.sideNaveText} ${
                        globalStyle.displayFlex
                    } ${globalStyle.alignItems} ${activeColor(index)}`}
                    onClick={() =>
                        router.push(
                            `/${centreSlug}/${centreId}/${slug}/${id}/manage-exam/${index}/${pages[index]}`
                        )
                    }
                >
                    {activeCheck(index)} {link}
                </div>
            ))}
        </div>
    );
}

export default Settings;

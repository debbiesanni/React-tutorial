import useGlobalStyle from '../../styles';
import useStyle from './style';
import { useRouter } from 'next/router';
import Image from '../shared/image';
import { CheckCircleOutline } from '@material-ui/icons';
import DropDown from '../shared/dropdown';
import { Button } from '@material-ui/core';

function Settings({ index, centreId, centreSlug, slug, id }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const router = useRouter();

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
    ];
    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.top1rem}`}
        >
            <DropDown
                style={{ width: 150 }}
                className={`${style.mobileLinks}`}
                trigger={
                    <Button color="primary" variant="contained">
                        Manage Exam
                    </Button>
                }
                content={links.map((link, keyIndex) => (
                    <div key={keyIndex}
                        className={`${style.sideNaveText} ${
                            globalStyle.displayFlex
                        } ${globalStyle.alignItems} ${activeColor(keyIndex)}`}
                        onClick={() =>
                            router.push(
                                `/${centreSlug}/${centreId}/${slug}/${id}/manage-exam/${keyIndex}/${pages[keyIndex]}`
                            )
                        }
                    >
                        {index === keyIndex ? (
                            <CheckCircleOutline
                                color="primary"
                                className={globalStyle.mr5px}
                            />
                        ) : (
                            <Image
                                src={'/media/images/default/circleIcon.svg'}
                                alt="circle"
                                width="18px"
                                height="18px"
                                className={style.mr7px}
                            />
                        )}
                        {link}
                    </div>
                ))}
            />
        </div>
    );
}

export default Settings;

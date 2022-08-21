import useStyle from './style';
import Add from '@material-ui/icons/Add';
import PeopleOutlined from '@material-ui/icons/PeopleOutlined';
import AssessmentOutlined from '@material-ui/icons/AssessmentOutlined';
import GradingOutlined from '@material-ui/icons/GradeOutlined';
import ModeCommentOutlined from '@material-ui/icons/ModeCommentOutlined';
import DomainOutlined from '@material-ui/icons/DomainOutlined';
import ScoreOutlined from '@material-ui/icons/ScoreOutlined';
import RemoveRedEyeOutlined from '@material-ui/icons/RemoveRedEyeOutlined';
import CollectionsBookmarkOutlined from '@material-ui/icons/CollectionsBookmarkOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';
import LineStyleOutlined from '@material-ui/icons/LineStyleOutlined';
import SendOutlined from '@material-ui/icons/SendOutlined';
import { useRouter } from 'next/router';
import { Auth } from '../../../utils/';
import { HideSmDown } from '@components/hide';
import { useState } from 'react';
interface Props {
    centreId: string;
    user: any;
    type?: string;
    centreSlug: string;
}
export default function SideDrawer({
    centreSlug,
    centreId,
    type,
    user,
}: Props) {
    const styles = useStyle();
    const router = useRouter();
    const [show, setShow] = useState(false);

    const examLinks = [
        {
            icon: <CollectionsBookmarkOutlined className={styles.icon} />,
            name: type,
            link: `/${centreSlug}/${centreId}/${type}-plugin`,
        },
    ];
    if (
        type === 'exam' &&
        (Auth(user).isManager(centreId) || Auth(user).isOwner(centreId))
    ) {
        examLinks.push({
            icon: <HelpOutlineOutlined className={styles.icon} />,
            name: 'Questions Banks',
            link: `/${centreSlug}/${centreId}/questionBank`,
        });
    }
    const resultLink = [
        {
            icon: <Add className={styles.icon} />,
            name: 'Add Session',
            link: `/${centreSlug}/${centreId}/sessions`,
        },
        {
            icon: <PeopleOutlined className={styles.icon} />,
            name: 'Add Class',
            link: `/${centreSlug}/${centreId}/classes`,
        },
        {
            icon: <AssessmentOutlined className={styles.icon} />,
            name: 'Assessement',
            link: `/${centreSlug}/${centreId}/assessement`,
        },
        {
            icon: <GradingOutlined className={styles.icon} />,
            name: 'Grades',
            link: `/${centreSlug}/${centreId}/grades`,
        },
        {
            icon: <ModeCommentOutlined className={styles.icon} />,
            name: 'Comments',
            link: `/${centreSlug}/${centreId}/comments`,
        },
        {
            icon: <DomainOutlined className={styles.icon} />,
            name: 'Domains',
            link: `/${centreSlug}/${centreId}/domain`,
        },
        {
            icon: <ScoreOutlined className={styles.icon} />,
            name: 'Add Subjects',
            link: `/${centreSlug}/${centreId}/subjects`,
        },
        {
            icon: <RemoveRedEyeOutlined className={styles.icon} />,
            name: 'Generate Result',
            link: `/${centreSlug}/${centreId}/generate-result`,
        },
        {
            icon: <SendOutlined className={styles.icon} />,
            name: 'Send Result',
            link: `/${centreSlug}/${centreId}/send-result`,
        },
        {
            icon: <SendOutlined className={styles.icon} />,
            name: 'Result Checking codes ',
            link: `/${centreSlug}/${centreId}/result-checking-code`,
        },
    ];
    return (
        <div
            className={`${styles.container} ${
                show ? styles.containerMobile : ''
            }`}
        >
            <div
                className={styles.header}
                onClick={() => setShow((prev) => !prev)}
            >
                <LineStyleOutlined style={{ marginRight: 10 }} />
                <HideSmDown>
                    <span className={show ? '' : styles.drawerLinkName}>
                        {type ? `${type} Creator` : 'Generate Result'}
                    </span>
                </HideSmDown>
            </div>
            {type ? (
                <>
                    {examLinks.map(({ name, icon, link }, index) => (
                        <div
                            key={index}
                            onClick={() => router.push(link)}
                            className={styles.links}
                        >
                            {icon}
                            <HideSmDown>
                                <span
                                    className={
                                        show ? '' : styles.drawerLinkName
                                    }
                                >
                                    {name}
                                </span>
                            </HideSmDown>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    {resultLink.map(({ name, icon, link }, index) => (
                        <div
                            key={index}
                            onClick={() => router.push(link)}
                            className={styles.links}
                        >
                            {icon}
                            <span className={show ? '' : styles.drawerLinkName}>
                                {name}
                            </span>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

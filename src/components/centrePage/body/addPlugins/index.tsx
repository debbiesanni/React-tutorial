import Button from '../../../button';
import { updateServerData } from '../../../../utils';
import Image from '../../../shared/image';
import useStyles from './style';
import HoverCard from '../addPlugins/pluginHoverCard';
import { useState } from 'react';

export default function CentreSingleView({
    setMessage,
    id,
    hasCourse,
    hasExam,
    hasLeague,
    hasPublication,
}) {
    const styles = useStyles();
    const [show, setShow] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    async function AddPlugin(plugin) {
        try {
            await updateServerData({
                url: `/centre/${id}/add-plugin`,
                data: { plugin },
            });
            setMessage('successfully added');
        } catch ({ message }) {
            setMessage(message);
        }
    }
    async function removePlugin(plugin) {
        try {
            await updateServerData({
                url: `/centre/${id}/remove-plugin`,
                data: { plugin },
            });
            setMessage('successfully removed');
        } catch ({ message }) {
            setMessage(message);
        }
    }
    function check(plugin) {
        if (plugin === 'EXAM') {
            return hasExam;
        } else if (plugin === 'COURSE') {
            return hasCourse;
        } else if (plugin === 'PUBLICATION') {
            return hasPublication;
        } else if (plugin === 'LEAGUE') {
            return hasLeague;
        }
    }
    const data = [
        {
            name: 'Exam Creator',
            icon: '/media/images/default/examIcon.svg',
            link: '/',
            description:
                'plugin makes you conduct unlimited proctored exams, set preparatory exams and mocks, permits the selling of prep exams to your subscribers/students',
            height: 105,
            width: 82.42,
            plugin: 'EXAM',
            hoverDescription: [
                'Conduct unlimited remote exams.',
                'Activate Proctored technology',
                'Exam engine supports over 5+ question format (objective, theory, true/false etc).',
                'Set preparatory exams',
                'Conduct Mock exams',
                'Download participant scripts',
                'Download results',
                'Review Participant activities',
            ],
        },
        {
            name: 'Online Course Creator ',
            icon: '/media/images/default/online.svg',
            link: '/',
            description:
                'plugin makes you host unlimited Online courses with your students. These could be pre-recorded vidoes, audio or PDFs. Set courses in Modules and many more.',
            height: 115,
            width: 86,
            plugin: 'COURSE',
            hoverDescription: [
                'Conduct unlimited remote exams.',
                'Activate Proctored technology',
                'Exam engine supports over 5+ question format (objective, theory, true/false etc).',
                'Set preparatory exams',
                'Conduct Mock exams',
                'Download participant scripts',
                'Download results',
                'Review Participant activities',
            ],
        },
        {
            name: 'Publisher ',
            icon: '/media/images/default/publication.svg',
            link: '/',
            description:
                'Use this plugins to sell and share Downloadable contents. Books, journals, notes, templates, woorsheets, projects etc. can be sold easily with this plugin',
            height: 91,
            width: 85,
            plugin: 'PUBLICATION',
            hoverDescription: [
                'Conduct unlimited remote exams.',
                'Activate Proctored technology',
                'Exam engine supports over 5+ question format (objective, theory, true/false etc).',
                'Set preparatory exams',
                'Conduct Mock exams',
                'Download participant scripts',
                'Download results',
                'Review Participant activities',
            ],
        },
        {
            name: 'Competition Generator ',
            icon: '/media/images/default/competition.svg',
            link: '/',
            description:
                'Host online competition among your students. The best online competition generator. Very competitive and interractive',
            height: 106,
            width: 83,
            plugin: 'LEAGUE',
            hoverDescription: [
                'Conduct unlimited remote exams.',
                'Activate Proctored technology',
                'Exam engine supports over 5+ question format (objective, theory, true/false etc).',
                'Set preparatory exams',
                'Conduct Mock exams',
                'Download participant scripts',
                'Download results',
                'Review Participant activities',
            ],
        },
        {
            name: 'Certificate Generator',
            icon: '/media/images/default/certificate.svg',
            link: '/',
            description:
                'Generate Certification for your students who have completed a course.',
            height: 119,
            width: 94,
            plugin: 'CERTIFICATE',
            hoverDescription: [
                'Conduct unlimited remote exams.',
                'Activate Proctored technology',
                'Exam engine supports over 5+ question format (objective, theory, true/false etc).',
                'Set preparatory exams',
                'Conduct Mock exams',
                'Download participant scripts',
                'Download results',
                'Review Participant activities',
            ],
        },
        {
            name: 'Result Generator',
            icon: '/media/images/default/result.svg',
            link: '/',
            description:
                'Generate end-of-term results for your students. Students can view and download results in PDFs.',
            height: 139,
            width: 102,
            plugin: 'RESULT',
            hoverDescription: [
                'Conduct unlimited remote exams.',
                'Activate Proctored technology',
                'Exam engine supports over 5+ question format (objective, theory, true/false etc).',
                'Set preparatory exams',
                'Conduct Mock exams',
                'Download participant scripts',
                'Download results',
                'Review Participant activities',
            ],
        },
    ];
    return (
        <div
            className={`${styles.displayFlex} ${styles.flexWrap} ${styles.justifySpaceBtw}`}
        >
            {data.map(
                ({ name, icon, height, width, description, plugin }, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        onMouseOver={() => {
                            setActiveCard(index);
                            setShow(true);
                        }}
                        onMouseOut={() => {
                            setShow(false);
                        }}
                    >
                        <div className={`${styles.displayFlex}`}>
                            <Image
                                src={icon}
                                alt={name}
                                height={height}
                                width={width}
                            />
                            <div className={styles.holder}>
                                <div className={styles.name}>{name}</div>
                                <div className={styles.text}>{description}</div>
                                <div className={styles.textAlignRight}>
                                    <Button
                                        className={styles.btn}
                                        onClick={() =>
                                            check(plugin)
                                                ? removePlugin(plugin)
                                                : AddPlugin(plugin)
                                        }
                                    >
                                        {check(plugin) ? 'Remove' : 'Add'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <HoverCard
                            content={data[index]}
                            show={show}
                            index={index}
                            activeCard={activeCard}
                            // check={check}
                            // removePlugin={removePlugin}
                            // AddPlugin={AddPlugin}
                            // plugin={plugin}
                        />
                    </div>
                )
            )}
        </div>
    );
}

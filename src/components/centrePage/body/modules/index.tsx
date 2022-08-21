import Button from '../../../button';
import Image from '../../../shared/image';
import useStyles from './style';
import { useRouter } from 'next/router';

export default function CentreSingleView({
    hasCourse,
    hasExam,
    hasLeague,
    hasPublication,
    slug,
    id,
}) {
    const styles = useStyles();
    const router = useRouter();
    const data = [
        {
            name: 'Exam Creator',
            icon: '/media/images/default/examIcon.svg',
            link: `/${slug}/${id}/exam-plugin`,
            description:
                'Plugin makes you conduct unlimited proctored exams, set preparatory exams and mocks, permits the selling of prep exams to your subscribers/students',
            height: 132,
            width: 114,
            status: hasExam,
        },
        {
            name: 'Competition Generator ',
            icon: '/media/images/default/competition.svg',
            link: `/${slug}/${id}/league-plugin`,
            description:
                'Host online competition among your students. The best online competition generator. Very competitive and interractive',
            height: 134,
            width: 114,
            status: hasLeague,
        },
        {
            name: 'Result Generator',
            icon: '/media/images/default/result.svg',
            link: `/${slug}/${id}/session`,
            description:
                'Generate end-of-term results for your students. Students can view and download results in PDFs.',
            height: 174,
            width: 200,
            status: false,
        },
        {
            name: 'Certificate Generator',
            icon: '/media/images/default/certificate.svg',
            link: `/${slug}/${id}/certificate-plugin`,
            description:
                'Generate Certification for your students who have completed a course.',
            height: 150,
            width: 130,
            status: false,
        },
        {
            name: 'Online Course Creator ',
            icon: '/media/images/default/online.svg',
            link: `/${slug}/${id}/course-plugin`,
            description:
                'Plugin makes you host unlimited Online courses with your students. These could be pre-recorded vidoes, audio or PDFs. Set courses in Modules and many more.',
            height: 115,
            width: 86,
            status: hasCourse,
        },
        {
            name: 'Publisher ',
            icon: '/media/images/default/.svg',
            link: `/${slug}/${id}/publication-plugin`,
            description:
                'Use this plugins to sell and share Downloadable contents. Books, journals, notes, templates, woorsheets, projects etc. can be sold easily with this plugin',
            height: 91,
            width: 85,
            status: hasPublication,
        },
    ];
 
    return (
        <div
            className={`${styles.displayFlex} ${styles.flexWrap} ${styles.justifySpaceBtw}`}
        >
            {data.map(
                (
                    { name, icon, height, width, description, link, status },
                    index
                ) =>
                    status && (
                        <div
                            key={index}
                            className={`${styles.displayFlex} ${styles.card}`}
                        >
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
                                        variant="contained"
                                        color="primary"
                                        className={styles.btn}
                                        onClick={() => router.push(link)}
                                    >
                                        Explore
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
            )}
        </div>
    );
}

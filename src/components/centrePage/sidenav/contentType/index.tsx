import { useRouter } from 'next/router';
import Image from '../../../shared/image';
import useStyles from './style';

export default function CentreSingleView({
    slug,
    centreId,
    hasExam,
    hasLeague,
}) {
    const styles = useStyles();
    const router = useRouter();

    return (
        <div className={styles.contentTypeContainer}>
          { hasExam && <div
                className={`${styles.linksContentType}`}
                onClick={() => router.push(`/${slug}/${centreId}/exam-plugin`)}
            >
                <Image
                    src="/media/images/default/examIcon.svg"
                    alt="exam"
                    height="22px"
                    width="23px"
                />
                <span className={styles.marginLeft15}>Exams Creator</span>
            </div>}
            {hasLeague &&<div
                className={`${styles.linksContentType}`}
                onClick={() =>
                    router.push(`/${slug}/${centreId}/league-plugin`)
                }
            >
                <Image
                    src="/media/images/default/competition.svg"
                    alt="exam"
                    height="22px"
                    width="23px"
                />
                <span className={styles.marginLeft15}>
                    Competition Generator
                </span>
            </div>}
            <div
                className={`${styles.linksContentType} ${styles.cursor}`}
                onClick={() => router.push(`/${slug}/${centreId}/sessions`)}
            >
                <Image
                    src="/media/images/default/result.svg"
                    alt="exam"
                    height="22px"
                    width="23px"
                />
                <span className={styles.marginLeft15}>Results Generator</span>
            </div>
            <div className={`${styles.linksContentType}`}>
                <Image
                    src="/media/images/default/certificate.svg"
                    alt="exam"
                    height="22px"
                    width="23px"
                />
                <span className={styles.marginLeft15}>
                    Certificate Generator
                </span>
            </div>
        </div>
    );
}

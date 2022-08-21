import useGlobalStyle from '../../styles';
import useStyle from './style';
import BackToPage from '../shared/backToPage';
import Button from '../button';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddReview from '../review/addReview';

interface Props {
    setEndExam?;
    setShowCorrection?;
    completeMessage?;
    name?;
    score?;
    duration?;
    maxScore?;
    showCorrection?;
    allowReview?;
    allowReattempt?;
    examId?;
    examSlug?;
    centreId?;
    leagueId?;
    hasTheory?;
    pendingMark?;
}

export default function EndExamPage({
    setEndExam,
    setShowCorrection,
    completeMessage,
    name,
    score,
    duration,
    maxScore,
    showCorrection,
    allowReview,
    allowReattempt,
    examId,
    examSlug,
    centreId,
    leagueId,
    hasTheory,
    pendingMark,
}: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();

    return (
        <div className={`${style.examWidth}`}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems}`}
            >
                <h2 className={globalStyle.top1rem}>{name}</h2>
                <BackToPage>
                    <strong
                        style={{
                            border: 'solid 1px black',
                            padding: '5px 15px',
                        }}
                    >
                        Go back to exam
                    </strong>
                </BackToPage>
            </div>
            <div className={globalStyle.top1rem}>
                <LinearProgress variant="determinate" value={100} />
            </div>
            <div
                className={`${globalStyle.textAlignCenter} ${globalStyle.mt3rem}`}
            >
                <h1>
                    Marked answer:{' '}
                    <span className={`${globalStyle.primaryColor}`}>
                        You Scored {score}
                    </span>
                </h1>
                {hasTheory && (
                    <h1>
                        theoretical score:{' '}
                        <span className={`${globalStyle.primaryColor}`}>
                            Pending marks ({pendingMark})
                        </span>
                    </h1>
                )}

                <h2 style={{ marginTop: '1rem' }}>
                    Duration:
                    <span className={`${globalStyle.primaryColor}`}>
                        {Math.floor(duration / 60) +
                            ':' +
                            Math.floor(duration % 60)}
                    </span>
                </h2>
                <h2 className={`${globalStyle.boldFont}`}>
                    Maximum Score:
                    <span className={`${globalStyle.primaryColor}`}>
                        {maxScore}
                    </span>
                </h2>
            </div>
            <div
                className={`${globalStyle.textAlignCenter} ${globalStyle.mt3rem}`}
            >
                {showCorrection && (
                    <Button
                        className={`${globalStyle.ml1rem}`}
                        color="primary"
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            setEndExam(false);
                            setShowCorrection(true);
                        }}
                    >
                        Show Correction
                    </Button>
                )}
                {allowReattempt && (
                    <span className={globalStyle.ml1rem}>
                        <Button
                            color="primary"
                            variant="outlined"
                            size="small"
                            onClick={() => location.reload()}
                        >
                            Re-attempt Exam
                        </Button>
                    </span>
                )}
                {allowReview && <AddReview id={examId} />}
            </div>
            <div className={`${globalStyle.top1rem} ${globalStyle.bottom1rem}`}>
                <h2 style={{ color: 'red' }}>Completion Message</h2>
                {completeMessage ? (
                    <div
                        className={style.instruction}
                        dangerouslySetInnerHTML={{ __html: completeMessage }}
                    />
                ) : (
                    <div className={style.instruction}>
                        You have successfully come to the end of this test.
                    </div>
                )}
            </div>
        </div>
    );
}

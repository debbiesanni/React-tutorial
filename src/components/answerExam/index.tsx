import { useState } from 'react';
import useStyle from './style';
import InstructionPage from './instruction';
import QuestionPage from './questions';
import EndExam from './endExam';
import ShowCorrection from './showCorrection';

export default function AnswerPage({
    centreId,
    examId,
    examData,
    user,
    leagueId,
    embedId,
}) {
    const style = useStyle();
    const [instruction, setInstruction] = useState(true);
    const [questions, setQuestions] = useState(false);
    const [sections, setSections] = useState([]);
    const [sectionIndex, setSectionIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [result, setResult] = useState<Record<string, any>>({});
    const [endExam, setEndExam] = useState(false);
    const [showCorrection, setShowCorrection] = useState(false);
    const exam = examData?.data;
    const [duration, setDuration] = useState(exam?.duration);
    const [questionLength, setQuestionLength] = useState(null);

    let display;
    if (instruction) {
        display = (
            <InstructionPage
                setQuestions={setQuestions}
                setInstruction={setInstruction}
                {...exam}
                setDuration={setDuration}
                setQuestionLength={setQuestionLength}
            />
        ); 
    } else if (questions) {
        display = (
            <QuestionPage
                setQuestions={setQuestions}
                setEndExam={setEndExam}
                examId={examId}
                setSections={setSections}
                name={exam?.name}
                questionIndex={questionIndex}
                sectionIndex={sectionIndex}
                setQuestionIndex={setQuestionIndex}
                sections={sections}
                centreId={centreId}
                setSectionIndex={setSectionIndex}
                duration={duration}
                setResult={setResult}
                hasPin={exam?.hasPin}
                user={user && JSON.parse(user.user)}
                allowPause={exam?.allowTimerPause}
                questionLength={questionLength}
                leagueId={leagueId}
                embedId={embedId}
                hasProctor={exam.hasProctor}
            />
        );
    } else if (endExam) {
        display = (
            <EndExam
                setShowCorrection={setShowCorrection}
                setEndExam={setEndExam}
                name={exam?.name}
                completeMessage={exam?.completionMessage}
                {...result}
                showCorrection={exam?.showCorrection}
                allowReattempt={exam?.allowReattempt}
                allowReview={exam?.allowReview}
                examId={examId}
                examSlug={exam?.slug}
                centreId={centreId}
                leagueId={leagueId}
            />
        );
    } else if (showCorrection) {
        display = (
            <ShowCorrection
                answerId={result?.answerId}
                name={exam?.name}
                token={user?.token}
                examId={examId}
                examSlug={exam?.slug}
                centreId={centreId}
                leagueId={leagueId}
            />
        );
    }
    return <div className={`${style.exambody}`}>{display}</div>;
}

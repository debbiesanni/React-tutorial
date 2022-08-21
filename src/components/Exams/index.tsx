import ExamComponent from '../category';

export default function Exam({ exams, centreId, folderId, isPrivate }) {

    return (
                <ExamComponent
                    centreId={centreId}
                    folderId={folderId}
                    exams={exams}
                    isPrivate={isPrivate}
                />
    );
}

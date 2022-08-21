import ManageExam from './generalSettings';
import Links from './links';

function Settings({
    exam,
    centreId,
    id,
    centreSlug,
}) {

    return (
        <div>
            <Links centreSlug={centreSlug} title="General Exam Setings"/>
            <ManageExam exam={exam} examId={id} centreId={centreId} />,
        </div>
    );
}

export default Settings;

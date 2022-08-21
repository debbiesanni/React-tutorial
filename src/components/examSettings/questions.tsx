import Questions from '../sections';
import Links from './links';

function Settings({ user, questions, centreId, id, centreSlug }) {
    return (
        <>
            <Links centreSlug={centreSlug} title="Add Questions" />
            <div style={{ padding: '40px 20px 0 20px' }}>
                <div
                    style={{ color: '#999999', fontSize: 16, marginBottom: 20 }}
                >
                    Assign questions from your question bank into your exam. If
                    you don’t have a question bank or questions in your question
                    bank, please go to the question bank tab in your centre and
                    create a question bank or add questions to your question
                    bank.
                </div>
                <Questions
                    centreId={centreId}
                    examId={id}
                    token={user?.token}
                    questions={questions}
                />
            </div>
        </>
    );
}

export default Settings;

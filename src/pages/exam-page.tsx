import ExamPage from '../components/Exams/examLandingPage';
import Wrapper from '../components/wrapper';

export default function ExamPageComponent() {
    return (
        <div>
            <Wrapper
                title="Exam"
                description="Exam page"
                showLogOutHeader={true}
                showFooter={true}
            >
                <ExamPage />
            </Wrapper> 
        </div>
    );
}

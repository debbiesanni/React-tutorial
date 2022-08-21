import Result from '../result/examResult';
import Links from './links';

function Settings({ user, results, centreId, id, centreSlug }) {

    return (
        <>
            <Links centreSlug={centreSlug} title="Results" />
            <Result
                centreId={centreId}
                examId={id}
                token={user?.token}
                result={results}
            />
        </>
    );
}

export default Settings;

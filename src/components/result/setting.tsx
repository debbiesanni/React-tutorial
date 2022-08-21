import Dropdown from '../shared/dropdown';
import useGlobalStyle from '../../styles';
import AddScore from './addScore';
import ParticipantScript from './participantScript';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import ResultLog from './resultLog';
interface Props {
    centreId?: string;
    examId?: string;
    answer?: any;
    token?: string;
    answerId: string;
    surname: string;
    firstname: string;
}

export default function CategorySettings({
    centreId,
    examId,
    answer,
    token,
    answerId,
    surname,
    firstname,
}: Props) {
    const globalStyle = useGlobalStyle();
    const content = (
        <div>
            <ParticipantScript
                centreId={centreId}
                examId={examId}
                answer={answer?.answers}
                token={token}
                surname={surname}
                firstname={firstname}
            />
            <AddScore
                centreId={centreId}
                examId={examId}
                token={token}
                answerId={answerId}
            />
            <ResultLog result={answer} centreId={centreId} />
        </div>
    );
    return (
        <div>
            <Dropdown
                trigger={<MoreHoriz />}
                content={content}
                className={globalStyle.contactContainer}
                defaultSetting={true}
            />
        </div>
    );
}

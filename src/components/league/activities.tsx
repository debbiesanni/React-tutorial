import useGlobalStyle from '../../styles';
import useStyle from './style';
import { covertSecondsToMinute, formatEventDate } from '../../utils';
import moment from 'moment';

export default function Activities({ activities }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();

    return (
        <div className={globalStyle.paddingLR1rem}>

            {activities?.data?.length > 0 ? activities?.data?.map(
                (
                    {
                        surname,
                        firstname,
                        examName,
                        createdAt,
                        score,
                        duration,
                    },
                    index
                ) => (
                    <div
                        key={index}
                        className={`${style.activities} ${globalStyle.bottom1rem}`}
                    >
                        <div>
                            <strong>
                                {surname} {firstname}
                            </strong>{' '}
                            took part in <strong>{examName}</strong> examination
                            on the <strong>{formatEventDate(createdAt)}</strong>{' '}
                            and scored <strong>{score}</strong> within{' '}
                            <strong>
                                {covertSecondsToMinute(duration)} (time in
                                minitues)
                            </strong>
                        </div>
                        <strong
                            className={`${globalStyle.greyColor} ${style.font13}`}
                        >
                            {moment(createdAt).fromNow()}
                        </strong>
                    </div>
                )
            ) : "No content found"}
        </div>
    );
}

import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import theme from 'styles/theme';
import useGlobalStyle from '../../styles';
// import { formatEventDate } from '../../utils';
// import moment from 'moment';

export default function CentreContact({ result }) {
    const globalStyle = useGlobalStyle();
    
    return (
   
        <div>
            <div
                style={{ background: theme.palette.grey['100'] }}
                className={`${globalStyle.padding1rem} ${globalStyle.bottom1rem}`}
            >
                <strong>
                    {result.firstname} {result.surname}
                </strong>{' '}
                took part in the examination and scored{' '}
                <strong>{result.score}</strong> within
                <strong> {result.duration}</strong> seconds
                {/* <div className={globalStyle.greyColor}>
                    {moment(result.createdAt).fromNow()}
                    seconds a few seconds ago
                </div> */}
            </div>
        </div>
    );
}

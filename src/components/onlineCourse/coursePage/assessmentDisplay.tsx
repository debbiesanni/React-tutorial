import moment from 'moment';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import Link from '@components/shared/link';
import useGlobalStyle from '@styles/index';

interface Props {
    name: string;
    createdAt: Date;
}

const AssessmentDisplay = ({
    name,
    createdAt,
}: Props) => {
    const gStyle = useGlobalStyle();

    return (
        <Link link="/">
            <div
                className={`${gStyle.center} ${gStyle.top1rem}`}
                style={{ width: '100%' }}
            >
                <div
                    style={{ marginRight: '10px' }}
                    className={`${gStyle.displayFlex} ${gStyle.alignItems}`}
                >
                    <AssessmentIcon />
                    <p style={{ marginLeft: 10 }}>{name}</p>
                </div>
                <div style={{ color: 'gray' }}>
                    {moment(createdAt).fromNow()}
                </div>
            </div>
        </Link>
    );
};

export default AssessmentDisplay;

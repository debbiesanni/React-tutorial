import useGlobalStyle from '../../styles';
import ReadMore from 'read-more-react';

export default function CentreHome({ description }) {
    const globalStyle = useGlobalStyle();
    return (
        <div className={`${globalStyle.top1rem} ${globalStyle.paddingLR1rem}`}>
            <div className={globalStyle.bottom1rem}>
                <strong>About</strong>
            </div>
            <ReadMore text={description.replace(/(<([^>]+)>)/gi, '')} />
        </div>
    );
}

import useGlobalStyle from '../../styles';
import ReadMore from 'read-more-react';
import { formatEventDate } from '../../utils';

export default function Home({ description, }) {
    const globalStyle = useGlobalStyle();
    // const parser: any = parse(description)

    return (
        <div className={`${globalStyle.top1rem} ${globalStyle.paddingLR1rem}`}>

            <div className={globalStyle.bottom1rem}>
                <strong>About</strong>
            </div>
            <ReadMore text={description.replace(/(<([^>]+)>)/gi, '')} />
        </div>
    );
}

import useGlobalStyle from '../../styles';
import parse from 'html-react-parser';
import ShowMoreLess from '../shared/showMoreLess';

export default function Home({ description }) {
    const globalStyle = useGlobalStyle();
    const parser: any = parse(description)
    return (
        <div className={`${globalStyle.top1rem} ${globalStyle.paddingLR1rem}`}>
            <div className={globalStyle.bottom1rem}>
                <strong>About</strong>
            </div>

            <ShowMoreLess description={parser.props.children} less={100} />
        </div>
    );
}

import Tab from './tab';
import Review from '../review/index';
import useGlobalStyle from '../../styles';
import FallBackImage from '../../../public/media/images/default/bookImg.svg';
import Link from '../shared/link';
import Card from '../card/audio';
import useStyle from './style';

export default function Publication() {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const content = {
        name: 'Omoijiade Company',
        description:
            'Relationships That’ll Elevate Your Career & Create Financial Abundance',
    };
    return (
        <>
            <div> Dashboard / my courses</div>
            <Card content={content} />
            <div className={globalStyle.pt1rem}>
                <Tab description />
            </div>
            <div>
                <Review id />
            </div>
        </>
    );
}

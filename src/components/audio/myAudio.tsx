import { contents } from '../content/exam';
import Card from '../card/audio';
import useGlobalStyle from '../../styles';
import Link from '../shared/link';

export default function PublicExams() {
    const globalStyle = useGlobalStyle();
    return (
        <>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                <h2>My Audios</h2>
                <Link
                    link="/public-audios-page"
                    className={globalStyle.primaryColor}
                >
                    Public Audios
                </Link>
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                {contents.map((content, index) => (
                    <div key={index} className="flex50">
                        <Card content={content} noBtn={true} />
                    </div>
                ))}
            </div>
        </>
    );
}

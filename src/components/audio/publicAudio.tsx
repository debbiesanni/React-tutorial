import { contents } from '../content/exam';
import Card from '../card/audio';
import useGlobalStyle from '../../styles';

export default function PublicExams() {
    const globalStyle = useGlobalStyle();
    return (
        <>
            <h2>Public Audios</h2>
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

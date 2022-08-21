import useStyle from './style';
import Dropdown from '../shared/dropdown';
import useGlobalStyle from '../../styles';

export default function CategorySettings({
    questions,
    questionIndex,
    setQuestionIndex,
}) {
    const globalStyle = useGlobalStyle();
    const trigger = <h3 className={``}>Questions</h3>;
    const style = useStyle();

    const content = (
        <div>
            {questions?.map((e, index) => (
                <div
                    onClick={() => setQuestionIndex(index-1)}
                    key={index}
                    className={`${style.sectionTab} ${
                        questionIndex === index
                            ? style.activeSection
                            : style.sectionTab
                    }`}
                >
                    Question {++index}
                </div>
            ))}
        </div>
    );
    return (
        <div>
            <Dropdown
                trigger={trigger}
                content={content}
                className={globalStyle.contactContainer}
                defaultSetting={true}
            />
        </div>
    );
}

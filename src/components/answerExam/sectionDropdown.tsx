import Dropdown from '../shared/dropdown';
import useGlobalStyle from '../../styles';
import useStyle from './style';

export default function CategorySettings({
    sections,
    setSectionIndex,
    setQuestionIndex,
    sectionIndex,
}) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const trigger = <h3>Sections</h3>;
    const content = (
        <div>
            {sections.map(
                ({ name, questions }, index) =>
                    questions.length > 0 && (
                        <div
                            onClick={() => {
                                setSectionIndex(index);
                                setQuestionIndex(0);
                            }}
                            key={index}
                            className={`${style.sectionTab} ${
                                sectionIndex === index
                                    ? style.activeSection
                                    : style.sectionTab
                            }`}
                        >
                            {name}
                        </div>
                    )
            )}
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

import Dropdown from '../shared/dropdown';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import Pin from '../../../public/media/images/default/pin.svg';
import useStyle from './style';

export default function PinnedQuestions({
    PinnedQuestions,
    setSectionIndex,
    setQuestionIndex,
    questionIndex,
    sections,
}) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const trigger = (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.cursor}`}
        >
            <Image src={Pin} alt="pin" height="15px" width="15px" />
            <div className={globalStyle.greyColor}>pinned question</div>
        </div>
    ); 

    const content = (
        <div>
            {sections.map(({ name }, index) =>
                PinnedQuestions[`section${index}`]?.length > 0 ? (
                    <div key={index}>
                        <h3 style={{ textTransform: 'capitalize' }}>{name}</h3>
                        <div
                            className={`${globalStyle.ml1rem}`}
                            style={{ fontSize: 12 }}
                        >
                            {PinnedQuestions[`section${index}`]?.map(
                                (e, indexQutn) => (
                                    <div
                                        onClick={() => {
                                            setSectionIndex(index);
                                            setQuestionIndex(indexQutn);
                                        }}
                                        key={indexQutn}
                                        className={`${style.sectionTab} ${
                                            questionIndex === indexQutn
                                                ? style.activeSection
                                                : style.sectionTab
                                        }`}
                                    >
                                        Question {e}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                ) : (
                    <div style={{ fontSize: 11 }}>NO PINNED QUESTION</div>
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

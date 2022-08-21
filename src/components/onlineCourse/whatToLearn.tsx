import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import useGlobalStyle from '../../styles';

export default function PublicExam() {
    const globalStyle = useGlobalStyle();
    const contents = [
        'UserFlow, User Journey using  FlowMapp',
        'Wireframes (Low-Fidelity & High Fidelioty)',
        'User Research, Ideation',
        'Mobile Interface (IOS, Android)',
        'Interactive Design ',
        'IOS Design Guidelines',
        'Prototyping using Figma ',
        'Material Design Guidelines  ',
    ];
    return (
        <>
            <h1 className={`${globalStyle.pt1rem} ${globalStyle.bottom1rem}`}>
                What you will learn
            </h1>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
            >
                {contents.map((content, index) => (
                    <div
                        className={`${globalStyle.pt1rem} ${globalStyle.pb1rem} ${globalStyle.borderBottom} ${globalStyle.greyColor} ${globalStyle.displayFlex} ${globalStyle.alignItems} flex50`}
                        key={index}
                    >
                        <CheckCircleOutline style={{ marginRight: 7 }} />
                        {content}
                    </div>
                ))}
            </div>
        </>
    );
}

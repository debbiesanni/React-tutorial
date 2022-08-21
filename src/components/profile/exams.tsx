import Card from '../card';
import useGlobalStyle from '../../styles';

export default function ProfileExams({ exams }) {
    const globalStyle = useGlobalStyle();

    return (
        <>
            <h3>My Exams</h3>
            <div
                className={`${globalStyle.mt10px} ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
            >
                {exams.length > 0
                    ? exams.map((content, index) => (
                          <div key={index} className="flex25">
                              <Card {...content} />
                          </div>
                      ))
                    : "You haven't subscribe to any Exams"}
            </div>
        </>
    );
}

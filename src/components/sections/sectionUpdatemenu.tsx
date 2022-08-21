import Dropdown from '../shared/dropdown';
import useGlobalStyle from '../../styles';
import Update from './update';
import Delete from '../shared/delete';
import { SettingsOutlined } from '@material-ui/icons';

export default function SectionSettings({
    centreId,
    examId,
    examSectionId,
    name,
    description,
    setSections,
    sections,
    index
}) {
    const globalStyle = useGlobalStyle();
    const content = (
        <div>
            <Update
                centreId={centreId}
                examId={examId}
                id={examSectionId}
                name={name}
                description={description}
            />
            <Delete
                name="Section"
                url={`/centre/${centreId}/exam/${examId}/question-section/${examSectionId}`}
                setData={setSections}
                dataReset={sections}
                index={index}
            />
        </div>
    );
    return (
        <div
            className={`${globalStyle.justifyFlexEnd} ${globalStyle.displayFlex}`}
        >
            <Dropdown
                trigger={<SettingsOutlined />}
                content={content}
                className={globalStyle.contactContainer}
                defaultSetting={true}
            />
        </div>
    );
}

import Dropdown from '../shared/dropdown';
import Settings from '@material-ui/icons/Settings';
import useGlobalStyle from '../../styles';
import UndateDialog from '../questionBank/update';
import DeleteDialog from '../shared/delete';

export default function CategorySettings({
    centreId,
    questionBankId,
    description,
    name,
}) {
    const globalStyle = useGlobalStyle();
    const content = (
        <div>
            <UndateDialog
                centreId={centreId}
                questionBankId={questionBankId}
                description={description}
                name={name}
            />
            <DeleteDialog
                name="Question Bank"
                url={`/centre/${centreId}/question-bank/${questionBankId}`}
                routerBack={true}
            />
        </div>
    );
    return (
        <div>
            <Dropdown
                trigger={<Settings />}
                content={content}
                className={globalStyle.contactContainer}
                defaultSetting={true}
            />
        </div>
    );
}

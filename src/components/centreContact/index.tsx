import useStyle from '../centre/style';
import Dropdown from '../shared/dropdown';
import AddDialog from './add';
import UndateDialog from './update';
import useGlobalStyle from '../../styles';

export default function CentreContact({ trigger }) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const content = (
        <div>
            <AddDialog />
            <UndateDialog />
        </div>
    );
    return (
        <Dropdown
            trigger={trigger}
            content={content}
            className={globalStyle.contactContainer}
            defaultSetting={true}
        />
    );
}

import useGlobalStyle from '../../styles';
import useDialog from '../dialog/index.old';
import Button from '../button';
import Input from '@components/shared/input';

export default function CentreContact() {
    const globalStyle = useGlobalStyle();
    const { Dialog, open } = useDialog();


    const addContect = (
        <div>

            <Input
                placeholder="Enter Center Phone number"
                name="phoneNumber"
                type="text"
                labelWidth={200}
            />

            <Input
                placeholder="Enter Center Address"
                name="centerAddress"
                type="text"
                labelWidth={150}
            />

            <Input
                placeholder="Enter Center Email Address"
                name="centerEmail"
                type="text"
                labelWidth={200}
            />

            <Input
                placeholder="Enter Center Site Link"
                name="SiteLink"
                type="text"
                labelWidth={150}
            />

            <Button
                onClick={() => alert(99)}
                color="primary"
                variant="contained"
                className={`${globalStyle.bottom1rem} ${globalStyle.top1rem}`}
            >
                Add Centre Contact
            </Button>
        </div>
    );
    return (
        <div>
            <div
                onClick={() => open(true)}
                className={`${globalStyle.dropdown}`}
            >
                Add Center Contact
            </div>
            <Dialog content={addContect} title="Add Contact" size="sm" />
        </div>
    );
}

import { useState } from 'react';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Button from '../button';
import { getServerData, postContent, session } from '../../utils';
import useForm from '../../hooks/useForm';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import Input from '../shared/input';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

interface Props {
    text?: boolean;
    setListCentres?: Function;
    listCentres?: any;
    centreId:string;
}
export default function AddCentre({
    setListCentres,
    listCentres,
    text,
    centreId
}: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const userId = session.get('user')?.id;
    const [banks, setBanks] = useState([]);

    const handleChange = (event) => {
        createForm.setDefault({ bankCode: event.target.value });
    };
    async function getBank() {
        setMessage('');
        try {
            setIsLoading(true);
            const { data } = await getServerData(`/pay/banks/NG`);
            setBanks(data.data);
            setIsLoading(false);
            setMessage('Successful');
            openDialog();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            await postContent({
                url: centreId ? `/wallet/bank-transfer?centreId=${centreId}` : '/wallet/bank-transfer',
                data: createForm.values,
            });
            setMessage(' Successfully');
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }

    const addContect = (
        <div>
            <Input
                placeholder="Enter Amount"
                name="amount"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
                required
            />
            <Input
                placeholder="Enter Account Number"
                name="accountNumber"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
                required
            />
            <InputLabel htmlFor="bankCode">Bank Name</InputLabel>
            <Select
                style={{
                    minWidth: '100%',
                }}
                className={globalStyle.bottom1rem}
                native
                value={createForm.values.bankCode}
                onChange={handleChange}
                label="Bank Name"
                inputProps={{
                    name: 'bankCode',
                    id: 'bankCode',
                }}
            >
                <option aria-label="None" value="Select bank name" />
                {banks?.length >= 0 &&
                    banks.map(({ name, code }, index) => (
                        <option value={code} key={index}>
                            {name}
                        </option>
                    ))}
            </Select>
            <Input
                placeholder="Enter narration"
                name="narration"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
            />
        </div>
    );
    const value = <> Transfer {isLoading && <Loading />}</>;

    return (
        <div style={{marginBottom: 10}}>
            <Button
                onClick={() => getBank()}
                variant="outlined"
                color="primary"
            >
                Wallet To Bank Transer {isLoading && <Loading />}
            </Button>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Wallet To Wallet Transfer"
                size="sm"
                buttons={[
                    {
                        value: value,
                        onClick: () => createForm.submit(),
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </div>
    );
}

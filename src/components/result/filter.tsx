import useGlobalStyle from '../../styles';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { getServerData } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useState } from 'react';
import Input from '@components/shared/input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

interface Props {
    token?: string;
    centreId?: string;
    examId?: string;
    setSubscriber: Function;
}

const CentreContact = ({ centreId, examId, token, setSubscriber }: Props) => {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [loading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const handleChange = (event) => {
        createForm.setDefault({ gender: event.target.value });
    };
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            let queryString = '&';
            for (let query in createForm.values) {
                queryString += `${query}=${createForm.values[query]}&`;
            }
            const { data } = await getServerData(
                `/centre/${centreId}/exam/${examId}/answers?limit=1000000${queryString}`,
                { token: token }
            );
            setSubscriber(data.result);
            setMessage(data.message);
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }

    const addExamContent = (
        <div>
            <Input
                placeholder="Enter Maximum Score"
                name="maxScore"
                type="number"
                onChange={(e) => createForm.getData(e)}
                labelWidth={140}
            />
            <Input
                placeholder="Enter Minimum Score"
                name="minScore"
                type="number"
                onChange={(e) => createForm.getData(e)}
                labelWidth={140}
            />
            <Input
                placeholder="Enter From Date"
                name="fromDate"
                type="date"
                onChange={(e) => createForm.getData(e)}
                labelWidth={140}
            />
            <Input
                placeholder="Enter To Date"
                name="toDate"
                type="date"
                onChange={(e) => createForm.getData(e)}
                labelWidth={140}
            />
            <h4>Select Gender</h4>
            <FormControl
                variant="outlined"
                style={{
                    minWidth: '100%',
                }}
            >
                <InputLabel htmlFor="type">Gender</InputLabel>
                <Select
                    className={globalStyle.bottom1rem}
                    native
                    value={createForm.values.gender}
                    onChange={handleChange}
                    label="Gender"
                    inputProps={{
                        name: 'gender',
                        id: 'gender',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="others">others</option>
                </Select>
            </FormControl>
        </div>
    );
    return (
        <div>
            <div onClick={() => openDialog()} className={globalStyle.dropdown}>
                Filter Result
            </div>
            <Dialog
                content={addExamContent}
                open={isOpen}
                handleClose={closeDialog}
                title="Filter Exam Result"
                size="sm"
                buttons={[
                    {
                        value: <>Filter {loading && <Loading />}</>,
                        onClick: () => createForm.submit(),
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </div>
    );
};
export default CentreContact;

import useGlobalStyle from '../../styles';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import useDialog from '../../hooks/useDialog';
import Dialog from '../dialog';
import AddBtn from '../addBtn';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@components/shared/input';

export default function CentreContact({ centreId }) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const  {message}  = await postContent({
                url: `/centre/${centreId}/centre-manager`,
                data: createForm.values,
            });
            
            setMessage(message);
            setIsLoading(false);
            closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    const addContect = (
        <div>

            <Input
                placeholder="Enter Username"
                name="username"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
            />

            <FormControl
                variant="outlined"
                style={{
                    minWidth: '100%',
                }}
            >
                <InputLabel htmlFor="role">User Role</InputLabel>
                <Select
                    className={globalStyle.bottom1rem}
                    native
                    value={createForm.values.role}
                    onChange={(e) => createForm.getData(e)}
                    label="User Role"
                    inputProps={{
                        name: 'role',
                        id: 'role',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value="OWNER">OWNER</option>
                    <option value="MANAGER">MANAGER</option>
                </Select>
            </FormControl>
        </div>
    );
    const value = <> Add Manager {isLoading && <Loading />}</>;
    return (
        <div>
            <AddBtn text="Add Manager" onClick={openDialog} />

            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Add Manager"
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

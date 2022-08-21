import { useState } from 'react';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { Editor } from '../../utils/addon';
import Switch from '../shared/mapSwitch';
import AddBtn from '../addBtn';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Input from '@components/shared/input';
import { useAppDispatch } from '@redux/hooks';
import { addLeague } from '@redux/slice/league';

export default function Add({ centreId, setLeagues, leagues, folderId }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const { isOpen, openDialog, closeDialog } = useDialog();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const createForm = useForm(submit);
    const dispatch = useAppDispatch();
    const [sendEditor, setSendEditor] = useState();

    const handleChangeEditor = (input) => {
        const result: any = input;
        setSendEditor(result);
    };

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            folderId && createForm.setData('folderId', folderId);
            if (
                new Date(createForm.values.endDate).getTime() <=
                new Date(createForm.values.startDate).getTime()
            ) {
                setMessage('End date should be greater than start date');
                setIsLoading(false);
            } else {
                createForm.setData('description', sendEditor);
                const { data } = await postContent({
                    url: `/centre/${centreId}/league`,
                    data: createForm.values,
                });
                setLeagues([...leagues, data]);
                setIsLoading(false);
                closeDialog();
            }
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }
    const switchContent = [
        {
            name: 'isSearchable',
            label: 'Is Searchable',
            onChange: createForm.getData,
            defaultValue: createForm.values.isSearchable,
        },
    ];

    const addContect = (
        <div>
            {/* <InputMap form={form} /> */}
            <Input
                placeholder="Enter League Name"
                name="name"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
                required
            />
            <Input
                placeholder="Enter League Start Date"
                name="startDate"
                type="datetime-local"
                labelWidth={170}
                onChange={(e) => createForm.getData(e)}
                className="removeDateInput"
                required
            />
            <Input
                placeholder="Enter League End Date"
                name="endDate"
                type="datetime-local"
                labelWidth={160}
                onChange={(e) => createForm.getData(e)}
                className="removeDateInput"
                required
            />
            <Editor name="description" setter={handleChangeEditor} />
            <div className={globalStyle.displayFlex}>
                <Switch content={switchContent} />
            </div>
        </div>
    );
    const value = <>Add new league {isLoading && <Loading />}</>;
    return (
        <div>
            <div
                onClick={() => openDialog()}
                className={`${globalStyle.dropdownList} ${globalStyle.bottom5px}`}
            >
                create League
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Add New League"
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
